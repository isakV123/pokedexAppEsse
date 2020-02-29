import { Component } from '@angular/core';
import { DadosPokemonPage } from '../dados-pokemon/dados-pokemon.page';
import { DadosService } from '../servicos/dados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public listaPokemons = [


    {
      numero: '001',
      nome: 'Bulbasaur',
      tipos: ['Grass', 'Poison'],
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
    },

    {
      numero: '002',
      nome: 'Ivysaur',
      tipos: ['Grass', 'Poison'],
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'
    },

    {
      numero: '003',
      nome: 'Venusaur',
      tipos: ['Grass', 'Poison'],
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png'
    },

    {
      numero: '004',
      nome: 'Charmander',
      tipos: ['Fire'],
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'

    },

    {
      numero: '005',
      nome: 'Charmeleon',
      tipos: ['Fire'],
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png'

    },


    {
      numero: '006',
      nome: 'Charizard',
      tipos: ['Fire', 'Flying'],
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'

    },

    {
      numero: '007',
      nome: 'Squirtle',
      tipos: ['Water'],
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'

    },

    {
      numero: '008',
      nome: 'Wartortle',
      tipos: ['Water'],
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png'

    },

    {
      numero: '009',
      nome: 'Blastoise',
      tipos: ['Water'],
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png'

    },

    {
      numero: '010',
      nome: 'Caterpie',
      tipos: ['Bug'],
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png'

    }

  ];

  public listaFiltrada = [];

  constructor(public dadosService: DadosService, public router: Router) {
    this.resetarLista();
  }

  public resetarLista() {
    this.listaFiltrada = this.listaPokemons;
  }

  public abrirDadosPokemon(pokemon: any) {

    //Salva os dados no BD virtual
    this.dadosService.setDados('dadosPokemon', pokemon);

    //Abre outra página por programação
    this.router.navigateByUrl('/dados-pokemon');
  }

  public buscarPokemon(evento: any) {
    let busca = evento.target.value;

    this.resetarLista();

    if (busca && busca.trim() != '') {
      this.listaFiltrada = this.listaFiltrada.filter(dados => {
        if (dados.numero.toLowerCase().indexOf(busca.toLowerCase()) > -1) {
          return true;
        }
        if (dados.nome.toLowerCase().indexOf(busca.toLowerCase()) > -1) {
          return true;
        }
        return false;
      })
    }
  }
}

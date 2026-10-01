import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-list-of-pokemon',
  styleUrl: './list-of-pokemon.css',
  templateUrl: './list-of-pokemon.html',
})
export class ListOfPokemon {
  pokemonindexlist = signal([
    (name: 'Snorlax', type: 'Normal', region: 'Kanto', gameVersion: 'Gold | Silver | Crystal'),
    (name: 'Meowth', type: 'Normal', region: 'Kanto', gameVersion: 'Gold | Silver | Crystal'),
    (name: 'Exeggcute', type: 'Grass | Psychic', region: 'Kanto', gameVersion: 'Gold | Silver | Crystal'),
    (name: 'Lapras', type: 'Water | Ice', region: 'Kanto', gameVersion: 'Gold | Silver | Crystal'),
    (name: 'Umbreon', type: 'Dark', region: 'Johto', gameVersion: 'Gold | Silver | Crystal'),
    (name: 'Eevee', type: 'Normal', region: 'Kanto', gameVersion: 'Gold | Silver | Crystal'),
    (name: 'Dewgong', type: 'Water | Ice', region: 'Kanto', gameVersion: 'Gold | Silver | Crystal'),
    (name: 'Espeon', type: 'Psychic', region: 'Johto', gameVersion: 'Gold | Silver | Crystal'),
    (name: 'Flareon', type: 'Fire', region: 'Kanto', gameVersion: 'Gold | Silver | Crystal'),
    (name: 'Jolteon', type: 'Electric', region: 'Kanto', gameVersion: 'Gold | Silver | Crystal'),
    (name: 'Horsea', type: 'Water', region: 'Kanto', gameVersion: 'Gold | Silver | Crystal'),
    (name: 'Vaporeon', type: 'Water', region: 'Kanto', gameVersion: 'Gold | Silver | Crystal'),
    (name: 'Skarmory', type: 'Steel | Flying', region: 'Johto', gameVersion: 'Gold | Silver | Crystal')
  ])
}

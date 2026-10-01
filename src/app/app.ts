import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListOfPokemon } from './list-of-pokemon/list-of-pokemon'

@Component({
  imports: [RouterOutlet, ListOfPokemon],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('MiniProjectPokeMart');
}

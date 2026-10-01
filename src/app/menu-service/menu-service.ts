import { Component, inject } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu-service',
  standalone: true,
  template: `
  <div class='menu'>
    <h2> Pokemons </h2>
    @for (pokeitem of menuService.pokemonindexlistprice(); track pokeitem.id){
      <p>
        {{pokeitem.name}} - ${{pokeitem.price}}
        <button (click)="menuService.addToCart(pokeitem)"> Add to Cart </button>
      </p>
    }
  </div>
  `
})
export class MenuComponent{
  menuService = inject(MenuService);
}
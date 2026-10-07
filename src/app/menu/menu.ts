import { Component, inject } from '@angular/core';
import { MenuService } from '../menu-service';

@Component({
  selector: 'app-menu',
  standalone: true,
  template: `
    <div class="menu">
      <h2>Menu</h2>
      @for (pokeItem of menuService.PokeLists(); track pokeItem.id) {
        <p>
          {{ pokeItem.id }} - ₱{{ pokeItem.price }}
          <button (click)="menuService.addToCart(pokeItem)">Add to Cart</button>
        </p>
      }
    </div>
  `
})
export class Menu {
  menuService = inject(MenuService);
}

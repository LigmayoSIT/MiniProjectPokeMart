import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MenuService {
  //Menu Data
  pokemonindexlistprice = signal([
    { id: 1, name: 'Snorlax', price: 12},
    { id: 2, name: '', price: 13},
    { id: 3, name: '', price: 14},
    { id: 4, name: '', price: 15},
    { id: 5, name: '', price: 16},
    { id: 6, name: '', price: 17},
    { id: 7, name: '', price: 18},
    { id: 8, name: '', price: 19},
    { id: 9, name: '', price: 20},
    { id: 10, name: '', price: 21},
    { id: 11, name: '', price: 22},
    { id: 12, name: '', price: 23},
    { id: 13, name: '', price: 24},
  ]);

  //Cart State
  private cartItems = signal<any[]>([]);
  cart = this.cartItems.asReadonly();

  //Computed Total Price
  totalPrice = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.price, 0)
  );

  //Cart Functions
  addToCart(product: any){
    this.cartItems.update(current => [...current, product]);
  }

  clearCart(){
    this.cartItems.set([]);
  }
}

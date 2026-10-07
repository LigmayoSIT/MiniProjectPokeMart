import { Injectable, signal, computed } from '@angular/core';

@Injectable({providedIn: 'root'})
export class MenuService {
    PokeLists = signal([
        {id: 'Tyranitar', name: '', price: 50},//Johto
        {id: 'Umbreon', name: '', price: 50},//Johto
        {id: 'Pikachu', name: '', price: 50},//Kanto
        {id: 'Mewtwo', name: '', price: 50},//Kanto
        {id: 'Blaziken', name: '', price: 50},//Hoenn
        {id: 'Metagross', name: '', price: 50},//Hoenn
    ]);

    //Cart State
    private cartItems = signal<any[]>([]);
    cart = this.cartItems.asReadonly();

    //Computed Total Price
    totalPrice = computed(() => 
    this.cartItems().reduce((sum, item) => sum + item.price, 0)
    );

    //Cart Functions
    addToCart(product: any) {
        this.cartItems.update((current) => [...current, product]);
    }
    clearCart() {
        this.cartItems.set([]);
    }
}

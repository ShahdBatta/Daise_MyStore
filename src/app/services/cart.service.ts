import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  public cart$: Observable<CartItem[]> = this.cartSubject.asObservable();

  constructor() {
    this.loadCartFromLocalStorage();
  }

  addToCart(product: Product, quantity: number = 1): void {
    const existingItem = this.cartItems.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cartItems.push({
        ...product,
        quantity: quantity
      });
    }

    this.updateCart();
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.updateCart();
  }

  updateQuantity(productId: number, quantity: number): void {
    const item = this.cartItems.find(i => i.id === productId);
    if (item && quantity > 0) {
      item.quantity = quantity;
      this.updateCart();
    } else if (item && quantity <= 0) {
      this.removeFromCart(productId);
    }
  }

  getCartTotal(): number {
    return this.cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  }

  getCartCount(): number {
    return this.cartItems.reduce((count, item) => count + item.quantity, 0);
  }

  getCartItems(): CartItem[] {
    return [...this.cartItems];
  }

  clearCart(): void {
    this.cartItems = [];
    this.updateCart();
  }

  isCartEmpty(): boolean {
    return this.cartItems.length === 0;
  }

  private updateCart(): void {
    this.cartSubject.next([...this.cartItems]);
    this.saveCartToLocalStorage();
  }

  private saveCartToLocalStorage(): void {
    localStorage.setItem('mystore_cart', JSON.stringify(this.cartItems));
  }

  private loadCartFromLocalStorage(): void {
    const saved = localStorage.getItem('mystore_cart');
    if (saved) {
      this.cartItems = JSON.parse(saved);
      this.cartSubject.next([...this.cartItems]);
    }
  }
}
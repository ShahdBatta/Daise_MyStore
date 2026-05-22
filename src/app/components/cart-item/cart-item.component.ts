import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() item!: CartItem;

  // FIX #3: Add @Output decorators with EventEmitter
  @Output() removeClicked = new EventEmitter<number>();
  @Output() quantityChanged = new EventEmitter<{ id: number, quantity: number }>();

  // Emit remove event to parent
  onRemove(): void {
    this.removeClicked.emit(this.item.id);
  }

  // Emit quantity change event to parent
  onQuantityChange(newQuantity: any): void {
    const quantity = Number(newQuantity);
    if (quantity < 1 || isNaN(quantity)) {
      return;
    }
    this.quantityChanged.emit({
      id: this.item.id,
      quantity: quantity
    });
  }
}
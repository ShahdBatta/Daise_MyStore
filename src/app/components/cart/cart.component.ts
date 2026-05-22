import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  cartTotal: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calculateTotal();
    });
  }

  calculateTotal(): void {
    this.cartTotal = this.cartService.getCartTotal();
  }

  // FIX #1: Alert user when product is removed from cart
  removeItem(itemId: number): void {
    // Find product name for the alert
    const item = this.cartItems.find(cartItem => cartItem.id === itemId);
    const productName = item ? item.name : 'Product';

    // Remove from cart service
    this.cartService.removeFromCart(itemId);

    // Show notification to user
    this.showNotification(`${productName} removed from cart!`, 'remove');
  }

  // FIX #2: Handle ngModelChange for quantity updates
  updateQuantity(itemId: number, newQuantity: any): void {
    // Convert to number if needed
    const quantity = Number(newQuantity);

    // Validate quantity
    if (quantity < 1 || isNaN(quantity)) {
      return;
    }

    // Update in cart service
    this.cartService.updateQuantity(itemId, quantity);

    // Find item for notification
    const item = this.cartItems.find(cartItem => cartItem.id === itemId);
    const productName = item ? item.name : 'Product';

    // Show notification
    this.showNotification(`${productName} quantity updated to ${quantity}!`);

    // Recalculate total
    this.calculateTotal();
  }

  // Notification system (works for both add and remove)
  private showNotification(message: string, type: string = 'info'): void {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Style the notification
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #d4997d;
      color: white;
      padding: 15px 20px;
      border-radius: 4px;
      z-index: 1000;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      font-size: 14px;
      font-weight: 500;
      animation: slideIn 0.3s ease-in-out;
    `;

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(400px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);

    // Add to page
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.animation = 'slideIn 0.3s ease-in-out reverse';
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 3000);
  }

  checkout(): void {
    this.router.navigate(['/checkout']);
  }

  continueShopping(): void {
    this.router.navigate(['/']);
  }
}
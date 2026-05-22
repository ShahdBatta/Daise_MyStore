import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { Order, CustomerInfo, CartItem } from '../../models/product.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';
  city: string = '';
  zipCode: string = '';
  cardNumber: string = '';
  expiryDate: string = '';
  cvv: string = '';

  submitted: boolean = false;
  isProcessing: boolean = false;
  cartItems: CartItem[] = [];
  cartTotal: number = 0;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.cartTotal = this.cartService.getCartTotal();
    });
  }

  isFormValid(): boolean {
    return (
      this.firstName.trim().length >= 2 &&
      this.lastName.trim().length >= 2 &&
      this.email.includes('@') &&
      this.phone.trim().length >= 10 &&
      this.address.trim().length >= 5 &&
      this.city.trim().length >= 2 &&
      this.zipCode.trim().length >= 3 &&
      this.cardNumber.trim().length === 16 &&
      this.expiryDate.match(/^\d{2}\/\d{2}$/) !== null &&
      this.cvv.trim().length === 3
    );
  }

  getFieldError(field: string): string {
    switch (field) {
      case 'firstName':
      case 'lastName':
        return 'Name must be at least 2 characters';
      case 'email':
        return 'Please enter a valid email';
      case 'phone':
        return 'Phone must be at least 10 digits';
      case 'address':
        return 'Address must be at least 5 characters';
      case 'city':
        return 'City must be at least 2 characters';
      case 'zipCode':
        return 'Zip code must be at least 3 characters';
      case 'cardNumber':
        return 'Card number must be 16 digits';
      case 'expiryDate':
        return 'Format: MM/YY';
      case 'cvv':
        return 'CVV must be 3 digits';
      default:
        return '';
    }
  }

  hasError(field: string): boolean {
    if (!this.submitted) return false;

    switch (field) {
      case 'firstName':
        return this.firstName.trim().length < 2;
      case 'lastName':
        return this.lastName.trim().length < 2;
      case 'email':
        return !this.email.includes('@');
      case 'phone':
        return this.phone.trim().length < 10;
      case 'address':
        return this.address.trim().length < 5;
      case 'city':
        return this.city.trim().length < 2;
      case 'zipCode':
        return this.zipCode.trim().length < 3;
      case 'cardNumber':
        return this.cardNumber.trim().length !== 16;
      case 'expiryDate':
        return !this.expiryDate.match(/^\d{2}\/\d{2}$/);
      case 'cvv':
        return this.cvv.trim().length !== 3;
      default:
        return false;
    }
  }

  onSubmit(): void {
    this.submitted = true;

    if (!this.isFormValid()) {
      return;
    }

    this.isProcessing = true;

    const customerInfo: CustomerInfo = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      address: this.address,
      city: this.city,
      zipCode: this.zipCode,
      cardNumber: this.cardNumber.slice(-4).padStart(16, '*'),
      expiryDate: this.expiryDate,
      cvv: '***'
    };

    const order: Order = {
      id: 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      items: this.cartItems,
      total: this.cartTotal,
      customerInfo: customerInfo,
      orderDate: new Date()
    };

    this.orderService.submitOrder(order).subscribe({
      next: (submittedOrder) => {
        this.isProcessing = false;
        this.cartService.clearCart();
        this.router.navigate(['/order-confirmation']);
      },
      error: (error) => {
        console.error('Order submission error:', error);
        this.isProcessing = false;
        alert('Error submitting order. Please try again.');
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/cart']);
  }
}
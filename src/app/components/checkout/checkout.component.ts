import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { CartItem, Order, CustomerInfo } from '../../models/product.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  cartTotal: number = 0;

  customerInfo: CustomerInfo = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  };

  formErrors: any = {};

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.cartTotal = this.cartService.getCartTotal();
    });
  }

  // FIX #2: Handle ngModelChange for form inputs
  onFormChange(): void {
    console.log('Form updated:', this.customerInfo);
    // Form has changed - validate on each change
    this.validateForm();
  }

  // Validate form fields
  private validateForm(): void {
    this.formErrors = {};

    if (this.customerInfo.firstName && this.customerInfo.firstName.length < 2) {
      this.formErrors.firstName = 'First name must be at least 2 characters';
    }

    if (this.customerInfo.lastName && this.customerInfo.lastName.length < 2) {
      this.formErrors.lastName = 'Last name must be at least 2 characters';
    }

    if (this.customerInfo.email && !this.isValidEmail(this.customerInfo.email)) {
      this.formErrors.email = 'Please enter a valid email';
    }

    if (this.customerInfo.phone && this.customerInfo.phone.length < 10) {
      this.formErrors.phone = 'Phone must be at least 10 digits';
    }

    if (this.customerInfo.address && this.customerInfo.address.length < 5) {
      this.formErrors.address = 'Address must be at least 5 characters';
    }

    if (this.customerInfo.city && this.customerInfo.city.length < 2) {
      this.formErrors.city = 'City must be at least 2 characters';
    }

    if (this.customerInfo.zipCode && this.customerInfo.zipCode.length < 3) {
      this.formErrors.zipCode = 'Zip code must be at least 3 characters';
    }

    if (this.customerInfo.cardNumber && this.customerInfo.cardNumber.length !== 16) {
      this.formErrors.cardNumber = 'Card number must be 16 digits';
    }

    if (this.customerInfo.expiryDate && !this.isValidExpiryDate(this.customerInfo.expiryDate)) {
      this.formErrors.expiryDate = 'Expiry date must be in MM/YY format';
    }

    if (this.customerInfo.cvv && this.customerInfo.cvv.length !== 3) {
      this.formErrors.cvv = 'CVV must be 3 digits';
    }
  }

  // Check if form is valid
  private isFormValid(): boolean {
    return (
      this.customerInfo.firstName.length >= 2 &&
      this.customerInfo.lastName.length >= 2 &&
      this.isValidEmail(this.customerInfo.email) &&
      this.customerInfo.phone.length >= 10 &&
      this.customerInfo.address.length >= 5 &&
      this.customerInfo.city.length >= 2 &&
      this.customerInfo.zipCode.length >= 3 &&
      this.customerInfo.cardNumber.length === 16 &&
      this.isValidExpiryDate(this.customerInfo.expiryDate) &&
      this.customerInfo.cvv.length === 3
    );
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private isValidExpiryDate(date: string): boolean {
    const expiryRegex = /^\d{2}\/\d{2}$/;
    return expiryRegex.test(date);
  }

  onSubmit(): void {
    // Final validation
    this.validateForm();

    if (!this.isFormValid()) {
      alert('Please fill in all fields correctly');
      return;
    }

    // Create order
    const order: Order = {
      id: this.generateOrderId(),
      items: this.cartItems,
      total: this.cartTotal,
      customerInfo: this.customerInfo,
      orderDate: new Date()
    };

    // Submit order
    this.orderService.submitOrder(order).subscribe(() => {
      // Clear cart
      this.cartService.clearCart();

      // Navigate to confirmation
      this.router.navigate(['/order-confirmation'], {
        state: { order: order }
      });
    });
  }

  private generateOrderId(): string {
    return 'ORD-' + Date.now();
  }

  hasError(field: string): boolean {
    return this.formErrors.hasOwnProperty(field);
  }

  getErrorMessage(field: string): string {
    return this.formErrors[field] || '';
  }
}
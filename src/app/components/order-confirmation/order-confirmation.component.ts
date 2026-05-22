import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  orderNumber: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.orderNumber = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  }

  continueShopping(): void {
    this.router.navigate(['/']);
  }
}
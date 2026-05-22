import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Order } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ordersUrl = 'api/orders';

  constructor(private http: HttpClient) { }

  submitOrder(order: Order): Observable<Order> {
    const orders = JSON.parse(localStorage.getItem('mystore_orders') || '[]');
    orders.push(order);
    localStorage.setItem('mystore_orders', JSON.stringify(orders));
    
    return of(order);
  }

  getOrders(email: string): Observable<Order[]> {
    const orders = JSON.parse(localStorage.getItem('mystore_orders') || '[]');
    return of(orders.filter((order: any) => order.customerInfo.email === email));
  }

  getOrderById(orderId: string): Observable<Order> {
    const orders = JSON.parse(localStorage.getItem('mystore_orders') || '[]');
    return of(orders.find((order: any) => order.id === orderId));
  }
}
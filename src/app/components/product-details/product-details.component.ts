import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | null = null;
  loading: boolean = true;
  quantity: number = 1;
  notificationMessage: string = '';
  showNotification: boolean = false;
  allProducts: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadProducts();
    this.route.params.subscribe(params => {
      const id = parseInt(params['id']);
      this.loadProductDetails(id);
    });
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.allProducts = data;
      },
      error: (error) => {
        console.error('Error loading products:', error);
      }
    });
  }

  loadProductDetails(id: number): void {
    this.loading = true;
    const product = this.allProducts.find(p => p.id === id);
    
    if (product) {
      this.product = product;
      this.quantity = 1;
      this.loading = false;
    } else {
      this.productService.getProducts().subscribe({
        next: (data) => {
          const foundProduct = data.find(p => p.id === id);
          if (foundProduct) {
            this.product = foundProduct;
          }
          this.quantity = 1;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading product:', error);
          this.loading = false;
        }
      });
    }
  }

  increaseQuantity(): void {
  this.quantity = this.quantity + 1;
}

decreaseQuantity(): void {
  if (this.quantity > 1) {
    this.quantity = this.quantity - 1;
  }
}

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product, this.quantity);
      this.showNotificationMessage(
        `${this.product.name} (x${this.quantity}) added to cart!`
      );
      this.quantity = 1;
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  private showNotificationMessage(message: string): void {
    this.notificationMessage = message;
    this.showNotification = true;
    setTimeout(() => {
      this.showNotification = false;
    }, 2000);
  }
}
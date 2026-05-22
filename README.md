<div align="center">

# 🌸 MyStore — Daise Flowers

### ✨ Elegant Angular 16 E-Commerce Experience ✨

<p align="center">
  A modern single-page flower shop application built with Angular 16, featuring
  product browsing, cart management, checkout flow, and responsive luxury design.
</p>

<br>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-16-DD0031?style=for-the-badge&logo=angular&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white"/>
  <img src="https://img.shields.io/badge/Responsive-Design-38B2AC?style=for-the-badge"/>
</p>

<br>

### 🌷 Crafted with care by Shahd Batta

🔗 **Repository:**  
[Daise_MyStore GitHub Repository](https://github.com/ShahdBatta/Daise_MyStore)

</div>

---

# ✨ Preview

## 🏡 Home Page
- Elegant responsive product grid
- Luxury floral aesthetic
- Smooth hover animations

## 🛒 Shopping Cart
- Dynamic cart updates
- Quantity management
- Real-time total calculation

## 💳 Checkout Experience
- Full validation system
- Multi-section checkout form
- Order confirmation workflow

---

# 📖 Overview

**MyStore — Daise Flowers** is a fully responsive Angular 16 e-commerce application designed to provide a premium online flower shopping experience.

The project demonstrates modern Angular architecture and frontend development practices including:

- Component-based architecture
- RxJS reactive state management
- Angular routing
- Template-driven forms
- Local storage persistence
- Reusable services
- Responsive UI design

---

# 🌸 Features

<table>
<tr>
<td width="50%">

## 🛍️ Shopping Features

- Browse premium flower arrangements
- Product details pages
- Add to cart with quantities
- Update & remove cart items
- Dynamic cart badge
- Search & category filtering

</td>

<td width="50%">

## 💳 Checkout Features

- Full checkout workflow
- Form validation
- Real-time error messages
- Order confirmation page
- Unique order IDs
- LocalStorage persistence

</td>
</tr>
</table>

---

# 🧰 Tech Stack

| Technology | Usage |
|---|---|
| **Angular 16** | Frontend framework |
| **TypeScript** | Strong typing |
| **RxJS** | State management |
| **Angular Router** | SPA routing |
| **Angular Forms** | Validation & forms |
| **HttpClient** | Product data fetching |
| **LocalStorage** | Persistent cart data |
| **Custom CSS** | Luxury responsive design |

---

# 📂 Project Structure

```bash
src/
├── app/
│
├── components/
│   ├── header/
│   ├── footer/
│   ├── product-list/
│   ├── product-card/
│   ├── product-details/
│   ├── cart/
│   ├── cart-item/
│   ├── checkout/
│   ├── order-confirmation/
│   ├── about/
│   └── contact/
│
├── services/
│   ├── product.service.ts
│   ├── cart.service.ts
│   └── order.service.ts
│
├── models/
│   └── product.model.ts
│
├── app.module.ts
├── app-routing.module.ts
│
├── assets/
│   ├── images/
│   └── data.json
│
└── styles.css
```

---

# 🚀 Getting Started

## ✅ Prerequisites

Make sure you have installed:

- Node.js v16+
- npm v8+
- Angular CLI 16

---

# 📥 Installation

Clone the repository:

```bash
git clone https://github.com/ShahdBatta/Daise_MyStore.git
```

Navigate to the project:

```bash
cd Daise_MyStore
```

Install dependencies:

```bash
npm install
```

---

# ▶️ Run the Application

```bash
ng serve --open
```

Open:

```bash
http://localhost:4200
```

---

# 🧠 Angular Concepts Demonstrated

| Concept | Implementation |
|---|---|
| `HttpClient` | Fetching products |
| `BehaviorSubject` | Shared cart state |
| `@Input / @Output` | Component communication |
| `EventEmitter` | Child → Parent interaction |
| `Angular Router` | Navigation |
| `ngModel` | Two-way binding |
| `Template-Driven Forms` | Checkout validation |
| `Services` | Shared business logic |
| `Route Parameters` | Product details pages |

---

# 🧩 Main Components

## 🌸 Product List
- Responsive product grid
- Category filtering
- Add-to-cart functionality
- Toast notifications

---

## 📄 Product Details
- Large product image
- Full descriptions
- Quantity selector
- Custom add-to-cart handling

---

## 🛒 Cart
- Quantity updates
- Remove items
- Cart totals
- Checkout navigation

---

## 💳 Checkout
- Customer information form
- Validation feedback
- Order summary sidebar
- Submit order functionality

---

## ✅ Order Confirmation
- Success message
- Unique order number
- Order summary
- Continue shopping button

---

# 🔧 Services

## ProductService

```typescript
getProducts(): Observable<Product[]>
getProductById(id: number): Observable<Product>
searchProducts(query: string): Observable<Product[]>
```

---

## CartService

```typescript
addToCart(product: Product, quantity: number): void
removeFromCart(productId: number): void
updateQuantity(productId: number, quantity: number): void
getCartTotal(): number
getCartCount(): number
clearCart(): void
cart$: Observable<CartItem[]>
```

---

## OrderService

```typescript
submitOrder(order: Order): Observable<Order>
getOrders(email: string): Observable<Order[]>
getOrderById(orderId: string): Observable<Order>
```

---

# 📦 Data Models

## Product

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  quantity?: number;
}
```

---

## CartItem

```typescript
interface CartItem extends Product {
  quantity: number;
}
```

---

## Order

```typescript
interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerInfo: CustomerInfo;
  orderDate: Date;
}
```

---

# 🎨 Design System

| Style | Color |
|---|---|
| Primary | `#3d3d3d` |
| Accent | `#d4997d` |
| Background | `#f9f7f4` |

---

# 📱 Responsive Design

✅ Mobile-first approach  
✅ Tablet optimization  
✅ Desktop responsive layout  
✅ Smooth transitions & animations  
✅ Luxury floral UI aesthetic

---

# ✅ Form Validation

| Field | Validation |
|---|---|
| First Name | Minimum 2 characters |
| Last Name | Minimum 2 characters |
| Email | Valid email format |
| Phone | Minimum 10 digits |
| Address | Minimum 5 characters |
| City | Minimum 2 characters |
| Zip Code | Minimum 3 characters |
| Card Number | Exactly 16 digits |
| Expiry Date | MM/YY format |
| CVV | Exactly 3 digits |

✔️ Real-time validation messages displayed below inputs.

---

# 💾 LocalStorage

The application stores data locally using:

| Key | Purpose |
|---|---|
| `mystore_cart` | Shopping cart persistence |
| `mystore_orders` | Order storage |

---

# 📚 Learning Outcomes

This project demonstrates:

- Angular architecture best practices
- Reactive state management with RxJS
- Reusable services & components
- SPA routing and navigation
- Form validation techniques
- Browser storage persistence
- Responsive frontend development

---

# 📜 License

This project was created for educational purposes as part of the **Udacity Full Stack Nanodegree Program**.

---

<div align="center">

# 🌷 Thank You for Visiting Daise Flowers

### Created with ❤️ by Shahd Batta

*"Where flowers make every moment unforgettable."*

</div>
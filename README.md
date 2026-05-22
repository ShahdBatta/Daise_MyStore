# MyStore - Daise Flowers 🌸

A beautiful, fully-functional e-commerce web application for selling premium flower arrangements. Built with Angular 16, MyStore offers a seamless shopping experience with product browsing, cart management, secure checkout, and order confirmation.

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage Guide](#usage-guide)
- [Components Overview](#components-overview)
- [Services](#services)
- [Data Models](#data-models)
- [Styling](#styling)
- [Future Enhancements](#future-enhancements)

---

## ✨ Features

### Core E-Commerce Features
- **Product Catalog**: Browse 12 premium flower arrangements with detailed descriptions
- **Category Filtering**: Filter products by category (Bouquets, Boxes, Corsages, Centerpieces)
- **Product Details**: View comprehensive product information with large images
- **Shopping Cart**: Add/remove items, adjust quantities, persistent cart storage
- **Checkout Form**: Complete customer information and payment details with validation
- **Order Confirmation**: Receive order confirmation with unique order number
- **Responsive Design**: Mobile-friendly interface that works on all devices

### Additional Features
- **Navigation**: Full navigation between Flowers, About, and Contact pages
- **About Page**: Company story, values, and unique selling propositions
- **Contact Page**: Contact form with message submission capability
- **Persistent Storage**: Cart data persists across browser sessions using localStorage
- **Real-time Notifications**: Toast notifications for user actions
- **Form Validation**: Comprehensive input validation with error messages
- **Professional Design**: Elegant "Daise" luxury aesthetic with custom color scheme

---

## 🛠️ Tech Stack

- **Framework**: Angular 16
- **Language**: TypeScript
- **Styling**: CSS3 (Custom CSS, no frameworks)
- **HTTP Client**: Angular HttpClient
- **State Management**: RxJS BehaviorSubject
- **Routing**: Angular Router
- **Forms**: Angular FormsModule with two-way binding

---

## 📁 Project Structure

```
mystore/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   ├── footer/
│   │   │   ├── product-list/
│   │   │   ├── product-card/
│   │   │   ├── product-details/
│   │   │   ├── cart/
│   │   │   ├── cart-item/
│   │   │   ├── checkout/
│   │   │   ├── order-confirmation/
│   │   │   ├── about/
│   │   │   └── contact/
│   │   ├── services/
│   │   │   ├── product.service.ts
│   │   │   ├── cart.service.ts
│   │   │   └── order.service.ts
│   │   ├── models/
│   │   │   └── product.model.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   ├── assets/
│   │   ├── images/ (flower product images)
│   │   └── data.json (product database)
│   ├── styles.css (global styles)
│   └── main.ts
├── angular.json
├── tsconfig.json
└── package.json
```

---

## 🚀 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)
- Angular CLI 16

### Steps

1. **Clone or download the project**
   ```bash
   cd mystore
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Angular CLI (if not already installed)**
   ```bash
   npm install -g @angular/cli@16
   ```

---

## 🏃 Running the Application

### Development Server
```bash
ng serve --open
```

The application will automatically open in your browser at `http://localhost:4200`

### Build for Production
```bash
ng build --configuration production
```

Output files will be in the `dist/` directory, ready for deployment.

---

## 📖 Usage Guide

### Shopping Flow

1. **Browse Products**
   - Home page displays all 12 flower arrangements
   - Use category filters to narrow down products
   - Hover over products to see "View Details" button

2. **View Product Details**
   - Click "View Details" to see full product information
   - View large product image and complete description
   - Select quantity and add to cart

3. **Manage Cart**
   - Click cart icon (🛒) to view shopping cart
   - Adjust item quantities or remove items
   - View subtotal, shipping (free), and total

4. **Checkout**
   - Click "Proceed to Checkout"
   - Fill in personal information (required fields marked with *)
   - Enter payment details
   - Form validation ensures all information is correct

5. **Order Confirmation**
   - Receive confirmation with unique order number
   - See order summary
   - Option to continue shopping

### Navigation
- **Flowers**: Return to product catalog
- **About**: Learn about Daise and our values
- **Contact**: Send a message or view contact information

---

## 🧩 Components Overview

### Header Component
- Navigation bar with logo
- Links to main sections
- Shopping cart badge showing item count

### Product List Component
- Displays all products in responsive grid
- Category filter buttons
- Add to cart functionality
- Notification toasts

### Product Details Component
- Large product image
- Full product description
- Quantity selector
- Add to cart with custom quantity
- Back navigation

### Cart Component
- Table view of cart items
- Item images, prices, and quantities
- Remove and quantity update functionality
- Cart summary with totals
- Checkout button

### Checkout Component
- Multi-section form (Personal Info, Address, Payment)
- Real-time form validation
- Error messages for invalid fields
- Order summary sidebar
- Submit order functionality

### Order Confirmation Component
- Success message with order number
- Order summary
- Next steps explanation
- Continue shopping button

### About Component
- Company story
- Core values display
- Why choose Daise section
- Feature highlights

### Contact Component
- Contact information display
- Message submission form
- Success feedback

### Footer Component
- Company information
- Quick links
- Contact details
- Social media links

---

## 🔌 Services

### ProductService
Handles product data fetching and management
```typescript
- getProducts(): Observable<Product[]>
- getProductById(id: number): Observable<Product>
- searchProducts(query: string): Observable<Product[]>
```

### CartService
Manages shopping cart state and operations
```typescript
- addToCart(product: Product, quantity: number): void
- removeFromCart(productId: number): void
- updateQuantity(productId: number, quantity: number): void
- getCartTotal(): number
- getCartCount(): number
- clearCart(): void
- cart$: Observable<CartItem[]>
```

### OrderService
Handles order submission and retrieval
```typescript
- submitOrder(order: Order): Observable<Order>
- getOrders(email: string): Observable<Order[]>
- getOrderById(orderId: string): Observable<Order>
```

---

## 📊 Data Models

### Product Interface
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

### CartItem Interface
```typescript
interface CartItem extends Product {
  quantity: number;
}
```

### Order Interface
```typescript
interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerInfo: CustomerInfo;
  orderDate: Date;
}
```

### CustomerInfo Interface
```typescript
interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}
```

---

## 🎨 Styling

### Design System
- **Primary Color**: #3d3d3d (Dark Gray)
- **Accent Color**: #d4997d (Warm Beige/Peach)
- **Background**: #f9f7f4 (Cream)
- **Text**: #666 (Medium Gray) / #3d3d3d (Dark)

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 1024px
- Flexible grid layouts
- Touch-friendly buttons and inputs
- Optimized images with CSS object-fit

### CSS Files
- `src/styles.css` - Global styles and resets
- Component-specific CSS files for encapsulated styles

---

## 💾 Data Persistence

### LocalStorage Usage
- **mystore_cart**: Persists shopping cart items
- **mystore_orders**: Stores submitted orders

Cart data automatically saves when items are added/removed/updated, and loads when the application initializes.

---

## ✅ Form Validation

### Checkout Form Validation Rules
- **First/Last Name**: Minimum 2 characters
- **Email**: Must be valid email format
- **Phone**: Minimum 10 digits
- **Address**: Minimum 5 characters
- **City**: Minimum 2 characters
- **Zip Code**: Minimum 3 characters
- **Card Number**: Exactly 16 digits
- **Expiry Date**: MM/YY format
- **CVV**: Exactly 3 digits

Real-time error messages display below each field when validation fails.

---

## 🚀 Future Enhancements

- **User Authentication**: Login/Register functionality
- **Payment Integration**: Real payment gateway (Stripe, PayPal)
- **Product Reviews**: Customer ratings and reviews
- **Wishlist**: Save favorite products
- **Search Functionality**: Advanced product search
- **Admin Dashboard**: Inventory and order management
- **Email Notifications**: Order confirmation emails
- **Multiple Payment Methods**: Credit card, PayPal, Apple Pay
- **Delivery Tracking**: Order status updates
- **Discount Codes**: Promo code functionality

---

## 📦 Dependencies

Key npm packages:
- `@angular/core` - Angular framework
- `@angular/common` - Common Angular directives
- `@angular/router` - Routing module
- `@angular/forms` - Form handling
- `@angular/platform-browser` - Browser utilities
- `rxjs` - Reactive programming library
- `tslib` - TypeScript runtime library

---

## 📝 License

This project is created for educational purposes as part of the Udacity Full Stack Nanodegree program.

---

## 👨‍💻 Author

**Developed By Shahd for Udacity**

A comprehensive e-commerce solution showcasing Angular best practices, TypeScript, responsive design, and professional UI/UX implementation.

---

## 🤝 Support

For issues or questions about the project:
1. Check the component documentation above
2. Review the data models and service interfaces
3. Verify form validation rules
4. Check browser console for error messages

---

## 🎯 Project Highlights

✅ **Full E-Commerce Workflow** - Complete product browsing to order confirmation  
✅ **Professional Design** - Luxury aesthetic with custom color scheme  
✅ **Responsive Layout** - Works seamlessly on desktop, tablet, and mobile  
✅ **Data Persistence** - Cart survives page refreshes  
✅ **Form Validation** - Comprehensive input validation with error feedback  
✅ **TypeScript** - Fully typed codebase for reliability  
✅ **Clean Architecture** - Organized components, services, and models  
✅ **No External UI Frameworks** - Pure HTML, CSS, and Angular  

---

**Ready to use! Happy shopping with Daise Flowers 🌸**
#   D a i s e _ M y S t o r e  
 
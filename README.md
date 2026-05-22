🌸 MyStore — Daise Flowers E-Commerce Application
<div align="center">
✨ A Modern Angular 16 Flower Shop Experience ✨

A beautifully designed single-page e-commerce application for browsing luxury flower arrangements, managing shopping carts, and completing seamless checkout experiences.

<img src="https://img.shields.io/badge/Angular-16-DD0031?style=for-the-badge&logo=angular&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white"/> <img src="https://img.shields.io/badge/Responsive-Design-38B2AC?style=for-the-badge"/>
🌷 Crafted with care by Shahd Batta

🔗 Repository:
Daise_MyStore GitHub Repository

</div>
📖 Overview

MyStore — Daise Flowers is a responsive Angular 16 e-commerce application designed to deliver a smooth and elegant shopping experience for flower lovers.

The application allows users to:

🌸 Browse premium flower arrangements
🛒 Add and manage products in a shopping cart
💳 Complete checkout with form validation
📦 Receive order confirmation with unique order IDs
📱 Enjoy a fully responsive experience across devices

This project demonstrates modern Angular development practices using a clean module-based architecture, reusable components, RxJS state management, routing, and persistent local storage.

✨ Features
🛍️ Shopping Experience
Browse a catalog of 12 premium flower arrangements
View detailed product pages with images and descriptions
Add products to cart with custom quantities
Remove or update cart items instantly
Real-time cart badge updates
💳 Checkout System
Complete checkout workflow
Form validation with instant feedback
Customer information collection
Order summary before confirmation
Unique order number generation
🔄 State Management
Shared cart state using RxJS BehaviorSubject
Persistent data using LocalStorage
Automatic cart synchronization across components
📱 Responsive Design
Mobile-first UI design
Smooth transitions and hover effects
Optimized layouts for tablets and desktops
Professional luxury flower-shop aesthetic
🧰 Tech Stack
Technology	Purpose
Angular 16	Frontend framework
TypeScript	Strongly typed development
RxJS	Reactive programming
Angular Router	SPA navigation
Angular Forms	Template-driven forms & validation
HttpClient	Fetching product data
LocalStorage	Persistent cart & order storage
Custom CSS	Responsive luxury styling
📂 Project Structure
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── footer/
│   │   ├── product-list/
│   │   ├── product-card/
│   │   ├── product-details/
│   │   ├── cart/
│   │   ├── cart-item/
│   │   ├── checkout/
│   │   ├── order-confirmation/
│   │   ├── about/
│   │   └── contact/
│   │
│   ├── services/
│   │   ├── product.service.ts
│   │   ├── cart.service.ts
│   │   └── order.service.ts
│   │
│   ├── models/
│   │   └── product.model.ts
│   │
│   ├── app.module.ts
│   └── app-routing.module.ts
│
├── assets/
│   ├── images/
│   └── data.json
│
└── styles.css
🚀 Getting Started
✅ Prerequisites

Before running the project, make sure you have:

Node.js v16+
npm v8+
Angular CLI 16
📥 Installation

Clone the repository:

git clone https://github.com/ShahdBatta/Daise_MyStore.git

Navigate into the project folder:

cd Daise_MyStore

Install dependencies:

npm install
▶️ Running the Application

Start the development server:

ng serve --open

Open your browser and visit:

http://localhost:4200
🧠 Angular Concepts Demonstrated
Concept	Implementation
HttpClient	Product data fetching
BehaviorSubject	Cart state management
@Input / @Output	Component communication
EventEmitter	Child-to-parent events
Angular Router	Page navigation
ngModel	Two-way form binding
Template-Driven Forms	Checkout validation
Services	Shared business logic
Route Parameters	Product details routing
🧩 Main Components
🌸 Product List
Responsive product grid
Category filtering
Add-to-cart actions
Toast notifications
🛒 Shopping Cart
Quantity updates
Remove item functionality
Cart totals and summaries
Checkout navigation
📄 Product Details
Large product previews
Detailed descriptions
Quantity selector
Custom add-to-cart logic
💳 Checkout
Customer information form
Real-time validation
Payment section
Order summary sidebar
✅ Order Confirmation
Success message
Unique order number
Order details summary
Continue shopping button
ℹ️ About & Contact
Company story and values
Contact form with success feedback
🔧 Services
ProductService
getProducts(): Observable<Product[]>
getProductById(id: number): Observable<Product>
searchProducts(query: string): Observable<Product[]>
CartService
addToCart(product: Product, quantity: number): void
removeFromCart(productId: number): void
updateQuantity(productId: number, quantity: number): void
getCartTotal(): number
getCartCount(): number
clearCart(): void
cart$: Observable<CartItem[]>
OrderService
submitOrder(order: Order): Observable<Order>
getOrders(email: string): Observable<Order[]>
getOrderById(orderId: string): Observable<Order>
📦 Data Models
Product Interface
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  quantity?: number;
}
CartItem Interface
interface CartItem extends Product {
  quantity: number;
}
Order Interface
interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerInfo: CustomerInfo;
  orderDate: Date;
}
CustomerInfo Interface
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
🎨 Styling & Design
🌷 Design System
Element	Color
Primary	#3d3d3d
Accent	#d4997d
Background	#f9f7f4
✨ UI Features
Responsive mobile-first layout
Elegant hover animations
Smooth transitions
Luxury floral branding
Custom CSS without frameworks
✅ Form Validation Rules
Field	Validation
First/Last Name	Minimum 2 characters
Email	Valid email format
Phone	Minimum 10 digits
Address	Minimum 5 characters
City	Minimum 2 characters
Zip Code	Minimum 3 characters
Card Number	Exactly 16 digits
Expiry Date	MM/YY format
CVV	Exactly 3 digits

✔️ Real-time validation messages appear instantly below invalid fields.

💾 Data Persistence

The application uses LocalStorage to persist user data:

Key	Purpose
mystore_cart	Shopping cart items
mystore_orders	Submitted orders

Cart updates are automatically saved whenever changes occur.

📚 Learning Outcomes

This project demonstrates:

Angular component architecture
State management using RxJS
Reusable service-based logic
Client-side routing
Form validation best practices
Persistent browser storage
Responsive UI development

It is an excellent example of a complete Angular e-commerce workflow built using traditional module-based architecture.

📜 License

This project was created for educational purposes as part of the Udacity Full Stack Nanodegree Program.

<div align="center">
🌸 Created with ❤️ by Shahd Batta
Thank you for visiting Daise Flowers ✨

"Where flowers make every moment special."

</div>
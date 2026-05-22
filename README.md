<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyStore - Daise Flowers</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            background: #0d1117;
            color: #c9d1d9;
            line-height: 1.6;
            padding: 20px;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            background: #161b22;
            border: 1px solid #30363d;
            border-radius: 6px;
            padding: 40px;
        }

        header {
            margin-bottom: 40px;
            padding-bottom: 30px;
            border-bottom: 1px solid #30363d;
        }

        h1 {
            font-size: 2.5em;
            color: #f0883e;
            margin-bottom: 15px;
            font-weight: 600;
        }

        h2 {
            font-size: 1.8em;
            color: #58a6ff;
            margin-top: 40px;
            margin-bottom: 20px;
            border-bottom: 2px solid #30363d;
            padding-bottom: 10px;
        }

        h3 {
            color: #79c0ff;
            margin-top: 20px;
            margin-bottom: 10px;
            font-size: 1.2em;
        }

        .intro {
            font-size: 1.1em;
            color: #8b949e;
            margin-bottom: 20px;
            line-height: 1.8;
        }

        .meta {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 30px;
        }

        .meta-item {
            padding: 15px;
            background: #0d1117;
            border: 1px solid #30363d;
            border-radius: 6px;
        }

        .meta-label {
            color: #79c0ff;
            font-weight: 600;
            margin-bottom: 5px;
        }

        .meta-value {
            color: #c9d1d9;
        }

        .meta-value a {
            color: #58a6ff;
            text-decoration: none;
            transition: color 0.2s;
        }

        .meta-value a:hover {
            color: #79c0ff;
            text-decoration: underline;
        }

        ul {
            list-style: none;
            padding: 0;
        }

        li {
            padding: 8px 0;
            padding-left: 20px;
            position: relative;
            color: #8b949e;
        }

        li:before {
            content: "▸";
            position: absolute;
            left: 0;
            color: #f0883e;
            font-weight: bold;
        }

        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }

        .feature-card {
            background: #0d1117;
            border: 1px solid #30363d;
            border-radius: 6px;
            padding: 20px;
            transition: all 0.3s;
        }

        .feature-card:hover {
            border-color: #f0883e;
            background: #161b22;
        }

        .feature-card h4 {
            color: #79c0ff;
            margin-bottom: 10px;
            font-size: 1.1em;
        }

        .feature-card p {
            color: #8b949e;
            font-size: 0.95em;
        }

        code {
            background: #0d1117;
            color: #79c0ff;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
            font-size: 0.9em;
        }

        pre {
            background: #0d1117;
            border: 1px solid #30363d;
            border-radius: 6px;
            padding: 15px;
            overflow-x: auto;
            margin: 15px 0;
        }

        pre code {
            background: none;
            padding: 0;
            color: #c9d1d9;
        }

        .highlight {
            color: #f0883e;
            font-weight: 600;
        }

        .section-intro {
            color: #8b949e;
            margin-bottom: 20px;
            font-style: italic;
        }

        .tech-stack {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }

        .tech-item {
            background: #0d1117;
            border: 1px solid #30363d;
            padding: 15px;
            border-radius: 6px;
        }

        .tech-name {
            color: #79c0ff;
            font-weight: 600;
            margin-bottom: 5px;
        }

        .tech-desc {
            color: #8b949e;
            font-size: 0.9em;
        }

        .divider {
            border: none;
            border-top: 1px solid #30363d;
            margin: 40px 0;
        }

        .highlight-box {
            background: #0d1117;
            border-left: 4px solid #f0883e;
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
        }

        .highlight-box p {
            color: #c9d1d9;
        }

        footer {
            margin-top: 50px;
            padding-top: 30px;
            border-top: 1px solid #30363d;
            text-align: center;
            color: #8b949e;
        }

        .button {
            display: inline-block;
            background: #238636;
            color: white;
            padding: 10px 20px;
            border-radius: 6px;
            text-decoration: none;
            margin: 5px;
            transition: background 0.3s;
            border: 1px solid #238636;
        }

        .button:hover {
            background: #2ea043;
            border-color: #3fb950;
        }

        .highlight-link {
            color: #58a6ff;
            text-decoration: none;
            transition: color 0.2s;
        }

        .highlight-link:hover {
            color: #79c0ff;
            text-decoration: underline;
        }

        @media (max-width: 600px) {
            .container {
                padding: 20px;
            }

            h1 {
                font-size: 1.8em;
            }

            h2 {
                font-size: 1.4em;
            }

            .meta {
                grid-template-columns: 1fr;
            }

            .feature-grid {
                grid-template-columns: 1fr;
            }

            .tech-stack {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>🌸 MyStore — Angular E-Commerce Application</h1>
            <p class="intro">
                A beautiful, fully-functional e-commerce web application for selling premium flower arrangements. 
                Built with Angular 16, MyStore offers a seamless shopping experience with product browsing, cart 
                management, secure checkout, and order confirmation.
            </p>
            
            <div class="meta">
                <div class="meta-item">
                    <div class="meta-label">Author</div>
                    <div class="meta-value">Shahd Batta</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">Repository</div>
                    <div class="meta-value">
                        <a href="https://github.com/ShahdBatta/Daise_MyStore" target="_blank">
                            github.com/ShahdBatta/Daise_MyStore
                        </a>
                    </div>
                </div>
            </div>
        </header>

        <hr class="divider">

        <section>
            <h2>✨ Features</h2>
            
            <h3>Core E-Commerce Features</h3>
            <ul>
                <li>Browse a product catalog with 12 premium flower arrangements</li>
                <li>Filter products by category (Bouquets, Boxes, Corsages, Centerpieces)</li>
                <li>View individual product details with large images</li>
                <li>Add products to a shopping cart with custom quantities</li>
                <li>Remove items from the cart</li>
                <li>Checkout with comprehensive form validation</li>
                <li>Order confirmation page with unique order number</li>
            </ul>

            <h3>Additional Features</h3>
            <ul>
                <li>Full navigation between Flowers, About, and Contact pages</li>
                <li>Company story and values on About page</li>
                <li>Contact form with message submission capability</li>
                <li>Cart data persists across browser sessions using localStorage</li>
                <li>Toast notifications for user actions</li>
                <li>Real-time form validation with error messages</li>
                <li>Professional "Daise" luxury aesthetic with custom color scheme</li>
                <li>Responsive design for mobile, tablet, and desktop</li>
            </ul>
        </section>

        <hr class="divider">

        <section>
            <h2>🛠️ Tech Stack</h2>
            <p class="section-intro">Modern Angular development with TypeScript and RxJS</p>
            
            <div class="tech-stack">
                <div class="tech-item">
                    <div class="tech-name">Angular 16</div>
                    <div class="tech-desc">Module-based architecture with traditional setup</div>
                </div>
                <div class="tech-item">
                    <div class="tech-name">TypeScript</div>
                    <div class="tech-desc">Fully typed codebase for reliability</div>
                </div>
                <div class="tech-item">
                    <div class="tech-name">RxJS</div>
                    <div class="tech-desc">Reactive programming for state management</div>
                </div>
                <div class="tech-item">
                    <div class="tech-name">Angular Router</div>
                    <div class="tech-desc">Client-side routing without page reload</div>
                </div>
                <div class="tech-item">
                    <div class="tech-name">Angular Forms</div>
                    <div class="tech-desc">Template-driven forms with ngModel and validation</div>
                </div>
                <div class="tech-item">
                    <div class="tech-name">HttpClient</div>
                    <div class="tech-desc">Fetching product data from local JSON file</div>
                </div>
                <div class="tech-item">
                    <div class="tech-name">Custom CSS</div>
                    <div class="tech-desc">Professional styling without frameworks</div>
                </div>
                <div class="tech-item">
                    <div class="tech-name">LocalStorage</div>
                    <div class="tech-desc">Persistent cart data storage</div>
                </div>
            </div>
        </section>

        <hr class="divider">

        <section>
            <h2>📦 Project Structure</h2>
            <p class="section-intro">Clean, organized architecture following Angular best practices</p>
            
            <pre><code>src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── footer/
│   │   ├── product-list/
│   │   ├── product-details/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── order-confirmation/
│   │   ├── about/
│   │   └── contact/
│   ├── services/
│   │   ├── product.service.ts
│   │   ├── cart.service.ts
│   │   └── order.service.ts
│   ├── models/
│   │   └── product.model.ts
│   ├── app.module.ts
│   └── app-routing.module.ts
├── assets/
│   ├── images/ (flower images)
│   └── data.json (products)
└── styles.css</code></pre>
        </section>

        <hr class="divider">

        <section>
            <h2>🚀 Getting Started</h2>
            
            <h3>Prerequisites</h3>
            <ul>
                <li>Node.js v16 or higher</li>
                <li>npm v8 or higher</li>
                <li>Angular CLI 16</li>
            </ul>

            <h3>Installation</h3>
            <pre><code>git clone https://github.com/ShahdBatta/Daise_MyStore.git
cd Daise_MyStore
npm install</code></pre>

            <h3>Running the Application</h3>
            <pre><code>ng serve --open</code></pre>
            
            <p style="color: #8b949e; margin-top: 15px;">
                The application will automatically open at <code>http://localhost:4200</code>
            </p>
        </section>

        <hr class="divider">

        <section>
            <h2>🧩 Key Components</h2>
            
            <div class="feature-grid">
                <div class="feature-card">
                    <h4>Header</h4>
                    <p>Navigation bar with logo, menu links, and shopping cart badge showing item count</p>
                </div>
                <div class="feature-card">
                    <h4>Product List</h4>
                    <p>Displays all products in a responsive grid with category filtering and add to cart</p>
                </div>
                <div class="feature-card">
                    <h4>Product Details</h4>
                    <p>Large images, descriptions, quantity selector, and detailed product information</p>
                </div>
                <div class="feature-card">
                    <h4>Shopping Cart</h4>
                    <p>Table view with item management, quantity updates, and calculated totals</p>
                </div>
                <div class="feature-card">
                    <h4>Checkout</h4>
                    <p>Multi-section form with validation, error messages, and order summary</p>
                </div>
                <div class="feature-card">
                    <h4>Order Confirmation</h4>
                    <p>Success page with order number, summary, and next steps explanation</p>
                </div>
            </div>
        </section>

        <hr class="divider">

        <section>
            <h2>🔌 Services Architecture</h2>
            
            <h3>ProductService</h3>
            <p class="section-intro">Manages product data fetching and retrieval</p>
            <pre><code>getProducts(): Observable&lt;Product[]&gt;
getProductById(id: number): Observable&lt;Product&gt;
searchProducts(query: string): Observable&lt;Product[]&gt;</code></pre>

            <h3>CartService</h3>
            <p class="section-intro">Handles shopping cart state and operations using BehaviorSubject</p>
            <pre><code>addToCart(product: Product, quantity: number): void
removeFromCart(productId: number): void
updateQuantity(productId: number, quantity: number): void
getCartTotal(): number
getCartCount(): number
clearCart(): void</code></pre>

            <h3>OrderService</h3>
            <p class="section-intro">Manages order submission and retrieval with localStorage persistence</p>
            <pre><code>submitOrder(order: Order): Observable&lt;Order&gt;
getOrders(email: string): Observable&lt;Order[]&gt;
getOrderById(orderId: string): Observable&lt;Order&gt;</code></pre>
        </section>

        <hr class="divider">

        <section>
            <h2>🎨 Design System</h2>
            
            <h3>Color Palette</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin: 20px 0;">
                <div style="background: #3d3d3d; padding: 15px; border-radius: 6px; color: white; text-align: center;">
                    <strong>Primary</strong><br>#3d3d3d
                </div>
                <div style="background: #d4997d; padding: 15px; border-radius: 6px; color: white; text-align: center;">
                    <strong>Accent</strong><br>#d4997d
                </div>
                <div style="background: #f9f7f4; padding: 15px; border-radius: 6px; color: #3d3d3d; text-align: center;">
                    <strong>Background</strong><br>#f9f7f4
                </div>
            </div>

            <h3>Features</h3>
            <ul>
                <li>Mobile-first responsive design</li>
                <li>Breakpoints at 768px and 1024px</li>
                <li>Smooth transitions and hover effects</li>
                <li>Touch-friendly buttons and inputs</li>
                <li>Professional luxury aesthetic</li>
            </ul>
        </section>

        <hr class="divider">

        <section>
            <h2>✅ Form Validation</h2>
            <p class="section-intro">Comprehensive validation with real-time error feedback</p>
            
            <div class="highlight-box">
                <p><strong>Checkout Form Rules:</strong></p>
                <p style="margin-top: 10px; font-size: 0.95em;">
                    Name (min 2 chars) • Email (valid format) • Phone (min 10 digits) • 
                    Address (min 5 chars) • City (min 2 chars) • Zip (min 3 chars) • 
                    Card (16 digits) • Expiry (MM/YY) • CVV (3 digits)
                </p>
            </div>
        </section>

        <hr class="divider">

        <section>
            <h2>💾 Data Persistence</h2>
            <ul>
                <li><span class="highlight">mystore_cart</span> — Shopping cart items persist across sessions</li>
                <li><span class="highlight">mystore_orders</span> — Order history stored in localStorage</li>
            </ul>
        </section>

        <hr class="divider">

        <section>
            <h2>🚀 Future Enhancements</h2>
            <ul>
                <li>User authentication and login functionality</li>
                <li>Real payment gateway integration (Stripe, PayPal)</li>
                <li>Product reviews and ratings</li>
                <li>Wishlist feature</li>
                <li>Advanced search functionality</li>
                <li>Admin dashboard for inventory management</li>
                <li>Email notifications for orders</li>
                <li>Multiple payment methods</li>
                <li>Order tracking and delivery updates</li>
                <li>Discount codes and promotions</li>
            </ul>
        </section>

        <hr class="divider">

        <section>
            <h2>🎯 Highlights</h2>
            <ul>
                <li><span class="highlight">✓ Full E-Commerce Workflow</span> — Complete shopping experience</li>
                <li><span class="highlight">✓ Professional Design</span> — Luxury aesthetic with custom CSS</li>
                <li><span class="highlight">✓ Responsive Layout</span> — Works on all devices</li>
                <li><span class="highlight">✓ Data Persistence</span> — Cart survives page refresh</li>
                <li><span class="highlight">✓ Form Validation</span> — Comprehensive error handling</li>
                <li><span class="highlight">✓ TypeScript</span> — Fully typed codebase</li>
                <li><span class="highlight">✓ Clean Architecture</span> — Well-organized components</li>
                <li><span class="highlight">✓ Best Practices</span> — Follows Angular standards</li>
            </ul>
        </section>

        <footer>
            <p style="margin-bottom: 20px;">
                <strong>MyStore — Angular E-Commerce Application</strong><br>
                Created for Udacity Full Stack Nanodegree
            </p>
            
            <p style="margin-bottom: 20px; color: #8b949e;">
                A comprehensive e-commerce solution showcasing Angular best practices,<br>
                TypeScript, responsive design, and professional UI/UX implementation.
            </p>
            
            <div style="margin-top: 30px;">
                <a href="https://github.com/ShahdBatta/Daise_MyStore" class="button" target="_blank">
                    View on GitHub
                </a>
                <a href="http://localhost:4200" class="button" target="_blank">
                    Live Demo
                </a>
            </div>

            <p style="margin-top: 30px; color: #6e7681;">
                © 2024 Shahd Batta. Happy shopping with Daise Flowers 🌸
            </p>
        </footer>
    </div>
</body>
</html>

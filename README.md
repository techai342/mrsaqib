# Pak Nemat Kadahi Restaurant App 🥘🔥

A premium, modern, and responsive web application for **Pak Nemat Kadahi Restaurant**, built with React, TypeScript, Tailwind CSS, and Supabase. This app allows users to browse an authentic Desi menu, manage a cart, place orders, and includes a comprehensive Admin Dashboard for restaurant management.

## 🚀 Features

### 👤 Customer Experience
*   **Immersive Landing Page**: Engaging hero section with animations (Framer Motion) and PWA install prompts.
*   **Digital Menu (Marketplace)**: Browse dishes by categories like BBQ, Special Kadahi, Rice, and Desserts.
*   **Product Details**: View high-quality images, descriptions, pricing, and read/write customer reviews.
*   **Cart & Checkout**: Seamless add-to-cart functionality with quantity management and easy checkout.
*   **User Authentication**: Secure Sign Up and Login system using Supabase Auth.
*   **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
*   **Dark Mode**: Sleek dark-themed UI with Red (`#ef4444`) accents.

### 🛡️ Admin Dashboard
*   **Secure Portal**: Dedicated login area for restaurant administrators.
*   **Menu Management**: Add, edit, and delete dishes. Includes image upload functionality via ImageKit.
*   **Category Management**: Create and manage menu categories dynamically.
*   **Live Order Management**: Real-time view of incoming orders. Update statuses (Pending → Cooking → Delivered → Cancelled).
*   **Site Settings**: Update footer contact information, social links, and admin credentials directly from the UI.

## 🛠️ Tech Stack

*   **Frontend**: React (v18), TypeScript
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS
*   **Animations**: Framer Motion
*   **Routing**: React Router DOM
*   **Backend & Database**: Supabase (PostgreSQL)
*   **Icons**: Google Material Icons

## 📂 Project Structure

```
/
├── public/              # Static assets (manifest.json, icons)
├── src/
│   ├── components/      # Reusable UI components (Navbar, Footer, CartDrawer)
│   ├── context/         # React Context (CartContext)
│   ├── pages/           # Application pages (Landing, Menu, Login, Admin, etc.)
│   │   └── admin/       # Admin specific tabs (Menu, Orders, Settings)
│   ├── supabase.ts      # Supabase client configuration and types
│   ├── App.tsx          # Main application component and routing
│   └── index.tsx        # Entry point
├── index.html           # Main HTML file
└── ...config files
```

## 📦 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd pak-nemat-restaurant
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```

4.  **Build for Production**
    ```bash
    npm run build
    ```

## 🗄️ Database Setup (Supabase)

The application relies on the following Supabase tables:

*   `products`: `id`, `name`, `category`, `description`, `price`, `image_url`, `rating`, `is_bestseller`
*   `categories`: `id`, `name`
*   `orders`: `id`, `customer_name`, `customer_phone`, `customer_address`, `customer_note`, `order_details` (JSON), `total_price`, `status`
*   `reviews`: `id`, `product_id`, `user_id`, `user_name`, `rating`, `comment`
*   `site_info`: `facebook_url`, `instagram_url`, `email`, `phone`, `address`
*   `admin_credentials`: `username`, `password`

## 🎨 Theme

The app uses a custom Tailwind configuration with a focus on a "Spicy Red" theme:
*   **Primary Color**: `#ef4444` (Red-500)
*   **Background**: Deep Black (`#050505`) & Dark Gray (`#121212`)

---

Developed with ❤️ for **Pak Nemat Kadahi**.

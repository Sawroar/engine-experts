A modern, full-stack automotive service booking platform built with Next.js 15, featuring engine repair services, online bookings, and customer management.

Live Demo: https://engine-experts.vercel.app

🚀 Features
Core Functionality
Service Booking System - Book engine repair services online

User Authentication - Secure login with NextAuth.js

Booking Management - View, edit, and cancel appointments

Service Catalog - Browse available engine services

Responsive Design - Mobile-first approach

User Experience
Real-time Form Validation - Interactive booking forms

Toast Notifications - User feedback with react-hot-toast

Image Optimization - Next.js Image component for fast loading

Protected Routes - Secure customer dashboard

Admin Features
Service Management - Add/edit/delete services

Booking Management - View and manage customer appointments

Customer Database - MongoDB integration for data persistence

🛠 Technology Stack
Frontend Framework
Next.js 15.5.4 - React framework with App Router

React 19.1.0 - Latest React with concurrent features

Tailwind CSS 4 - Utility-first CSS framework

DaisyUI 5.1.27 - Component library for Tailwind CSS

Backend & Database
Next.js API Routes - Full-stack capabilities

MongoDB 6.20.0 - NoSQL database for flexible data storage

MongoDB Native Driver - Direct database connectivity

Authentication & Security
NextAuth.js 4.24.11 - Complete authentication solution

bcrypt 6.0.0 - Password hashing for security

UI & Icons
Lucide React 0.548.0 - Beautiful, customizable icons

React Icons 5.5.0 - Comprehensive icon library

Lottie React 2.4.1 - Animation library for engaging UI

Development Tools
ESLint 9 - Code linting and quality

Turbopack - Rust-based bundler for fast development

dotenv 17.2.3 - Environment variable management

📦 Installation & Setup
Prerequisites
Node.js 18.17 or later

MongoDB database (local or Atlas)

Google OAuth credentials (for authentication)

🏗 Project Structure

engine-experts/
├── app/                    # Next.js 15 App Router
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   ├── bookings/      # Booking management
│   │   └── service/       # Service catalog
│   ├── components/        # Reusable components
│   ├── mybookings/        # Customer dashboard
│   ├── services/          # Service pages
│   └── layout.js         # Root layout
├── lib/                   # Utility functions
│   ├── auth.js           # NextAuth configuration
│   ├── dbConnect.js      # MongoDB connection
│   └── collectionNames.js # Database collection names
├── public/               # Static assets
│   └── assets/
│       ├── images/       # Service images
│       └── logo.svg      # Brand assets
└── components/           # Shared components
    └── tables/           # Data table components


    🎯 Key Pages & Features
Public Pages
Homepage (/) - Service overview and hero section

Services (/services) - Service catalog with details

Service Details (/services/[id]) - Individual service pages

Authentication (/login, /register) - User authentication

Protected Pages
My Bookings (/mybookings) - Customer booking dashboard

Booking Management (/mybookings/[id]) - Edit bookings

Checkout (/checkout/[id]) - Service booking form

API Endpoints
GET /api/service - Fetch all services

GET /api/service/[id] - Get specific service

POST /api/bookings - Create new booking

DELETE /api/bookings/[id] - Cancel booking

GET /api/auth/[...nextauth] - Authentication routes

🔧 Customization
Adding New Services
Add service data to MongoDB services collection

Update service images in public/assets/images/services/

Service schema includes: title, description, price, image, category

Styling Modifications
Modify Tailwind classes in components

Update DaisyUI themes in tailwind.config.js

Custom colors use brand palette: #ff3811 (primary orange/red)

Authentication Providers
Add new OAuth providers in lib/auth.js:
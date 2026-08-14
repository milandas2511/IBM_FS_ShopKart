# ShopKart — Flipkart-style MERN E-commerce Demo

A beginner-friendly MERN e-commerce storefront inspired by common marketplace patterns.

## Features

- React + Vite frontend
- Express + Node backend
- MongoDB + Mongoose
- JWT + bcrypt authentication
- Product search, category filtering and sorting
- Product details
- Cart
- Wishlist
- Checkout with address
- Orders and order history
- User profile
- Responsive commercial UI
- Product seed script
- No admin panel

## Requirements

- Node.js 20+
- MongoDB running locally

## Run backend

```bash
cd backend
npm install
copy .env.example .env
npm run seed
npm run dev
```

On macOS/Linux, use `cp .env.example .env`.

## Run frontend

In a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend: http://localhost:5173
Backend: http://localhost:5000

## Default MongoDB

```env
MONGO_URI=mongodb://127.0.0.1:27017/shopkart
```

This is a demo e-commerce project. It does not include real payments or an admin system.

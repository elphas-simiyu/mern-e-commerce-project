# GoGoods E-commerce Platform

## Overview
GoGoods is a robust e-commerce platform built with the MERN stack (MongoDB, Express.js, React, Node.js) and integrated with M-Pesa for secure payments. It enables users to browse products, manage carts, place orders, and make seamless transactions.

## Features
- **User Authentication**: Secure login and registration with JWT.
- **Role-Based Access**: Admin and user roles with different permissions.
- **Product Management**: Add, update, delete, and list products.
- **Shopping Cart**: Users can add, update, and remove items.
- **Order Processing**: Track order status (pending, completed, canceled).
- **M-Pesa Payment Integration**: Secure mobile payments.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **API Documentation**: Well-structured API endpoints for scalability.

## Tech Stack
### Frontend
- **React.js**: Component-based UI development
- **React Router**: Client-side routing
- **Context API**: State management
- **Axios**: API communication
- **Tailwind CSS**: UI styling

### Backend
- **Node.js & Express.js**: RESTful API development
- **MongoDB & Mongoose**: NoSQL database management
- **JWT Authentication**: Secure user authentication
- **Bcrypt.js**: Password hashing
- **CORS & Morgan**: Security and logging

### Payment Integration
- **M-Pesa Daraja API**: Mobile payment processing

## Project Setup

### Prerequisites
- **Node.js** (v16.x or later)
- **MongoDB** (Atlas or Local)
- **Git**
- **M-Pesa Daraja API credentials**

### Installation
#### 1. Clone the Repository
```sh
git clone https://github.com/your-username/gogoods.git
cd gogoods
```

#### 2. Install Dependencies
```sh
npm install
cd frontend && npm install
```

#### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add:
```env
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
MPESA_CONSUMER_KEY=your-mpesa-key
MPESA_CONSUMER_SECRET=your-mpesa-secret
MPESA_SHORTCODE=your-mpesa-shortcode
MPESA_PASSKEY=your-mpesa-passkey
PORT=5000
CLIENT_URL=http://localhost:3000
```

#### 4. Start the Application
Start the backend:
```sh
npm run dev
```

Start the frontend:
```sh
cd frontend
npm start
```

## Deployment
### Frontend Deployment (Vercel)
1. Push the code to GitHub
2. Connect the repository to Vercel
3. Deploy with default settings

### Backend Deployment (Render/DigitalOcean)
1. Configure the database and environment variables
2. Deploy the backend using a cloud platform
3. Ensure CORS and API security settings are properly configured

## API Endpoints
### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login

### Users
- `GET /api/users` - Get all users (Admin only)
- `GET /api/users/:id` - Get user details
- `DELETE /api/users/:id` - Delete user (Admin only)

### Products
- `GET /api/products` - Retrieve all products
- `POST /api/products` - Add a new product (Admin only)
- `GET /api/products/:id` - Retrieve product details
- `PUT /api/products/:id` - Update product details (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Cart
- `POST /api/cart/add` - Add item to cart
- `GET /api/cart` - Retrieve cart items
- `DELETE /api/cart/remove/:id` - Remove item from cart

### Orders
- `POST /api/orders/create` - Place an order
- `GET /api/orders` - Retrieve user orders
- `GET /api/orders/:id` - Get order details

### Payments
- `POST /api/mpesa/stkpush` - Initiate M-Pesa payment

## Best Practices & Security Measures
- **Use HTTPS**: Encrypt communications.
- **Token Expiry**: JWT tokens have a limited lifespan.
- **Input Validation**: Prevent XSS and SQL injection.
- **Rate Limiting**: Limit requests to prevent abuse.

## Future Enhancements
- **Wishlist Functionality**: Users can save favorite products.
- **Email Notifications**: Order confirmations and updates.
- **Multi-Currency Support**: Expand payment options.
- **AI-powered Recommendations**: Suggest products based on user behavior.

## License
This project is licensed under the MIT License.

## Contributors
- [Your Name](https://github.com/your-username)

## Support
For issues and suggestions, open an issue on [GitHub](https://github.com/your-username/gogoods/issues).


# SRVIZ - Sports Travel Package Platform

## 🏃‍♂️ Project Overview

This is a comprehensive sports travel package platform that allows users to discover and book amazing sports experiences for global events. The platform features a modern React frontend with a robust Node.js backend, designed to help sports enthusiasts plan their perfect sports travel experiences.

## 🚀 Tech Stack

### Frontend (Client)

- **React**
- **TailwindCSS**
- **Redux Toolkit**
- **React Hot Toast**
- **React Multi Carousel**

### Backend (Server)

- **Node.js** with **Express.js** - Web application framework
- **MongoDB** with **Mongoose** - Database and ODM
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **dotenv** - Environment variable management

## 🛠️ Setup Instructions

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git**

### 1. Clone the Repository

```bash
git clone https://github.com/shivammchaudhary1/srviz.git
cd srviz
```

### 2. Server Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create environment file
# Copy .env.example to .env and configure your variables
cp .env.example .env

# Configure your .env file with:
# - MongoDB connection string
# - JWT secret
# - Port number
# - Any other required environment variables

# Start development server
npm run dev
```

### 3. Client Setup

```bash
# Navigate to client directory (in a new terminal)
cd client

# Install dependencies
npm install

# Create environment file if needed
# Configure any client-side environment variables

# Create environment file
# Copy .env.example to .env and configure your variables
cp .env.example .env


# Start development server
npm run dev
```

### 4. Access the Application

- **Frontend:** http://localhost:5173 (Vite default)
- **Backend:** http://localhost:8080 (or your configured port)

## 🌟 Current Features & What's Working

### ✅ Implemented Features

- **Responsive Landing Page** - Modern hero section with sports travel theme
- **User Authentication System** - Registration and login functionality
- **Lead Management** - Contact form and lead capture system
- **State Management** - Redux Toolkit for app state
- **Toast Notifications** - User feedback system
- **Modern UI Components** - Reusable component library
- **API Integration** - RESTful backend with MongoDB
- **Security Features** - JWT authentication and bcrypt password hashing

## 🚀 Deployment

The application is configured for deployment on:

- **Frontend**: Vercel Link : https://srviz-eta.vercel.app/
- **Backend**: Render Link : https://srviz-fi62.onrender.com/

## 📞 Contact

**Shivam Chaudhary**

- GitHub: [@shivammchaudhary1](https://github.com/shivammchaudhary1)
- Email: shivamchaudhary75@gmail.com

---

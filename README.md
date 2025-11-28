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

## 📁 Project Structure

### Overview

This project follows a **monorepo architecture** with clear separation between frontend and backend, promoting maintainability, scalability, and developer experience.

```
srviz/
├── client/                          # Frontend React Application
│   ├── public/                      # Static assets served directly
│   ├── src/
│   │   ├── App.jsx                  # Main App component with global providers
│   │   ├── main.jsx                 # React app entry point
│   │   ├── appRoutes/
│   │   │   └── AllRoutes.jsx        # Centralized routing configuration
│   │   ├── assets/                  # Static resources management
│   │   │   ├── assets.js            # Asset imports/exports hub
│   │   │   ├── icons/               # SVG icons collection
│   │   │   └── Images/              # Image assets by category
│   │   │       ├── addons/          # Add-on service images
│   │   │       └── sample-itinerary/ # Sample trip images
│   │   ├── components/              # Reusable UI components
│   │   │   ├── common/              # Shared components (Navbar, Footer)
│   │   │   ├── forms/               # Form-related components
│   │   │   └── home/                # Homepage-specific components
│   │   ├── config/
│   │   │   └── config.js            # App-wide configuration
│   │   ├── pages/                   # Route-level page components
│   │   │   ├── Home.jsx             # Landing page
│   │   │   ├── Login.jsx            # Authentication page
│   │   │   └── Register.jsx         # User registration page
│   │   ├── redux/                   # State management
│   │   │   ├── store.js             # Redux store setup
│   │   │   └── slices/              # Feature-based state slices
│   │   │       ├── authSlice.js     # Authentication state
│   │   │       ├── leadSlice.js     # Lead management state
│   │   │       └── notificationSlice.js # Toast notifications state
│   │   ├── styles/                  # Styling organization
│   │   │   ├── global/              # Global CSS styles
│   │   │   ├── home/                # Homepage component styles
│   │   │   └── navbar/              # Navigation component styles
│   │   └── utils/
│   │       └── notify.js            # Utility functions for notifications
│   ├── eslint.config.js             # Code linting rules
│   ├── index.html                   # HTML template
│   ├── package.json                 # Frontend dependencies
│   ├── vite.config.js               # Vite bundler configuration
│   └── vercel.json                  # Deployment configuration
│
└── server/                          # Backend Node.js Application
    ├── src/
    │   ├── server.js                # Application entry point
    │   ├── config/                  # Configuration modules
    │   │   ├── db/
    │   │   │   └── db.js            # MongoDB connection setup
    │   │   ├── envs/
    │   │   │   └── env.js           # Environment variables handler
    │   │   ├── express/
    │   │   │   └── init.js          # Express server initialization
    │   │   ├── helper/
    │   │   │   └── helperFunctions.js # Shared utility functions
    │   │   └── libraries/           # Third-party integrations
    │   │       ├── bcrypt.js        # Password hashing utilities
    │   │       └── jwt.js           # JWT token management
    │   ├── controllers/             # Business logic handlers
    │   │   ├── auth.controller.js   # Authentication operations
    │   │   └── lead.controller.js   # Lead management operations
    │   ├── middleware/              # Custom Express middleware
    │   │   └── auth.middleware.js   # Authentication verification
    │   ├── models/                  # MongoDB data schemas
    │   │   ├── lead.model.js        # Lead data structure
    │   │   └── user.model.js        # User data structure
    │   └── routes/                  # API endpoint definitions
    │       ├── auth.routes.js       # Authentication endpoints
    │       ├── lead.routes.js       # Lead management endpoints
    │       └── main.routes.js       # Route aggregation
    └── package.json                 # Backend dependencies
```

### 🏗️ Architecture Design Decisions

#### **Monorepo Structure**

- **Single Repository** - Both frontend and backend in one repo for easier development and deployment coordination
- **Clear Separation** - Distinct `client/` and `server/` directories prevent code mixing and maintain clean boundaries

#### **Frontend Architecture (React + Vite)**

- **Component-Based Design** - Organized by functionality (`common/`, `forms/`, `home/`) for better reusability
- **Feature-First Organization** - Redux slices and styles grouped by features rather than file types
- **Asset Management** - Centralized asset handling with categorized image organization
- **Modern Build Tools** - Vite for fast development and optimized production builds

#### **Backend Architecture (Node.js + Express)**

- **MVC Pattern** - Clear separation of Models, Controllers, and Routes for maintainable code
- **Configuration First** - Centralized config management for different environments
- **Middleware Architecture** - Modular middleware for authentication, validation, and error handling
- **Library Abstraction** - Wrapper modules for third-party libraries (bcrypt, JWT) for easier testing and updates

#### **Why This Structure Works**

1. **Scalability** - Easy to add new features without restructuring existing code
2. **Maintainability** - Clear separation of concerns makes debugging and updates straightforward
3. **Developer Experience** - Logical organization reduces cognitive load when navigating the codebase
4. **Team Collaboration** - Well-defined boundaries prevent merge conflicts in team environments
5. **Deployment Flexibility** - Frontend and backend can be deployed independently to different platforms

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

## 🔧 Assumptions I Made

- **Role-Based Access Assumption**  
  I assumed the platform includes role-based access, where admin users can view all captured leads.  
  So I designed the backend and data structure in a way that supports this behavior.

- **Form Submission Does Not Require Login**  
  Lead form submission should work without login/signup.  
  If the user is already logged in, the system can also store their userId along with the lead.

- **Design Flexibility**  
  The exact design elements (spacing, fonts, shadows) do not need to be pixel-perfect, as per the assignment instructions.

- **Basic Validation**  
  Basic validation is enough (name/email/phone format).

## ✨ Improvements If Given More Time

- **Admin Dashboard UI** - Add a comprehensive admin panel to view and manage leads
- **Enhanced Animations** - Implement smooth animations using Framer Motion for better user experience

## 📞 Contact

**Shivam Chaudhary**

- GitHub: [@shivammchaudhary1](https://github.com/shivammchaudhary1)
- Email: shivamchaudhary75@gmail.com

---

# SRVIZ - Sports Travel Package Platform

## 🏃‍♂️ Project Overview

SRVIZ is a comprehensive sports travel package platform that allows users to discover and book amazing sports experiences for global events. The platform features a modern React frontend with a robust Node.js backend, designed to help sports enthusiasts plan their perfect sports travel experiences.

**Submitted By:** Shivam Chaudhary  
**Author:** Shivam Chaudhary  
**Repository:** [srviz](https://github.com/shivammchaudhary1/srviz)  
**Current Branch:** fixing

## 🚀 Tech Stack

### Frontend (Client)

- **React** v19.2.0 - Modern UI library
- **Vite** v7.2.4 - Fast build tool and dev server
- **TailwindCSS** v4.1.17 - Utility-first CSS framework
- **Redux Toolkit** v2.11.0 - State management
- **React Router DOM** v7.9.6 - Client-side routing
- **React Hot Toast** v2.6.0 - Toast notifications
- **React Multi Carousel** v2.8.6 - Carousel component

### Backend (Server)

- **Node.js** with **Express.js** v5.1.0 - Web application framework
- **MongoDB** with **Mongoose** v9.0.0 - Database and ODM
- **JWT** v9.0.2 - Authentication
- **bcrypt** v6.0.0 - Password hashing
- **CORS** v2.8.5 - Cross-origin resource sharing
- **dotenv** v17.2.3 - Environment variable management

### Development Tools

- **ESLint** v9.39.1 - Code linting
- **Nodemon** v3.1.11 - Server auto-restart

## 📁 Folder Structure

```
srviz/
├── client/                          # Frontend React Application
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── App.jsx                  # Main App component with routing
│   │   ├── main.jsx                 # Entry point for React app
│   │   ├── appRoutes/
│   │   │   └── AllRoutes.jsx        # Central routing configuration
│   │   ├── assets/                  # Images, icons, and asset management
│   │   │   ├── assets.js            # Asset imports and exports
│   │   │   ├── icons/               # SVG icons
│   │   │   └── Images/              # Static images
│   │   │       ├── addons/          # Add-on service images
│   │   │       └── sample-itinerary/ # Itinerary sample images
│   │   ├── components/              # Reusable React components
│   │   │   ├── common/              # Shared components (Navbar, Footer)
│   │   │   ├── forms/               # Form components
│   │   │   └── home/                # Home page specific components
│   │   ├── config/
│   │   │   └── config.js            # App configuration settings
│   │   ├── pages/                   # Page components
│   │   │   ├── Home.jsx             # Landing page
│   │   │   ├── Login.jsx            # User authentication
│   │   │   └── Register.jsx         # User registration
│   │   ├── redux/                   # State management
│   │   │   ├── store.js             # Redux store configuration
│   │   │   └── slices/              # Redux Toolkit slices
│   │   │       ├── authSlice.js     # Authentication state
│   │   │       ├── leadSlice.js     # Lead management state
│   │   │       └── notificationSlice.js # Notification state
│   │   ├── styles/                  # CSS modules and styling
│   │   │   ├── global/              # Global styles
│   │   │   ├── home/                # Home page styles
│   │   │   └── navbar/              # Navigation styles
│   │   └── utils/
│   │       └── notify.js            # Notification utilities
│   ├── eslint.config.js             # ESLint configuration
│   ├── index.html                   # HTML template
│   ├── package.json                 # Frontend dependencies
│   ├── vite.config.js               # Vite build configuration
│   └── vercel.json                  # Vercel deployment config
│
└── server/                          # Backend Node.js Application
    ├── src/
    │   ├── server.js                # Entry point for server
    │   ├── config/                  # Configuration modules
    │   │   ├── db/
    │   │   │   └── db.js            # MongoDB connection setup
    │   │   ├── envs/
    │   │   │   └── env.js           # Environment variables
    │   │   ├── express/
    │   │   │   └── init.js          # Express app initialization
    │   │   ├── helper/
    │   │   │   └── helperFunctions.js # Utility functions
    │   │   └── libraries/           # Third-party library configurations
    │   │       ├── bcrypt.js        # Password hashing setup
    │   │       └── jwt.js           # JWT token management
    │   ├── controllers/             # Request handlers
    │   │   ├── auth.controller.js   # Authentication logic
    │   │   └── lead.controller.js   # Lead management logic
    │   ├── middleware/              # Custom middleware
    │   │   └── auth.middleware.js   # Authentication middleware
    │   ├── models/                  # MongoDB schemas
    │   │   ├── lead.model.js        # Lead data model
    │   │   └── user.model.js        # User data model
    │   └── routes/                  # API route definitions
    │       ├── auth.routes.js       # Authentication routes
    │       ├── lead.routes.js       # Lead management routes
    │       └── main.routes.js       # Main route aggregation
    └── package.json                 # Backend dependencies
```

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

# Start development server
npm run dev
```

### 4. Access the Application

- **Frontend:** http://localhost:5173 (Vite default)
- **Backend:** http://localhost:3000 (or your configured port)

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

### 🎨 UI Components

- Navigation bar with responsive design
- Hero section with background imagery
- Sports package cards
- Sample itinerary display
- Add-ons and VIP experiences section
- Contact forms
- Footer with company information

### 🔐 Authentication & Security

- User registration and login
- JWT token-based authentication
- Protected routes
- Password encryption with bcrypt
- CORS configuration for secure API access

## 🚧 Future Development

### Admin Panel (In Progress)

I need additional time to create a comprehensive admin panel that will include:

- **Lead Dashboard** - View and manage captured leads
- **User Management** - Admin user controls
- **Analytics** - Sports package performance metrics
- **Content Management** - Update packages and itineraries
- **Booking Management** - Handle travel package bookings

### Planned Features

- Payment integration for booking packages
- Real-time notifications
- Advanced filtering and search
- Customer review system
- Multi-language support
- Mobile app development

## 🔧 Assumptions Made

1. **Database Choice**: MongoDB was chosen for its flexibility with varying data structures for different sports packages and user information.

2. **Authentication Method**: JWT tokens are used for stateless authentication, suitable for a scalable web application.

3. **Frontend Framework**: React with Vite was selected for fast development and optimal performance.

4. **State Management**: Redux Toolkit was implemented to handle complex state across components, especially for user authentication and lead management.

5. **Styling Approach**: Combination of TailwindCSS for utility classes and CSS modules for component-specific styling.

6. **API Design**: RESTful API architecture for clear endpoint organization and easy frontend integration.

7. **Environment**: Development environment assumes local MongoDB installation or cloud database access.

## 🚀 Deployment

The application is configured for deployment on:

- **Frontend**: Vercel (configuration included)
- **Backend**: Can be deployed on platforms like Heroku, Railway, or DigitalOcean

## 📝 Environment Variables

### Server (.env)

```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

### Client (if needed)

```
VITE_API_URL=http://localhost:3000/api
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 📞 Contact

**Shivam Chaudhary**

- GitHub: [@shivammchaudhary1](https://github.com/shivammchaudhary1)
- Email: [Your Email]

---

_Note: This is an active development project. The admin panel and additional features are currently being developed. Please check the latest commits for the most recent updates._

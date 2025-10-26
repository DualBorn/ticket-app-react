# TicketApp - React Implementation

A modern, responsive ticket management web application built with React, TypeScript, and Tailwind CSS. This implementation features a clean, DRY architecture with reusable components and comprehensive functionality.

## 🚀 Features

- **Modern Landing Page**: Beautiful hero section with wavy SVG background and decorative elements
- **Authentication System**: Secure login/signup with form validation and session management
- **Dashboard**: Comprehensive overview with ticket statistics and quick actions
- **Ticket Management**: Full CRUD operations (Create, Read, Update, Delete) with real-time validation
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Error Handling**: Comprehensive error handling with toast notifications and inline validation
- **Accessibility**: Semantic HTML, focus states, and proper color contrast

## 🏗️ Architecture

This project follows a clean, modular architecture with clear separation of concerns:

### **Component Structure**
```
src/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── Button.tsx         # Consistent button styling
│   │   ├── Input.tsx          # Form input with validation
│   │   ├── Textarea.tsx       # Textarea with error handling
│   │   ├── Select.tsx         # Dropdown select component
│   │   ├── Card.tsx           # Card container component
│   │   ├── Modal.tsx          # Modal dialog component
│   │   └── index.ts           # Component exports
│   └── layout/                # Layout components
│       ├── Navigation.tsx     # Unified navigation
│       ├── Footer.tsx         # Reusable footer
│       ├── DecorativeElements.tsx # SVG backgrounds & circles
│       └── index.ts           # Layout exports
├── hooks/                     # Custom React hooks
│   ├── useTickets.ts         # Ticket state management
│   └── useFormValidation.ts   # Form validation logic
├── utils/                     # Utility functions
│   ├── validation.ts          # Form validation utilities
│   └── ticketUtils.ts         # Ticket data operations
├── types/                     # TypeScript interfaces
│   └── index.ts               # Type definitions
├── constants/                 # Application constants
│   └── index.ts               # Configuration & constants
└── pages/                     # Main application pages
    ├── LandingPage.tsx
    ├── LoginPage.tsx
    ├── SignupPage.tsx
    ├── Dashboard.tsx
    └── TicketManagement.tsx
```

### **Key Design Principles**

- **DRY (Don't Repeat Yourself)**: All repeated code extracted to reusable components
- **Single Responsibility**: Each component has one clear purpose
- **Type Safety**: Comprehensive TypeScript interfaces and type checking
- **Consistent Styling**: Unified design system with Tailwind CSS
- **Maintainable Code**: Clear structure and separation of concerns

## 🛠️ Technologies Used

- **React 19.1.1** - Modern React with hooks and functional components
- **TypeScript 5.9.3** - Type-safe JavaScript development
- **Vite 7.1.7** - Fast build tool and development server
- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **React Router DOM 7.9.4** - Client-side routing
- **React Toastify 11.0.5** - Toast notifications
- **UUID 13.0.0** - Unique identifier generation
- **CLSX 2.1.1** - Conditional CSS class names

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd ticket-app-react
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

## 🔐 Test Credentials

The application includes demo accounts for testing:

### Admin Account
- **Email**: `admin@ticketapp.com`
- **Password**: `password123`

### User Account
- **Email**: `user@ticketapp.com`
- **Password**: `password123`

### Sign Up
You can also create a new account using the signup form with any email and password (minimum 6 characters).

## 🎨 Design System

### Layout Requirements
- **Max Width**: 1440px, centered on large screens
- **Responsive**: Mobile-first design with breakpoints for tablet and desktop
- **Hero Section**: Wavy SVG background with decorative circles
- **Cards**: Rounded corners with shadows for content sections

### Color Scheme
- **Primary**: Blue tones (#0284c7)
- **Success**: Green tones (#16a34a) - for "open" status
- **Warning**: Amber tones (#d97706) - for "in_progress" status
- **Danger**: Red tones (#dc2626) - for errors and high priority
- **Gray**: Neutral tones for "closed" status

### Status Colors
- **Open**: Green (`#16a34a`)
- **In Progress**: Amber (`#d97706`)
- **Closed**: Gray (`#6b7280`)

## 🔧 Key Features Implementation

### Authentication
- Session management using localStorage with key `ticketapp_session`
- Protected routes that redirect unauthorized users to login
- Form validation with inline error messages
- Toast notifications for success/error feedback

### Ticket Management
- **Create**: Modal form with validation for title and status
- **Read**: Card-based grid layout with status and priority indicators
- **Update**: Edit existing tickets with pre-filled form data
- **Delete**: Confirmation dialog before deletion
- **Validation**: Required fields (title, status) with real-time feedback

### Data Persistence
- Tickets stored in localStorage for persistence across sessions
- Automatic data loading on application startup
- Real-time updates to dashboard statistics

## 🎯 Validation Rules

### Authentication Forms
- **Email**: Required, valid email format
- **Password**: Required, minimum 6 characters for signup
- **Name**: Required, minimum 2 characters for signup
- **Confirm Password**: Must match password for signup

### Ticket Forms
- **Title**: Required field
- **Status**: Required, must be one of: "open", "in_progress", "closed"
- **Description**: Optional
- **Priority**: Optional, one of: "low", "medium", "high"

## 🚨 Error Handling

### Form Validation
- Inline error messages below form fields
- Real-time validation on form submission
- Clear error styling with red borders and text

### Authentication Errors
- "Invalid email or password" for login failures
- "Password must be at least 6 characters long" for signup
- Session expiration handling with automatic redirect

### Network/API Errors
- Toast notifications for failed operations
- Graceful fallbacks for localStorage operations
- User-friendly error messages

## ♿ Accessibility Features

- **Semantic HTML**: Proper use of headings, labels, and form elements
- **Focus States**: Visible focus indicators for keyboard navigation
- **Color Contrast**: Sufficient contrast ratios for text and backgrounds
- **Alt Text**: Descriptive alt text for images and icons
- **ARIA Labels**: Proper labeling for interactive elements

## 📱 Responsive Design

### Mobile (< 768px)
- Stacked layout for navigation
- Single column grid for tickets
- Collapsible mobile menu
- Touch-friendly button sizes

### Tablet (768px - 1024px)
- Two-column grid for tickets
- Adjusted spacing and typography
- Optimized form layouts

### Desktop (> 1024px)
- Three-column grid for tickets
- Full navigation menu
- Maximum width container (1440px)
- Hover effects and animations

## 🧪 Testing

### Manual Testing Checklist
- [ ] Landing page loads with wavy background and decorative elements
- [ ] Login form validates email and password
- [ ] Signup form validates all required fields
- [ ] Dashboard displays correct ticket statistics
- [ ] Ticket creation form validates required fields
- [ ] Ticket editing pre-fills form data
- [ ] Ticket deletion shows confirmation dialog
- [ ] Logout clears session and redirects to landing page
- [ ] Protected routes redirect unauthorized users
- [ ] Responsive design works on mobile, tablet, and desktop

## 🚀 Deployment

### Build Process
```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Environment Variables
No environment variables are required for this implementation as it uses localStorage for data persistence.

## 🔄 State Management

The application uses React Context for global state management:

- **AuthContext**: Manages user authentication state and session
- **Local State**: Component-level state for forms and UI interactions
- **LocalStorage**: Persistent storage for tickets and user sessions

## 📝 Recent Updates

### Code Refactoring (Latest)
- **DRY Architecture**: Extracted reusable UI components (Button, Input, Card, Modal, etc.)
- **Layout Components**: Created shared Navigation, Footer, and decorative elements
- **Custom Hooks**: Implemented useTickets and useFormValidation for state management
- **Utility Functions**: Centralized validation logic and ticket operations
- **Type Safety**: Comprehensive TypeScript interfaces and type-only imports
- **Constants**: Centralized configuration and application constants
- **Clean Code**: Removed code duplication and improved maintainability

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is part of the HNG Internship Frontend Stage 2 task.

## 🎯 Next Steps

After completing the React implementation, the next steps would be:
1. Create Vue.js implementation with identical design and functionality
2. Create Twig implementation with identical design and functionality
3. Ensure all three implementations follow the same design system
4. Create shared assets folder with SVG elements
5. Submit all implementations with comprehensive documentation

---

**Note**: This is a demonstration project for educational purposes. In a production environment, proper backend integration, database persistence, and additional security measures.
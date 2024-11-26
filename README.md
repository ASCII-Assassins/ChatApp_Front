
# Chat Application Frontend with React, TypeScript, and Vite

## 1. Introduction

### Project Overview
This project is a front-end web application built with React, TypeScript, and Vite, utilizing Redux for state management. It provides a responsive user interface for a chat application.

### Purpose and Goals
The main goal of this project is to implement a modern and efficient front-end for a chat application, leveraging the latest technologies in the React ecosystem.

### Target Audience
This application is suitable for developers looking to build a scalable and maintainable front-end for real-time applications using React, TypeScript, and Vite.

## 2. Getting Started

1. Clone the repository:
   ```sh
   git clone https://github.com/ASCII-Assassins/ChatApp_Front.git
   ```
2. Navigate to the project directory:
   ```sh
   cd ChatApp_Front
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Access the application at http://localhost:5173.

## 3. Project Structure
### Overview
The project structure is as follows:
```
ChatApp_Front/
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── redux/
│   ├── styles/
│   ├── utils/
│   ├── App.tsx
│   ├── index.tsx
│   └── setupTests.ts
├── .eslintrc.js
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
```

### Description
- `public/`: Contains static assets.
- `src/App/`: Contains Redux setup.
- `src/components/`: Contains React components.
- `src/config/`: Contains configuration files.
- `src/features/`: Contains Redux slices for features.
- `src/pages/`: Contains page components.
- `src/router/`: Contains routing configuration.
- `src/services/`: Contains Auth service.
- `src/utils/`: Contains utility functions.
- `App.tsx`: Main application component.
- `main.tsx`: Entry point of the application.

## 4. Features
- Real-time messaging
   - User authentication and authorization
   - Responsive design for various screen sizes
   - Integration with Redux for state management
   - Custom hooks for reusable logic
   - ESLint and Prettier for code quality and formatting
  
## 5. Packages Used
- `react`: A JavaScript library for building user interfaces.
- `react-dom`: Provides DOM-specific methods for React.
- `redux`: A predictable state container for JavaScript apps.
- `typescript`: Typed superset of JavaScript that compiles to plain JavaScript.
- `vite`: Next-generation front-end tool for faster builds.
- `axios`: Promise-based HTTP client for the browser and Node.js.
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
Vehicle Dashboard
Overview
The Vehicle Dashboard is a web application built using React, TypeScript, and Vite. It serves as a user interface for managing and visualizing vehicle data collected from an Automatic Number Plate Recognition (ANPR) system. This project aims to provide users with a seamless experience in monitoring vehicle information and insights.

Features
Real-time Vehicle Monitoring: View live data collected from ANPR systems.
User-friendly Interface: Intuitive design for easy navigation and management of vehicle records.
Component-based Architecture: Built using reusable React components for maintainability and scalability.
Technologies Used
React: A JavaScript library for building user interfaces.
TypeScript: A superset of JavaScript that adds static typing.
Vite: A fast development server and build tool.
Tailwind CSS: A utility-first CSS framework for styling.
Getting Started
Prerequisites
Node.js (version 14 or later)
npm (Node Package Manager)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/vehicle-dashboard.git
cd vehicle-dashboard
Install the dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Open your browser and navigate to http://localhost:5173.
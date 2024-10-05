import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Assuming you have an App.tsx file that serves as your main component.

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

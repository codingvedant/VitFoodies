import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import
import './index.css';
import App from './App';
import { RecipesContextProvider } from './context/RecipesContext';
import { AuthContextProvider } from './context/AuthContext';
import { CartContextProvider } from './context/CartContext'; // Import CartContextProvider

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// Create the root container
const container = document.getElementById('root');
const root = createRoot(container); // Use createRoot from react-dom/client

// Render the application
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RecipesContextProvider>
        <CartContextProvider> {/* Wrap your App with CartContextProvider */}
          <App />
        </CartContextProvider>
      </RecipesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
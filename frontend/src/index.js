import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RecipesContextProvider } from './context/RecipesContext';
import { AuthContextProvider } from './context/AuthContext';
import { CartContextProvider } from './context/CartContext'; // Import CartContextProvider

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById('root'));
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



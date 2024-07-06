import React, { createContext, useReducer } from 'react';

// Reducer function for managing cart state
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CART':
        case 'ADD_ITEM':
        case 'REMOVE_ITEM':
            return {
                cart: action.payload
            };
        case 'CLEAR_CART':
            return {
                cart: action.payload
            };
        default:
            return state;
    }
};

// Creating CartContext
export const CartContext = createContext();

// CartContextProvider component
export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, { cart: null }); 

    return (
        <CartContext.Provider value={{ ...state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

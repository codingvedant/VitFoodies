import React, { createContext, useReducer } from 'react';

// Initial state for the cart
const initialCartState = {
    items: [], // Array to hold cart items
    totalAmount: 0, // Total amount in the cart
};

// Reducer function for managing cart state
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            // Logic to add item to cart
            const updatedItems = state.items.concat(action.payload);
            const updatedTotalAmount =
                state.totalAmount + action.payload.price * action.payload.quantity;
            return {
                ...state,
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            };
        case 'REMOVE_ITEM':
            // Logic to remove item from cart
            const updatedCartItems = state.items.filter(
                item => item.recipe !== action.payload
            );
            const updatedAmtAfterRemoval =
                state.totalAmount -
                action.payload.price * action.payload.quantity;
            return {
                ...state,
                items: updatedCartItems,
                totalAmount: updatedAmtAfterRemoval,
            };
        case 'CLEAR_CART':
            // Logic to clear entire cart
            return {
                ...state,
                items: [],
                totalAmount: 0,
            };
        default:
            return state;
    }
};

// Creating CartContext
export const CartContext = createContext();

// CartContextProvider component
export const CartContextProvider = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

    return (
        <CartContext.Provider value={{ cartState, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};




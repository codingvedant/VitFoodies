import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cartState, dispatch } = useContext(CartContext);

    useEffect(() => {
        fetch('http://localhost:4000/api/cart')
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: 'SET_CART', payload: { items: data.items, totalAmount: data.totalAmount } });
            });
    }, [dispatch]);

    const removeItem = (recipeId) => {
        fetch('http://localhost:4000/api/cart/remove', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId: "667bcd14d7b08bde5cf43316", recipeId }), // Replace userId with actual userId from auth context
        })
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: 'SET_CART', payload: { items: data.items, totalAmount: data.totalAmount } });
            });
    };

    const placeOrder = () => {
        // Implement logic to place order
        alert("Order placed successfully!");
    };

    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            {cartState.items.map(item => (
                <div className="cart-item" key={item.recipe}>
                    <p className="item-name">{item.recipeName}</p>
                    <p className="item-price">${item.price.toFixed(2)}</p>
                    <input type="number" className="item-quantity" value={item.quantity} min="1" readOnly />
                    <p className="item-total-price">${(item.quantity * item.price).toFixed(2)}</p>
                    <button className="delete-button" onClick={() => removeItem(item.recipe)}>Delete</button>
                </div>
            ))}
            <div className="total">
                <p>Total: ${cartState.totalAmount.toFixed(2)}</p>
            </div>
            <button className="place-order-button" onClick={placeOrder}>Place Order</button>
        </div>
    );
};

export default Cart;

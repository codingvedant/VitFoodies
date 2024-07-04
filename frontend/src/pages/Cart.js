import React, { useContext, useState } from "react";
import useCartFetch from "./useCartFetch";
import { CartContext } from "../context/CartContext"; // Import CartContext
import Navbar from "../pages/Navbar";
import { useAuthContext } from "../hooks/useAuthContext";

const Cart = () => {
    const { isPending, error } = useCartFetch('http://localhost:4000/api/cart');
    const { cart, dispatch } = useContext(CartContext); 
    const { user } = useAuthContext();
    const [loading, setLoading] = useState(false);

    const handleDelete = (name) => {
        if (user) {
            setLoading(true);
            fetch('http://localhost:4000/api/cart/remove', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify({ name }),
            })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error('Failed to delete item from cart');
                    }
                    return res.json();
                })
                .then((data) => {
                    console.log('Deleted from cart:', data);
                    dispatch({ type: 'REMOVE_ITEM', payload: data });
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error deleting item from cart:', error);
                    setLoading(false);
                });
        }
    };

    if (isPending || loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return <div className="text-center">{error}</div>;
    }

    return (
        <div className="Cart">
            <Navbar />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card mt-5">
                            <div className="card-body">
                                <h1 className="card-title mb-4 text-center">Shopping Cart</h1>
                                {cart && cart.items.length > 0 ? (
                                    cart.items.map(item => (
                                        <div className="row mb-3" key={item._id}>
                                            <div className="col">
                                                <h5>{item.name}</h5>
                                            </div>
                                            <div className="col">
                                                <p>Price: ₹{item.price.toFixed(2)}</p>
                                            </div>
                                            <div className="col">
                                                <p>Quantity: <input type="number" className="form-control d-inline-block w-50" value={item.quantity} min="1" readOnly /></p>
                                            </div>
                                            <div className="col">
                                                <p>Total Price: ₹{(item.quantity * item.price).toFixed(2)}</p>
                                            </div>
                                            <div className="col">
                                                <button className="btn btn-danger" onClick={() => handleDelete(item.name)}>Delete</button>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center">Your cart is empty!</div>
                                )}
                                {cart && cart.items.length > 0 && (
                                    <>
                                        <div className="total mt-4 text-center">
                                            <h5>Total: ₹{cart.totalAmount.toFixed(2)}</h5>
                                        </div>
                                        <div className="text-center mt-4">
                                            <button className="btn btn-primary">Place Order</button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;



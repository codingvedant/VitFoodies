import React, { useContext } from "react";
import useCartFetch from "./useCartFetch";
import { CartContext } from "../context/CartContext"; // Adjust the path as per your actual context file
import Navbar from "../pages/Navbar"

const Cart = () => {
    const { data: cartState, isPending, error } = useCartFetch('http://localhost:4000/api/cart');
    const { dispatch } = useContext(CartContext);

    if (isPending) {
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
                            {cartState && cartState.items.map(item => (
                                <div className="row mb-3" key={item._id}>
                                    <div className="col">
                                        <h5>{item.name}</h5>
                                    </div>
                                    <div className="col">
                                        <p>Price: ${item.price.toFixed(2)}</p>
                                    </div>
                                    <div className="col">
                                        <p>Quantity: <input type="number" className="form-control d-inline-block w-50" value={item.quantity} min="1" readOnly /></p>
                                    </div>
                                    <div className="col">
                                        <p>Total Price: ${item.quantity * item.price.toFixed(2)}</p>
                                    </div>
                                    <div className="col">
                                        <button className="btn btn-danger" onClick={() => {
                                            dispatch({ type: 'REMOVE_ITEM', payload: item.recipe });
                                        }}>Delete</button>
                                    </div>
                                </div>
                            ))}
                            <div className="total mt-4 text-center">
                                <h5>Total: ${cartState.totalAmount.toFixed(2)}</h5>
                            </div>
                            <div className="text-center mt-4">
                                <button className="btn btn-primary">Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default Cart;
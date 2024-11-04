import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import useFetch from "./useFetch";
import { useCartContext } from "../hooks/useCartContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const RecipeDetails = () => {
    const { id } = useParams();
    const { data, isPending, error } = useFetch('https://vitfoodies.onrender.com/api/recipes/' + id);
    const recipes = data;
    const [quantity, setQuantity] = useState(1);
    const { dispatch } = useCartContext();
    const { user } = useAuthContext();
    const [message, setMessage] = useState('');

    const handleAddToCart = () => {
        const newItem = {
            recipeId: recipes._id,
            quantity: parseInt(quantity, 10),
        };

        if (user) {
            fetch('https://vitfoodies.onrender.com/api/cart/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify(newItem),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log('Added to cart:', data);
                    dispatch({ type: 'ADD_ITEM', payload: data });
                    setMessage(`Added successfully! (${recipes.name} - ${quantity})`);
                    setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
                });
        }
    };

    const handleQuantityChange = (amount) => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity + amount));
    };

    return (
        <div className="recipedetails">
            <Navbar />
            <div className="content">
                {isPending && <div>Loading...</div>}
                {error && <div>{error}</div>}

                {recipes &&
                    <div className="container-lg">
                        <div className="mt-4 detailcontainer border overflow-hidden p-3 rounded-3">
                            <div className="text-center mb-4">
                                <img src={recipes.img} alt={recipes.name} className="img-fluid" style={{ width: '40%', height: '15rem', maxWidth: '100%', maxHeight: '100%' }} />
                            </div>
                            <div className="fs-2 p-3 fw-semibold text-center">{recipes.name}</div>
                            <div className="fs-5 fst-italic fw-lighter pb-3 border-bottom-dashed text-center">Recipe By {recipes.chef}</div>
                            <div className="text-center py-3">
                                <span className="fs-5">Course: <b className="fw-bolder">{recipes.course}</b> /</span>
                                <span className="fs-5"> Cuisine:<b className="fw-bolder"> {recipes.cuisine}</b></span>
                            </div>

                            <div className="card-group">
                                <div className="infocards card">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Servings</h5>
                                        <p className="card-text text-center">{recipes.servings} Servings</p>
                                    </div>
                                </div>
                                <div className="infocards card">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Prep Time</h5>
                                        <p className="card-text text-center">{recipes.time} minutes</p>
                                    </div>
                                </div>
                                <div className="infocards card">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Calories</h5>
                                        <p className="card-text text-center">500 Calories</p>
                                    </div>
                                </div>
                            </div>

                            <div className="about py-2">
                                <h1 className="fs-3 fw-semibold text-center">About this recipe:</h1>
                                <p className="text-center">{recipes.about}</p>
                            </div>

                            <div className="price py-2">
                                <h1 className="fs-3 fw-semibold text-center">Price:</h1>
                                <p className="text-center">₹{recipes.price}</p>
                            </div>

                            <div className="text-center">
                                <div className="quantity-input mb-3" style={{ width: '25%', margin: '0 auto' }}>
                                    <label htmlFor="quantity" className="form-label">Quantity:</label>
                                    <div className="input-group">
                                        <button className="btn btn-outline-secondary" onClick={() => handleQuantityChange(-1)}>-</button>
                                        <input
                                            type="number"
                                            id="quantity"
                                            className="form-control text-center"
                                            value={quantity}
                                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
                                            min="1"
                                        />
                                        <button className="btn btn-outline-secondary" onClick={() => handleQuantityChange(1)}>+</button>
                                    </div>
                                </div>
                                {message && (
                                    <div className="mt-3 alert alert-success" role="alert">
                                        {message}
                                    </div>
                                )}
                                {user && !message && (<button className="btn btn-dark mt-3" onClick={handleAddToCart}>Add to Cart</button>)}
                                {!user && (<Link to="/login" className="btn btn-dark mt-3">Login to add</Link>)}
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default RecipeDetails;

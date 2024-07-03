import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import useFetch from "./useFetch";

const RecipeDetails = () => {
    const { id } = useParams();
    const { data: recipes, isPending, error } = useFetch('http://localhost:4000/api/recipes/' + id);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        const userId = "667bcd14d7b08bde5cf43316"; // Replace with actual user ID from auth context
        const newItem = {
            userId,
            recipeId: recipes._id,
            quantity: quantity,
        };

        fetch('http://localhost:4000/api/cart/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('Added to cart:', data);
            });
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
                            <img src={recipes.img} alt="" className="img-fluid" />
                            <div className="fs-2 p-3 fw-semibold ps-0">{recipes.name}</div>
                            <div className="fs-5 fst-italic fw-lighter pb-3 border-bottom-dashed recipeborder">Recipe By {recipes.chef}</div>
                            <div className="py-3">
                                <span className="fs-5">Course: <b className="fw-bolder">Breakfast</b> /</span>
                                <span className="fs-5"> Cuisine:<b className="fw-bolder"> American</b></span>
                            </div>

                            <div className="card-group">
                                <div className="infocards card">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Servings</h5>
                                        <p className="card-text text-center">4 Servings</p>
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
                                <h1 className="fs-3 fw-semibold">About this recipe:</h1>
                                <p>{recipes.about}</p>
                            </div>

                            <div className="price py-2">
                                <h1 className="fs-3 fw-semibold">Price:</h1>
                                <p>${recipes.price}</p>
                            </div>

                            <div className="text-center">
                                <div className="quantity-input mb-3">
                                    <label htmlFor="quantity" className="form-label">Quantity:</label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        className="form-control"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        min="1"
                                    />
                                </div>
                                <button className="btn btn-dark mt-3" onClick={handleAddToCart}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default RecipeDetails;

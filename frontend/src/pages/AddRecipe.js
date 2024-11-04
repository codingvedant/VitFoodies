import Navbar from "./Navbar";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddRecipe = () => {
    const [name, setName] = useState('');
    const [chef, setChef] = useState('');
    const [time, setTime] = useState('');
    const [img, setImg] = useState('');
    const [servings, setServings] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [calories, setCalories] = useState('');
    const [about, setAbout] = useState('');
    const [reviews, setReviews] = useState([{ reviewerName: '', reviewText: '' }]);
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const recipe = { name, chef, time, img, servings, cuisine, calories, about, reviews };

        setIsPending(true);

        fetch('https://vitfoodies.onrender.com/api/recipes', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(recipe)
        }).then(() => {
            console.log('New recipe added');
            setIsPending(false);
            history.push('/');
        });
    };

    const handleReviewChange = (index, field, value) => {
        const updatedReviews = [...reviews];
        updatedReviews[index][field] = value;
        setReviews(updatedReviews);
    };

    const addReviewField = () => {
        setReviews([...reviews, { reviewerName: '', reviewText: '' }]);
    };

    return ( 
        <div className="addrecipe">
            <Navbar />
            <div className="content">
                <header className="d-flex justify-content-center container-fluid align-items-center">
                    <h2 className="py-2 m-0 text-5xl tagline text-wrap">{`Share your delicious recipes with us !`}</h2>
                </header>

                <div className="row justify-content-center my-4">
                    <div className="col-10 col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="recipename" className="form-label fw-semibold fs-4">Recipe Name:</label>
                                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="form-control inputarea" id="recipename" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="chefname" className="form-label fw-semibold fs-4">Chef Name:</label>
                                <input type="text" required value={chef} onChange={(e) => setChef(e.target.value)} className="form-control inputarea" id="chefname" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="time" className="form-label fw-semibold fs-4">Time to Prepare (minutes):</label>
                                <input type="number" required value={time} onChange={(e) => setTime(e.target.value)} className="form-control inputarea" id="time" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="servings" className="form-label fw-semibold fs-4">Servings:</label>
                                <input type="number" required value={servings} onChange={(e) => setServings(e.target.value)} className="form-control inputarea" id="servings" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cuisine" className="form-label fw-semibold fs-4">Cuisine:</label>
                                <input type="text" required value={cuisine} onChange={(e) => setCuisine(e.target.value)} className="form-control inputarea" id="cuisine" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="calories" className="form-label fw-semibold fs-4">Calories:</label>
                                <input type="number" required value={calories} onChange={(e) => setCalories(e.target.value)} className="form-control inputarea" id="calories" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="imagelink" className="form-label fw-semibold fs-4">Image Link:</label>
                                <input type="text" required value={img} onChange={(e) => setImg(e.target.value)} className="form-control inputarea" id="imagelink" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="about" className="form-label fw-semibold fs-4">Recipe Description:</label>
                                <textarea required value={about} onChange={(e) => setAbout(e.target.value)} className="form-control inputarea" id="about" />
                            </div>

                            {/* Review Section */}
                            <div className="mb-3">
                                <label className="form-label fw-semibold fs-4">Reviews:</label>
                                {reviews.map((review, index) => (
                                    <div key={index} className="mb-2">
                                        <input 
                                            type="text" 
                                            placeholder="Reviewer Name" 
                                            value={review.reviewerName} 
                                            onChange={(e) => handleReviewChange(index, 'reviewerName', e.target.value)} 
                                            className="form-control mb-1"
                                        />
                                        <textarea 
                                            placeholder="Review Text" 
                                            value={review.reviewText} 
                                            onChange={(e) => handleReviewChange(index, 'reviewText', e.target.value)} 
                                            className="form-control"
                                        />
                                    </div>
                                ))}
                                <button type="button" onClick={addReviewField} className="btn btn-secondary mt-2">Add Review</button>
                            </div>

                            {!isPending && <button type="submit" className="btn submitbutton">Submit</button>} 
                            {isPending && <button type="submit" disabled className="btn submitbutton">Adding Recipe...</button>} 
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AddRecipe;

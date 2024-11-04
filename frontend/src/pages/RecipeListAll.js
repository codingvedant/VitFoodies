import useFetch from './useFetch';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const RecipeListAll = () => {
    const { data, isPending, error } = useFetch('https://vitfoodies.onrender.com/api/recipes');
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedServings, setSelectedServings] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedCuisine, setSelectedCuisine] = useState("");

    // Filter recipes based on the search query and selected dropdown filters
    const filteredRecipes = data?.filter(recipe => {
        const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              recipe.chef.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesServings = selectedServings ? recipe.servings === parseInt(selectedServings) : true;

        // Adjust time filter based on selected time range
        const matchesTime = selectedTime
            ? (selectedTime === "<15" && recipe.time < 15) ||
              (selectedTime === "15-30" && recipe.time >= 15 && recipe.time <= 30) ||
              (selectedTime === "30-60" && recipe.time > 30 && recipe.time <= 60) ||
              (selectedTime === ">60" && recipe.time > 60)
            : true;

        const matchesCuisine = selectedCuisine ? recipe.cuisine === selectedCuisine : true;

        return matchesSearch && matchesServings && matchesTime && matchesCuisine;
    });

    return (
        <div className="recipelistall">
            <div className="row my-3">
                {/* Search Input */}
                <input 
                    type="text" 
                    className="form-control mb-4" 
                    placeholder="Search by recipe name or chef..." 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                
                {/* Dropdown Filters */}
                <div className="row mb-4">
                    {/* Servings Dropdown */}
                    <div className="col">
                        <select 
                            className="form-select" 
                            value={selectedServings} 
                            onChange={(e) => setSelectedServings(e.target.value)}
                        >
                            <option value="">All Servings</option>
                            <option value="2">2 Servings</option>
                            <option value="4">4 Servings</option>
                            <option value="6">6 Servings</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>

                    {/* Time to Serve Dropdown */}
                    <div className="col">
                        <select 
                            className="form-select" 
                            value={selectedTime} 
                            onChange={(e) => setSelectedTime(e.target.value)}
                        >
                            <option value="">All Times</option>
                            <option value="<15">Less than 15 Minutes</option>
                            <option value="15-30">15-30 Minutes</option>
                            <option value="30-60">30-60 Minutes</option>
                            <option value=">60">More than 60 Minutes</option>
                        </select>
                    </div>

                    {/* Cuisine Dropdown */}
                    <div className="col">
                        <select 
                            className="form-select" 
                            value={selectedCuisine} 
                            onChange={(e) => setSelectedCuisine(e.target.value)}
                        >
                            <option value="">All Cuisines</option>
                            <option value="Italian">Italian</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Indian">Indian</option>
                            {/* Add more options based on your available cuisines */}
                        </select>
                    </div>
                </div>
            </div>

            <div className="row my-1 justify-content-evenly">
                {isPending && <div className="px-10 fs-3 most">Loading....</div>}
                {error && <div className="px-10 fs-3 most">{error}</div>}
                {filteredRecipes && filteredRecipes.map((recipe) => (
                    <div key={recipe._id} className="carddiv col-xl-3 col-lg-3 col-md-4 col-sm-6 col-8 align-items-sm-center">
                        <Link to={`/recipes/${recipe._id}`} className="card rounded-4 overflow-hidden my-2">
                            <img src={recipe.img} className="card-img-top overflow-y-hidden" alt={recipe.name} />
                            <div className="card-body">
                                <h5 className="card-title fw-bolder">{recipe.name}</h5>
                                <p className="card-text fw-semibold">By {recipe.chef}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecipeListAll;

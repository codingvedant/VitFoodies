import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import useFetch from "./useFetch";

const RecipeDetails = () => {
    
    const {id} = useParams();
    const {data:recipes,isPending,error} = useFetch('http://localhost:4000/api/recipes/'+id)

    return ( 
        <div className="recipedetails">
            <Navbar />
            <div className="content ">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}

            {recipes && 
                <div className="container-lg">
                <div className="mt-4 detailcontainer border overflow-hidden p-3 rounded-3">
                    <img src={recipes.img} alt="" className="img-fluid" />
                    <div className="fs-2 p-3 fw-semibold ps-0">{recipes.name}</div>
                    <div className="fs-5 fst-italic fw-lighter pb-3 border-bottom-dashed recipeborder">Recipe By {recipes.chef}</div>
                    <div className="py-3">
                    <span className="fs-5">Course: <b className="fw-bolder">Breakfast</b>        /</span>
                    <span className="fs-5">   Cuisine:<b className="fw-bolder"> American</b></span>
                    </div>
                    

                    <div className="card-group ">
                        <div className="infocards card ">
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
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex nam ducimus blanditiis saepe commodi nisi corrupti praesentium error sequi recusandae, nesciunt odit, explicabo hic deserunt voluptas sed. Vitae officiis culpa accusamus! Nesciunt, nulla sequi.</p>

                    </div>
                </div>
                </div>}
            </div>
                
        </div>
     );
}
 
export default RecipeDetails;
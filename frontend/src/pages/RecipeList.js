import useFetch from './useFetch'
import { Link } from 'react-router-dom';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const RecipeList = () => {

    const {data:recipes,isPending,error} = useFetch(`${API_BASE_URL}/recipes`)


    return ( 
        <div className="recipelist">
            <div className="row my-1 justify-content-evenly">
                {isPending && <div className="px-10 fs-3 most">Please wait for a min....</div>}
                {error && <div className="px-10 fs-3 most">{error}</div>}
                {recipes && recipes.slice(0,4).map((recipe)=>(
                    <div key={recipe._id} className="carddiv col-xl-3 col l-3 col-md-4 col-sm-4 col-8 align-items-sm-center">
                        <Link to={`/recipes/${recipe._id}`} className="card rounded-4 overflow-hidden my-2">
                            <img src={recipe.img} className="card-img-top overflow-y-hidden" alt="..."/>
                            <div className="card-body">
                                <h5 key={recipe._id} className="card-title fw-bolder">{recipe.name}</h5>
                                <p className="card-text fw-semibold">By {recipe.chef}</p>
                            </div>
                        </Link>
                    </div>
                ))}
                
            </div>
        </div>
     );
}
 
export default RecipeList;
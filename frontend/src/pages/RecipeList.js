import useFetch from './useFetch'
import { Link } from 'react-router-dom';
const RecipeList = () => {

    const {data:recipes,isPending,error} = useFetch('http://localhost:4000/api/recipes')


    return ( 
        <div className="recipelist">
            <div className="row my-1 justify-content-evenly">
                {isPending && <div class="px-10 fs-3 most">Loading....</div>}
                {error && <div class="px-10 fs-3 most">Could not connect to the server</div>}
                {recipes && recipes.map((recipe)=>(
                    <div className="carddiv col-xl-3 col l-3 col-md-4 col-sm-4 col-8 align-items-sm-center">
                        <Link to={`/recipes/${recipe._id}`} class="card rounded-4 overflow-hidden my-2">
                            <img src={recipe.img} class="card-img-top overflow-y-hidden" alt="..."/>
                            <div class="card-body">
                                <h5 key={recipe._id} class="card-title fw-bolder">{recipe.name}</h5>
                                <p class="card-text fw-semibold">By {recipe.chef}</p>
                            </div>
                        </Link>
                    </div>
                ))}
                
            </div>
        </div>
     );
}
 
export default RecipeList;
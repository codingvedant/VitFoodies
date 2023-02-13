import RecipeList from "./RecipeList";
import Navbar from "./Navbar";

const AllRecipes = () => {
    return ( 
        <div className="allrecipes">
            <Navbar />
            <div className="content">
            <RecipeList />
            </div>
        </div>
     );
}
 
export default AllRecipes;
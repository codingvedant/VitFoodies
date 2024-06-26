import RecipeListAll from "./RecipeListAll";
import Navbar from "./Navbar";

const AllRecipes = () => {
    return ( 
        <div className="allrecipes">
            <Navbar />
            <div className="content container-lg justify-content-center">
            <h2 className=" py-2 m-0 text-5xl tagline text-wrap">All Recipes:</h2>
            <RecipeListAll />
            </div>
        </div>
     );
}
 
export default AllRecipes;
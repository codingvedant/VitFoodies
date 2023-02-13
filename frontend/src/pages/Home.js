import Navbar from "./Navbar"
import RecipeList from "./RecipeList"

const Home = () =>{

    return(
        <div className="home">
            <Navbar />
        <div className="content">
            <header class="d-flex justify-content-center container-fluid align-items-center">
                <h2 class=" py-2 m-0 text-5xl tagline text-wrap">Find your favorite delicacies in the campus here !</h2>
            </header>

            <div class="container-lg justify-content-center">
                <h4 class=" h-2 most ">Most Popular:</h4>

                <RecipeList />
                <h4 class="h-2 most ">Latest Recipes:</h4>
                <RecipeList />

            </div>
        </div>
        </div>
        
    )
}

export default Home
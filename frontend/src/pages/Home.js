import Navbar from "./Navbar"
import RecipeList from "./RecipeList"

const Home = () =>{

    return(
        <div className="home">
            <Navbar />
        <div className="content">
            <header className="d-flex justify-content-center container-fluid align-items-center">
                <h2 className=" py-2 m-0 text-5xl tagline text-wrap">Find your favorite delicacies in the campus here !</h2>
            </header>

            <div className="container-lg justify-content-center">
                <h4 className=" h-2 most ">Most Popular:</h4>

                <RecipeList />
                <h4 className="h-2 most ">Latest Recipes:</h4>
                <RecipeList />

            </div>
        </div>
        </div>
        
    )
}

export default Home
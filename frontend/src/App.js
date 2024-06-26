import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/Home';
import AllRecipes from "./pages/AllRecipes"
import NotFound from './pages/NotFound';

import RecipeDetails from './pages/RecipeDetails';
import AddRecipe from './pages/AddRecipe';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route> 
              <Route exact path="/allrecipes">
                <AllRecipes />
              </Route>
              <Route exact path="/contactus">
              <RecipeDetails />
              </Route>
              <Route exact path="/recipes/:id">
              <RecipeDetails />
              </Route>
              <Route exact path="/addrecipe">
              <AddRecipe />
              </Route>
              <Route exact path="/login">
              <Login />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

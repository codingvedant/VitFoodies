import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/Home';
import AllRecipes from "./pages/AllRecipes"

import RecipeDetails from './pages/RecipeDetails';

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
            </Switch>
            
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

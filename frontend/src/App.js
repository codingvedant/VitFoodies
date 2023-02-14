import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/Home';
import AllRecipes from "./pages/AllRecipes"

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
            </Switch>
            
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

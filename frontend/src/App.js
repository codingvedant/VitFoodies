import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import AllRecipes from './pages/AllRecipes';
import NotFound from './pages/NotFound';
import { useAuthContext } from './hooks/useAuthContext';
import RecipeDetails from './pages/RecipeDetails';
import AddRecipe from './pages/AddRecipe';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import ContactUs from './pages/ContactUs';

function App() {
  const { user } = useAuthContext();


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
              <ContactUs />
            </Route>
            <Route exact path="/recipes/:id">
              <RecipeDetails />
            </Route>
            <Route exact path="/addrecipe">
              <AddRecipe />
            </Route>
            <Route
              exact path="/login"
              render={() => (!user ? <Login /> : <Redirect to="/" />)}
            />
            <Route
              exact path="/signup"
              render={() => (!user ? <Signup /> : <Redirect to="/" />)}
            />
            <Route
              exact path="/cart"
              render={() => (user ? <Cart /> : <Redirect to="/login" />)}
            />
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


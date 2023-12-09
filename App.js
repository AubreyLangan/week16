import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import RecipeList from './Components/RecipeList';
import RecipeDetail from './Components/RecipeDetail';
import AddRecipe from './Components/AddRecipe';
import SearchPage from './Components/SearchPage';
import './App.css';


export default function App() {
  return (
    <Router>
      <div className='App'>
      <div className='container'>
        <Header />
      </div>

        <nav>
          <ul>
            <li>
              <Link to="/">Recipe List</Link>
            </li>
            <li>
              <Link to="/recipedetail">Recipe Detail</Link>
            </li>
            <li>
              <Link to="/recipes">Add Recipe</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/recipes">
            <AddRecipe />
          </Route>

          <Route path="/recipedetail">
            <RecipeDetail />
          </Route>

          <Route path="/">
            <RecipeList />
          </Route>
        </Switch>
      <div className='container'>
        <Footer /> 
      </div>
      </div>
    </Router>
  );
};

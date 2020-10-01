import React, { useState, useEffect } from 'react';
import './App.css';
import Recipe from './Recipe';


function App() {
  const APP_ID = "3caabacb";
  const APP_KEY = "ec02a2288b5800a44005e501a60699a8";
  const randomList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("spaghetti");
  const [random, setRandom] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&to=9`);
    // const response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&to=9&mealType=Dinner`);
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    // setSearch('');
  }

  const getRandom = e => {
    e.preventDefault();
    setRandom(randomList[Math.floor(Math.random() * 25)]);
    console.log(random);
    setQuery(random);
    // setSearch('');
  }

  return (
    <div className="App">
      <h1 className="title">What to eat today?</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <div className="search-button">
          <button>
            Search
          </button>
        </div>
        <div className="random-button">
          <button className="colorful-button" onClick={getRandom}>
            Random
          </button>
        </div>
      </form>

      <div className="recipe-section">
      {recipes.map(recipe => (
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={Math.floor(recipe.recipe.calories/recipe.recipe.yield)}
          recipeUrl={recipe.recipe.url}
          image={recipe.recipe.image} />
      ))}
      </div>
    </div>
  );
}

export default App;

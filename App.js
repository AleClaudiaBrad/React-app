import React, {useEffect, useState} from 'react';
import './App.css';
import RecipeComponent from './RecipeComponent';



const App = () => {
    
    
    const APP_ID = "57d5440d";
    const APP_KEY = "1c39fcd5079e06ed127d269a094f34f6";
    
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('chicken');
    
    useEffect(() => {
        getRecipes();
    }, [query]);
    
    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json();
        setRecipes(data.hits);
    };
    
    const updatesearch = e => {
        setSearch(e.target.value);
    };
    
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    }
    
    return(
    
        <div className="App">
        
            <form onSubmit={getSearch} className="search-form"> 
                <input onChange={updatesearch} className="searchbar" type="text" value={search}/>
                <button className="btn" type="submit"> Search </button>
            </form> 
        
            <div className="recipes"> 
                {recipes.map(recipe => (
                    <RecipeComponent 
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        ingredients={recipe.recipe.ingredients}
                        image={recipe.recipe.image}
                    /> 
                ))}
            </div>
        
        </div>
    
    
    );
}



export default App;

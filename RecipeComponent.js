import React from 'react'
import style from './recipe.module.css'




const Recipe = ({title, ingredients, image}) => {
    return(
    
        <div className={style.recipe}> 
        
            <h1> {title} </h1>
        
            <img className={style.poza} src={image} alt="poza" />
        
            <ol className={style.text}>
                {ingredients.map (ingrd => (
                    <li> {ingrd.text} </li> 
            ))}
            </ol>

        </div>
    );
}

export default Recipe;
import React from 'react';
import './Recipe.css';

const Recipe = ({title, calories, recipeUrl, image}) => {
    return (
        <div className="recipe-container">
            <div className="recipe-card">
                <div>
                    <img src={image} alt="" className="recipe-image" />
                </div>
                <div className="recipe-description">
                    <h2>{title}</h2>
                    <p>{calories} cal / per serving</p>
                    <a href={recipeUrl}>Recipe</a>
                </div>
            </div>
        </div>
    )
}

export default Recipe

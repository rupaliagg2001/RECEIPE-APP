import React from "react";

const Recipe = ({ recipe }) => {
    return (
        <div className="card">
            <div className="card__image">
                <img src="https://picsum.photos/200" alt={recipe.name} />
            </div>
            <div className="card__content">
                <h2 className="card__title">{recipe.name}</h2>
                <span className="card__name">{recipe.createdBy}</span>
                <span className="card__date">{recipe.createdAt}</span>
            </div>
        </div>
    );
};

export default Recipe;

import React, { useState } from 'react';
import FavoriteButton from './FavoriteButton';
import DeleteButton from './DeleteButton';

const RecipeCard = ({ recipe, onDelete }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const { label, image, ingredientLines, ingredients, dishType } = recipe;

  return (
    <div className='recipe-card'>
        <img src={image} alt={label} />
        <div className='recipe-info'>
            <h3>{label}</h3>
            <p>{dishType}</p>
        </div>
        <div>
          <FavoriteButton onToggleFavorite={handleToggleFavorite} isFavorite={isFavorite} />
          <DeleteButton onDelete={() => onDelete(recipe.id)} />
        </div>
    </div>
  );
};

export default RecipeCard;
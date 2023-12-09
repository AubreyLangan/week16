import React from 'react'

const FavoriteButton = ({ onToggleFavorite, isFavorite }) => {
  return (
    <button onClick={onToggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;
import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import CategoryList from './CategoryList';
import RecipeCard from './RecipeCard';
import DeleteButton from './DeleteButton';
import FavoriteButton from './FavoriteButton';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            const appID = '3fc4ca7d';
            const appKey = '57e290bbed61ad8c5566ae9eb6f94b41';
            const apiUrl = 'https://api.edamam.com/api/recipes/v2';

            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'app_id': appID,
                        'app_key': appKey,
                    },
                    body: JSON.stringify({
                        q: 'chicken',
                        app_id: appID,
                        app_key: appKey,
                    }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log('API Response:', data);
                setRecipes(data.results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    if (loading) {
        return <p>Loading recipes...</p>
    }

    if (!Array.isArray(recipes)) {
        return <p>No recipes available.</p>
    }

    if (error) {
        return <p>Error fetching recipes: {error.message}</p>
    }

    const handleDeleteRecipe = async (recipeId) => {
        try {
            await fetch(`/api/recipes/${recipeId}`, {
                method: 'DELETE',
            });

            fetchRecipes();
        } catch (error) {
            console.error('Error deleting recipe:', error)
        }
    };

    return (
        <div>
            {recipes.map(recipe => (
                <Card key={recipe.recipe.uri} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={recipe.recipe.img} alt={recipe.recipe.label} />
                    <Card.Body>
                        <Card.Title>{recipe.recipe.label}</Card.Title>
                        <Card.Text>{recipe.recipe.dishType}</Card.Text>
                        <FavoriteButton onToggleFavorite={handleToggleFavorite} isFavorite={isFavorite} />
                        <DeleteButton onDelete={() => handleDeleteRecipe(recipe.recipe.uri)} />
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default RecipeList;
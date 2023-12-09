import React from 'react'
import IngredientList from './IngredientList';
import Rating from './Rating';
import StepList from './StepList';
import UserComments from './UserComments';

const RecipeDetail = ({ recipe }) => {

    if (!recipe) {
        return <div>No recipe available</div>;
    }
    const { title = 'Default Title', description, rating, ingredients, instructions, image, steps, comments } = recipe;

    const sampleRecipe = {
        title: 'Spaghetti Bolognese',
        description: 'A classic Italian dish with a rich and savory meat sauce.',
        ingredients: [
            '1 lb of ground beef',
            '1 onion, finely chopped',
            '2 cloves garlic, minced',
            '1 carrot, grated',
            '1 celery stalk, finely chopped',
            '1 can (28 oz) crushed tomatoes',
            '1/2 cup red wine (optional)',
            '1 teaspoon dried oregano',
            '1 teaspoon dried basil',
            'Salt and pepper to taste',
            '1/4 cup fresh parsley, chopped',
            'Parmesan cheese for serving',
            'Cooked spaghetti for serving',
        ],
        instructions: [
            'In a large skillet, brown the ground beef over medium heat.',
            'Add the chopped onion, minced garlic, grated carrot, and chopped celery. Cook until vegetables are softened.',
            'Stir in the crushed tomatoes, red wine (if using), dried oregano, dried basil, salt and pepper.',
            'Simmer the sauce for at least 30 minutes to allow the flavors to meld.',
            'Before serving, stir in fresh parsley.',
            'Serve the Bolognese sauce over cooked spaghetti and garnish the Parmesan cheese.',
        ],
        image: 'spaghetti bolognese.jpeg',
    }

  return (
    <div>
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p>Description: {description}</p>
        <Rating rating={rating} />
        <h3>Ingredients:</h3>
        <ul>
            {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
            ))}
        </ul>
        <h3>Instructions:</h3>
        <ol>
            {instructions.map((instruction, index) => (
                <li key={index}>{instructions}</li>
            ))}
        </ol>
        <StepList steps={steps} />
        <UserComments comments={comments} />
    </div>
  );
};

export default RecipeDetail;
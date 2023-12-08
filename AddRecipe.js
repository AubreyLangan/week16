import React, { useState } from 'react'
import DeleteButton from './DeleteButton';

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: '',
    image: '',
  });

  const [isRecipeDeleted, setRecipeDeleted] = useState(false);
  const [isEditing, setEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Recipe submitted:', recipe);
    if (isEditing) {
      console.log('Recipe updated:', recipe);
      setEditing(false);
    }
  };

  const handleDelete = () => {
    console.log('Recipe deleted:', recipe);
    setRecipe({
      title:'',
      description:'',
      ingredients:'',
      instructions:'',
      image:'',
    });

    setRecipeDeleted(true);
  };

  const handleEdit = () => {
    console.log('Edit button clicked');
    setEditing(true);
  };

  const resetDeleteMessage = () => {
    setRecipeDeleted(false);
  };

  return (
    <div>
      <h2>Add New Recipes</h2>
      {isRecipeDeleted && (
        <div style={{ color: 'green' }}>Recipe has been deleted!</div>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type='text' name='title' value={recipe.title} onChange={handleInputChange} />  
        </label>
        <br />
        <label>
          Description:
          <textarea name='description' value={recipe.description} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Ingredients:
          <textarea name='ingredients' value={recipe.ingredients} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Instructions:
          <textarea name='instructions' value={recipe.instructions} onChange={handleInputChange}/>
        </label>
        <br />
        <label>
          Image URL:
          <input type='text' name='image' value={recipe.image} onChange={handleInputChange} />
        </label>
        <br />
        <button type='submit'>Add Recipe</button>
      </form>

      {isRecipeDeleted || recipe.title ? (
        <div>
          <DeleteButton onDelete={handleDelete} />
          <button onClick={resetDeleteMessage}>Reset Delete Message</button>
          <button onClick={handleEdit}>Edit Recipe</button>
        </div>
      ) : null}
    </div>
  );
};

export default AddRecipe;
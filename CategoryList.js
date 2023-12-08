import React, { useEffect } from 'react'

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const prefefinedCategories = ['Breakfast', 'Lunch', 'Dinner', 'Dessert'];

        setCategories(prefefinedCategories);
    }, []);

  return (
    <div>
        <h2>Recipe Categories</h2>
        <ul>
            {categories.map((category, index) => (
                <li key={index}>{category}</li>
            ))}
        </ul>
    </div>
  );
};

export default CategoryList;
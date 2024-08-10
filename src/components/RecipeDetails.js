import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import nutrients from "../Images/nutrients.png";

export default function RecipeDetails() {
  const { uri } = useParams();
  const [recipe, setRecipe] = useState(null);
  const appId = 'cb9a6a22';
  const appKey = '607d5b31a3c0de4c5ae27468259004a7';

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const encodedURI = encodeURIComponent(uri);
        const response = await fetch(`https://api.edamam.com/api/recipes/v2/by-uri?type=public&app_id=${appId}&app_key=${appKey}&uri=${encodedURI}`);
        
        const data = await response.json();
        console.log(data)
        if (data.hits && data.hits.length > 0) {
          setRecipe(data.hits[0].recipe); // Adjust according to the response structure
        }
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipeDetails();
  }, [uri]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="recipe-details " style={{backgroundColor: 'grey' , color:"white"}}>
      <img src={recipe.image} alt="Recipe" />
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-4">
             <h4>{recipe.label}</h4>
             <ul>
                {recipe.ingredientLines.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
                 ))}
              </ul>
          </div>
          <div className="col-md-4">
             <img src={nutrients} alt="nutrient"/>
          </div>
          </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import veganbg from "./images2/vegan.jpg";
 import Cards2 from "./Cards2";

export default function VeganApi() {
  const [getFullData, setgetFullData] = useState([]);

  const backgroundStyle = {
    backgroundImage: `url(${veganbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    height: "600px",
    width: "100%",
    position: "relative",
    opacity: "0.7",
  };

  useEffect(() => {
    const getDeliciousFood = async () => {
      try {
        const res = await axios.get(
          //   "https://api.spoonacular.com/food/menuItems/search?query=pizza&number=2&apiKey=029dc156637144279b5ab3cbecc02e96"
          // "https://api.spoonacular.com/recipes/complexSearch?query=Pasta&apiKey=029dc156637144279b5ab3cbecc02e96"
          "https://api.edamam.com/api/recipes/v2?type=public&q=vegan&app_id=cb9a6a22&app_key=607d5b31a3c0de4c5ae27468259004a7"
        );

        console.log(res.data.hits);
        setgetFullData(res.data.hits);
      } catch (error) {
        console.error("Error fetching the articles:", error);
      }
    };
    getDeliciousFood();
  }, []);

  return (
    <>
      <div style={backgroundStyle}></div>
      <div className="container">
        <div className="row">
          {getFullData.map((data, index) => (
            <Cards2 
                key = {index}
                image={data.recipe.image}
                label={data.recipe.label}
                uri={data.recipe.uri}
                cousinetype={data.recipe.cuisineType}
            />
          ))}
        </div>
      </div>
    </>
  );
}

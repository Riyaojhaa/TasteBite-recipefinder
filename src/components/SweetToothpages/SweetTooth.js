import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
 import "../Allfoodpages/Allfood.css";
import Cards1 from '../Allfoodpages/Cards1';


export default function SweetTooth() {

  const [Recipeslist, setRecipeslist] = useState([]);

  useEffect(() => {
    const getDeliciousFood = async () => {
      try {
        const res = await axios.get(
          "https://api.edamam.com/api/recipes/v2?type=public&q=buiscuits&app_id=cb9a6a22&app_key=607d5b31a3c0de4c5ae27468259004a7"
        );
        console.log(res.data.hits);
        setRecipeslist(res.data.hits);
      } catch (error) {
        console.error("Error fetching the articles:", error);
      }
    };
    getDeliciousFood();
  }, []);

  return (
    <div className=" container">
      <div>
        <h4>Sweet Tooth </h4>
      </div>
      <div >
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
          {Recipeslist.slice(0, 3).map((item, index) => (
            <Cards1
              key={index}
              image={item.recipe.image}
              label={item.recipe.label}
              uri={item.recipe.uri}
              cousinetype = {item.recipe.cuisineType}  
            />
          ))}
        </div>
        <div className="d-grid gap-2 mt-3">
          <NavLink to="/SweetTooth" className="btn btn-dark w-100">
            <button className="btn viewrecipe btn-dark w-100">View more</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import pizza from "./images2/pizza.jpg";
import pasta from "./images2/pasta2.jpg";
import vegan from "./images2/vegan.jpg";
import smoothies from "./images2/smoothies2.jpg";
import breakfast from "./images2/breakfast.jpg";
import Desserts from "./images2/desserts.jpg";
import "./PopularCat.css";


export default function Allfood() {
    

  return (
    <div className="container">
      <div>
        <h4>Popular Categories</h4>
      </div>
      <div>
        <div className="row row-cols-1 row-cols-md-6 g-4 ">
          <div className="col-lg-2 text-center">
          <NavLink to="/PopularCategories/Pizza">
            <img
              src={pizza}
              className="rounded-circle"
              width="140"
              height="140"
              alt="pizzaimg"
              
            />
            </NavLink>
            <h6 style = {{color:"grey"}}>Pizza</h6>
          </div>
          <div className="col-lg-2 text-center">
          <NavLink to="/PopularCategories/Pasta">
            <img
              src={pasta}
              className="rounded-circle"
              width="140"
              height="140"
              alt="pastaimg"
              
            />
            </NavLink>
            <h6 style = {{color:"grey"}}>Pasta</h6>
          </div>
          <div className="col-lg-2 text-center">
          <NavLink to="/PopularCategories/Vegan">
            <img
              src={vegan}
              className="rounded-circle"
              width="140"
              height="140"
              alt="pastaimg"
              
            />
            </NavLink>
            <h6 style = {{color:"grey"}}>Vegan</h6>
          </div>
          <div className="col-lg-2 text-center">
          <NavLink to="/PopularCategories/Desserts">
            <img
              src={Desserts}
              className="rounded-circle"
              width="140"
              height="140"
              alt="pastaimg"
              
            />
            </NavLink>
            <h6 style = {{color:"grey"}}>Desserts</h6>
          </div>
          <div className="col-lg-2 text-center">
          <NavLink to="/PopularCategories/Smoothies">
            <img
              src={smoothies}
              className="rounded-circle"
              width="140"
              height="140"
              alt="pastaimg"
              
            />
            </NavLink>
            <h6 style = {{color:"grey"}}>Smoothies</h6>
          </div>
          <div className="col-lg-2 text-center">
          <NavLink to="/PopularCategories/Breakfast">
            <img
              src={breakfast}
              className="rounded-circle"
              width="140"
              height="140"
              alt="pastaimg"
              
            />
            </NavLink>
            <h6 style = {{color:"grey"}}>Breakfast</h6>
          </div>
        </div>
        <div className="d-grid gap-2 mt-3">
          <NavLink to="/PopularCategories" className="btn btn-dark w-100">
            <button className="btn viewrecipe btn-dark w-100">View more</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Allfood.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function Cards1({ image, label, uri, cousinetype }) {
  const [value, setValue] = useState(2);

  return (
    <div className="col">
      <div className="card">
        <img src={image} className="card-img-top" alt="Foodimg" />
        <div className="card-body">
          <h5 className="card-title">{label}</h5>
          <Box sx={{ "& > legend": { mt: 2 } }}>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
          <h6 className="cousine">Cousine Type: {cousinetype}</h6>
        </div>
        <NavLink
          to={`/recipe/${encodeURIComponent(uri)}`}
          className="  btn btn-success w-100 mt-3"
        >
          View Recipe
        </NavLink>
      </div>
    </div>
  );
}

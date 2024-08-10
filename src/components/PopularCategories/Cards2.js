import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./PopularCat.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function Cards2({ image, label, uri, cousinetype }) {
  const [value, setValue] = useState(2);

  return (
   
      <div className="col-md-6">
              <div className="card mb-3 mt-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src={image}
                      className="img-fluid rounded-start"
                      alt="Pizzaimg"
                    />
                  </div>
                  <div className="col-md-9">
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
                      <br />
                      <p className="card-text">
                        <h6 className="cousine">
                          Cuisine Type: {cousinetype}
                        </h6>
                      </p>
                      <div className="d-flex justify-content-end">
                        <NavLink
                          to={`/recipe/${encodeURIComponent(uri)}`}
                          className="btn  btn-success w-50 mt-3 "
                          >
                           View Recipe
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

  );
}

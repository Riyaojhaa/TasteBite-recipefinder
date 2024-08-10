import React, { useEffect, useState } from "react";
// import logo from "../Images/logo1.png";
import { NavLink } from "react-router-dom";
// import Allfood from "./Allfoodpages/Allfood";

export default function Navbar() {

  const [IsDarkMode , setIsDarkMode] = useState(false)

  useEffect (() => {
      if (IsDarkMode) {
        document.body.style.backgroundColor = "black"
      } else {
        document.body.style.backgroundColor = "white"
      }
  },[IsDarkMode])

  const handleModes = () => {
    setIsDarkMode(!IsDarkMode)
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-transparent p-2">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            {/* <img id="logo" alt="LOGO" width="30" height="24" /> */}
            <h3 className="logo mt-3">TasteBite</h3>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#my-navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <div className="mx-auto">
              <ul className="navbar-nav mb-2 mb-lg-0 text-center">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Recipes
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink className="dropdown-item" to="/Recipes/VegetarianRecipes">
                        Vegetarian
                      </NavLink>
                    </li>
                    <li>
                    <NavLink className="dropdown-item" to="/Recipes/NonVegetarianRecipes">
                        Non-Vegetarian
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#jokes">
                    Jokes
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-flex">
            <div onClick={handleModes}>
               {IsDarkMode ? <i className="fas fa-toggle-on"></i> : <i className="fas fa-toggle-off"></i> }
            </div>
            <button
                type="button"
                className="btn btn-light mx-3 px-4"
                // data-bs-toggle="button"
                  autoComplete="off"
                  data-bs-toggle="modal"
                  data-bs-target="#signup-modal"
              >
                SignUp
              </button>
              <button
                type="button"
                className="btn btn-dark me-md-2 px-4"
               data-bs-toggle="modal"
                data-bs-target="#login-modal"
                autoComplete="off"
              >             
                  LogIn                
              </button>             
            </div>
          </div>
          
        </div>
      </nav>

      {/* sign up modal here */}

      <div
            class="modal fade"
            id="signup-modal"
            tabindex="-1"
            aria-labelledby="signup-heading" 
            aria-hidden="true"
            role="dialog"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="signup-heading">
                    Sign Up with TasteBit
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                    <form id="signup-form" class="form" role="form">
                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fas fa-user"></i>
                                </span>
                            </div>
                            <input type="text" class="form-control" name="full_name" placeholder="Full Name" maxlength="30" required />
                        </div>

                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fas fa-phone-alt"></i>
                                </span>
                            </div>
                            <input type="text" class="form-control" name="phone" placeholder="Phone Number" maxlength="10" minlength="10" required />
                        </div>

                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fas fa-envelope"></i>
                                </span>
                            </div>
                            <input type="email" class="form-control" name="email" placeholder="Email" required />
                        </div>

                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fas fa-lock"></i>
                                </span>
                            </div>
                            <input type="password" class="form-control" name="password" placeholder="Password" minlength="6" required />
                        </div>

                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fas fa-university"></i>
                                </span>
                            </div>
                            <input type="text" class="form-control" name="college_name" placeholder="College Name" maxlength="150" required/>
                        </div>

                        <div class="form-group">
                            <span>I'm a</span>
                            <input type="radio" class="ml-3" id="gender-male" name="gender" value="male" /> Male
                            <label for="gender-male">
                            </label>
                            <input type="radio" class="ml-3" id="gender-female" name="gender" value="female" />
                            <label for="gender-female">
                                Female
                            </label>
                        </div>

                        <div class="form-group">
                            <button type="submit" class="btn btn-block btn-primary">Create Account</button>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                <span>Already have an account?
                        <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#login-modal">Login</a>
                </span>
                </div>
              </div>
            </div>
      </div>

      {/* login modal here */}

      <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="login-heading" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="login-heading">Login with Tastebite</h5>
                    <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <div class="modal-body">
                    <form id="login-form" class="form" role="form">
                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fas fa-user"></i>
                                </span>
                            </div>
                            <input type="email" class="form-control" name="email" placeholder="Email" required />
                        </div>

                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fas fa-lock"></i>
                                </span>
                            </div>
                            <input type="password" class="form-control" name="password" placeholder="Password" minlength="6" required />
                        </div>

                        <div class="form-group w-full">
                            <button type="submit" class="btn btn-block btn-primary loginbtn">Login</button>
                        </div>
                    </form>
                </div>

                <div class="modal-footer">
                    <span>
                        <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#signup-modal">Click here</a>
                        to register a new account
                    </span>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

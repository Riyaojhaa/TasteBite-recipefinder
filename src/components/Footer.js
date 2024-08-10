import React from "react";
import Footerimg from "../Images/footerbg.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const backgroundStyle = {
    backgroundImage: `url(${Footerimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", 
    backgroundRepeat: "no-repeat", 
    width: "100%",
   
  };
  return (
    <>
      <footer class="footer text-white py-4" style={backgroundStyle}>
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <NavLink className="navbar-brand mb-2" to="/">
                 <h3 className="logo" style = {{color:"white"}}>TasteBite</h3>
              </NavLink>
              <p>
                Welcome to Sweet Tooth, your number one source for delicious and
                healthy recipes. We're dedicated to providing you the very best
                recipes, with a focus on simplicity, taste, and nutritional
                value.
              </p>
            </div>
            <div class="col-md-5">
              <h5>Contact Us</h5>
              <ul class="list-unstyled">
                <li>
                  <strong>Email:</strong> contact@TasteBite.com
                </li>
                <li>
                  <strong>Phone:</strong> +123 456 7890
                </li>
                <li>
                  <strong>Address:</strong> 123 Food Street, 
                  Foodland
                </li>
              </ul>
            </div>
            <div class="col-md-2 mt-5">
              <h5>Follow Us</h5>
              <ul class="list-unstyled social_media mt-2 ">
              <a href="https://www.linkedin.com/in/riya-ojha-28a6a2287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/Riyaojhaa"><i class="fa-brands fa-github"></i></a>
                <a href="#"><i class="fa-brands fa-square-twitter"></i></a> 
                <a href="https://www.instagram.com/_riyaaaa70_?igsh=MWQzOWd4am1lcm8xZg=="><i class="fa-brands fa-square-instagram"></i></a>
              </ul>
            </div>
          </div>
          <hr />
          <div class="text-center">
            <p>&copy; 2024 TasteBite. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

import React from "react";
import bg1 from "./Images4/bg1.jpg";
import bg2 from "./Images4/bg2.jpg";
import bg3 from "./Images4/bg3.jpg";
import ApiCall3 from "./ApiCall3";

export default function Setbtn3() {
  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    height: "550px",
    width: "100%",
    position: "relative",
    opacity: "0.8",
  };

  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="mx-auto">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner" style={backgroundStyle}>
                <div className="carousel-item active" style={backgroundStyle}>
                  <img src={bg1} className="d-block w-100" alt="Foodimg" style={{height: "100%", objectFit: "cover"}}/>
                  <div className="carousel-caption d-none d-md-block">
                    <h2>First slide label</h2>
                    <p>
                      Some representative placeholder content for the first
                      slide.Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item" style={backgroundStyle}>
                  <img src={bg2} className="d-block w-100" alt="Foodimg" style={{height: "100%", objectFit: "cover"}}/>
                  <div className="carousel-caption d-none d-md-block">
                    <h2>Second slide label</h2>
                    <p>
                      Some representative placeholder content for the second
                      slide.Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item" style={backgroundStyle}>
                  <img src={bg3} className="d-block w-100" alt="Foodimg" style={{height: "100%", objectFit: "cover"}}/>
                  <div className="carousel-caption d-none d-md-block">
                    <h2>Third slide label</h2>
                    <p>
                      Some representative placeholder content for the third
                      slide.Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className=" mx-auto">
                <div className="row gy-4">
                  <ApiCall3 />
                </div>
          </div>
        </div>
      </div>
    </>
  );
}

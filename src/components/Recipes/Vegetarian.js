import React, { useEffect, useState, useMemo } from "react";
import veg1 from "./Images3/veg1.jpg";
import veg2 from "./Images3/veg2.jpg";
import veg3 from "./Images3/veg3.jpg";
import axios from "axios";
import Cards1 from '../Allfoodpages/Cards1'


export default function Vegetarian() {
    const backgroundStyle = {
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "550px",
        width: "100%",
        position: "relative",
        opacity: "0.8",
      };
    

    const [getvegrecipe , setgetvegrecipe] = useState([])

    const queries = useMemo(() => ['vegburger' , 'veg'], []);
    const appId = 'cb9a6a22';
    const appKey = '607d5b31a3c0de4c5ae27468259004a7';


    useEffect(() => {
        const getDeliciousFood = async () => {
          try {
            const requests = queries.map(query =>
              axios.get(
                `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`
            )
            );
            const responses = await axios.all(requests);
            const allData = responses.flatMap(response => response.data.hits);
            console.log(allData); 
            setgetvegrecipe(allData);
          } catch (error) {
            console.error("Error fetching the recipes:", error);
          }
        };
        getDeliciousFood();
      }, [queries]);


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
                  <img src={veg1} className="d-block w-100" alt="Foodimg" style={{height: "100%", objectFit: "cover"}}/>
                  <div className="carousel-caption d-none d-md-block">
                    <h2>Your Tasty Food here</h2>
                    <p>
                    Savor the fresh and zesty flavors of our Tangy Tomato Sabzi, a simple yet delicious dish made with ripe tomatoes, onions, and a blend of aromatic spices. Perfect as a side dish or paired with roti or rice for a complete meal.
                    </p>
                  </div>
                </div>
                <div className="carousel-item" style={backgroundStyle}>
                  <img src={veg2} className="d-block w-100" alt="Foodimg" style={{height: "100%", objectFit: "cover"}}/>
                  <div className="carousel-caption d-none d-md-block">
                    <h2>Comforting Aloo Matar</h2>
                    <p>
                    Indulge in the comforting flavors of Aloo Matar, a traditional Indian dish made with tender potatoes and green peas cooked in a rich, spiced gravy. This hearty dish is perfect for any meal and is best enjoyed with rice or bread.
                    </p>
                  </div>
                </div>
                <div className="carousel-item" style={backgroundStyle}>
                  <img src={veg3} className="d-block w-100" alt="Foodimg" style={{height: "100%", objectFit: "cover"}}/>
                  <div className="carousel-caption d-none d-md-block">
                    <h2>Spiced Bhindi Masala</h2>
                    <p>
                    Enjoy the classic taste of Spiced Bhindi Masala, where fresh okra is sautéed with onions, tomatoes, and a medley of spices. This dish is a favorite in many households and pairs wonderfully with chapati or paratha.
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
      <div className="mt-3 p-4">
      <div>
        <h4>Vegetarian</h4>
      </div>
      <div>
        <div className="row g-4 mt-4">
          {getvegrecipe.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <Cards1
                image={item.recipe.image}
                label={item.recipe.label}
                uri={item.recipe.uri}
                cousinetype={item.recipe.cuisineType}
              />
            </div>
          ))}
        </div>
      </div>
    </div>

    </>
  );
}

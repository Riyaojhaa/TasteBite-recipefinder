import React, { useEffect, useState , useMemo} from 'react';
import axios from 'axios';
import Cards1 from '../Allfoodpages/Cards1';

export default function ApiCall3() {

  const [getFullData, setgetFullData] = useState([]);
  const queries = useMemo(() => [ 'butterscotch' , 'strawberryMilkshakes' , 'donuts' , 'buiscuits' , 'cookies' , 'icecreams' ,'chocolates' , 'shakes'], []);
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
        setgetFullData(allData);
      } catch (error) {
        console.error("Error fetching the recipes:", error);
      }
    };
    getDeliciousFood();
  }, [queries]);

  return (
    <>
   <div className="mt-4">
      <div>
        <h4>Sweet Tooth</h4>
      </div>
      <div>
        <div className="row g-4 mt-1">
          {getFullData.map((item, index) => (
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

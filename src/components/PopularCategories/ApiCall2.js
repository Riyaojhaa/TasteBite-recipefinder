import React, { useEffect, useState , useMemo} from 'react';
import axios from 'axios';
import Cards2 from './Cards2';

export default function ApiCall2() {
  const [getFullData, setgetFullData] = useState([]);
  const queries = useMemo(() => ['desserts', 'pizza' ,'icecream', 'smoothie', 'breakfast'], []);
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
      <div className="container mt-5">
        <div>
          <h4>Popular Categories</h4>
        </div>
        <div>
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
      </div>
    </>
  );
}

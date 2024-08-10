import React, { useEffect, useState } from 'react';
import './Jokes.css'
import axios from 'axios';

const Jokes = () => {
  const [joke, setJoke] = useState('');
  const apiKey = '029dc156637144279b5ab3cbecc02e96';

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/food/jokes/random?apiKey=${apiKey}`
        );
        setJoke(response.data.text);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching the joke:', error);
      }
    };
    fetchJoke();
  }, []);

  return (
    <div className="joke-container mt-4 ">
      <div className='joke-inner-container'>
        <h4 className='foodjokeheading'>Food Joke of the Day</h4>
        <p className='foodjokepara'>{joke}</p>
      </div>
    </div>
  );
};

export default Jokes;

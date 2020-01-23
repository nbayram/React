import React, { useState, useEffect } from 'react';
import Joke from './Joke';

export default function RandomJoke() {

  const [joke, setJoke] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  const getJoke = () => {
    setLoading(false);
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(data => {
        setJoke(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setError(true);
        setLoading(false);
      })
  }

  useEffect(() => {
    getJoke();
  }, []);

  if (isLoading) return <h2>Loading...</h2>
  if (hasError) return <h2>Something went wrong...</h2>

  return (
    <div>
      <Joke joke={joke} />
    </div>
  )
}

import React, { useState, useEffect } from 'react';
import DogPhoto from './DogPhoto';
import Button from './Button';

export default function DogGallery() {

  const [dogPhotos, setDogPhotos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);


  const getDogPhoto = () => {
    setLoading(true);
    fetch('https://dog.ceo/api/breeds/image/random/1')
      .then(response => response.json())
      .then(data => {
        setDogPhotos(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setError(true);
        setLoading(false);
      })
  }

  useEffect(() => {
    getDogPhoto();
  }, []);

  if (isLoading) return <h2>Loading...</h2>
  if (hasError) return <h2>Something went wrong...</h2>

  return (
    <div>
      <Button getDogPhoto={getDogPhoto} />
      {
        dogPhotos.message.map((dogPhoto, index) => <DogPhoto dogPhoto={dogPhoto} key={index} />)
      }
    </div>
  )
}

import React from 'react';
import Hobbies from './Hobbies';

export default function HobbyList() {
  // Put the hobbies variable into the <HobbyList> component as state.
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing"
  ];

  // In the return statement of the <HobbyList> use the map() function to return an instance of <Hobby>
  return hobbies.map((hobby, index) => (
    <Hobbies key={index} hobby={hobby} />
  ));
}


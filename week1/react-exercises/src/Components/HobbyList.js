import React from 'react';

export function HobbyList() {
  const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];
  return (
    <ul>
      <h1>Some extreme sports to get the blood pumping!</h1>
      {
        hobbies.map(hobby => {
          return (
            <li>{hobby}</li>
          )
        })
      }
    </ul >
  )
}

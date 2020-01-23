import React from 'react';

export default function Button({ changeUser }) {
  return (
    <div>
      <button onClick={changeUser}>
        Get a friend!
        </button>
    </div>
  )
}

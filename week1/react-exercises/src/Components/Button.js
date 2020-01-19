import React from 'react';

// Inside <Button> create a <button> with the text Add 1! and onClick attribute
export default function Button({ setCount }) {
  return (
    <button
      onClick={() => {
        setCount(lastValue => lastValue + 1);
      }}
    >
      Add 1!
    </button>
  );
}
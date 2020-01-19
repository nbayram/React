import React, { useState } from "react";
import Button from './Button';
import Count from './Count';

export default function Counter() {
  const [count, setCount] = useState(0);
  const Feedback = () => {
    return <p>{count > 10 ? "It's higher than 10!" : "Keep counting..."}</p>;
  };
  return (
    <div className='counter'>
      <Count count={count} />
      <Feedback />
      <Button setCount={setCount} count={count} />
    </div>
  );
}




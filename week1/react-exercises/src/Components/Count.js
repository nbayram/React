import React from 'react'

// Pass down the count state variable to <Count>, and the setCount to <Button>
export default function Count({ count }) {
  return <span>Count: {count}</span>;
}

import React from 'react'

export default function Button({ getDogPhoto }) {
  return (
    <div>
      <button onClick={getDogPhoto}>Get a dog!</button>
    </div>
  )
}

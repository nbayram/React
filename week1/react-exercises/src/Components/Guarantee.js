import React from 'react'

// Give each component 3 props: an img, title and description
export default function Guarantee({ img, title, description }) {
  return (
    <div className='customerService'>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

import React from 'react';

export default function FriendProfile({ randomUser }) {
  const { name, location, email, phone } = randomUser.results[0];

  return (

    <div>
      <ul>
        <li>The first and last names: {name.title} {name.first} {name.last}</li>
        <li>The address: {location.street.name} {location.street.number}</li>
        <li>Country: {location.country}</li>
        <li>The email address: {email}</li>
        <li>The phone number: {phone}</li>
      </ul>
    </div>
  )
}

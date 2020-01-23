
import React, { useState, useEffect } from 'react';
import FriendProfile from './FriendProfile';
import Button from './Button';

export default function Friend() {
  const [friend, setFriend] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  const getFriend = () => {
    setLoading(true);
    fetch('https://www.randomuser.me/api?results=1')
      .then(response => response.json())
      .then(data => {
        setFriend(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setError(true);
        setLoading(false);
      })
  }

  useEffect(() => {
    getFriend();
  }, []);

  if (isLoading) return <h2>Loading...</h2>
  if (hasError) return <h2>Something went wrong...</h2>

  return (

    <div>

      <FriendProfile randomUser={friend} />
      <Button changeUser={getFriend} />
    </div>
  )
}

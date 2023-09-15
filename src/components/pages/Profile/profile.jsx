import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <img src={picture} alt="Profile" />
      <h2>Profile Name: {name}</h2>
      <p>Email: {email}</p>
    </div>
  );
};

export default Profile;

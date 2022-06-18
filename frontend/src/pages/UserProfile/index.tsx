import React from 'react';
import UserFeed from '../../components/UserFeed';
import UserProfileCard from '../../components/UserProfileCard';


function UserProfile(): JSX.Element {
  return (
    <>
      <UserProfileCard/>
      <UserFeed />
    </>
  );
}

export default UserProfile;
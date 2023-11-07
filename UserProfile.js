import React from 'react';

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <h2>{user.name}'s Profile</h2>
      <div className="user-info">
        <div className="user-info-item">
          <strong>Age:</strong> {user.age}
        </div>
        <div className="user-info-item">
          <strong>Gender:</strong> {user.gender}
        </div>
        <div className="user-info-item">
          <strong>Religion:</strong> {user.religion}
        </div>
        <div className="user-info-item">
          <strong>Profession:</strong> {user.profession}
        </div>
        <div className="user-info-item">
          <strong>Location:</strong> {user.location}
        </div>
        <div className="user-info-item">
          <strong>Interests:</strong> {user.interests.join(', ')}
        </div>
        <div className="user-info-item">
          <strong>About:</strong> {user.about}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

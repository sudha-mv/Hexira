import React from 'react';

function SearchResults({ results }) {
  return (
    <div className="search-results">
      <h2>Potential Matches</h2>
      {results.length === 0 ? (
        <p>No matches found.</p>
      ) : (
        <ul>
          {results.map((user, index) => (
            <li key={index}>
              <div className="user-card">
                <h3>{user.name}</h3>
                <p>Age: {user.age}</p>
                <p>Gender: {user.gender}</p>
                <p>Religion: {user.religion}</p>
                <p>Profession: {user.profession}</p>
                <p>Location: {user.location}</p>
                <p>Interests: {user.interests.join(', ')}</p>
                <p>About: {user.about}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchResults;

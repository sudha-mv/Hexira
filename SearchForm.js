import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [searchCriteria, setSearchCriteria] = useState({
    minAge: '',
    maxAge: '',
    gender: '',
    religion: '',
    profession: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({
      ...searchCriteria,
      [name]: value,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchCriteria);
  };

  return (
    <div className="search-form">
      <h2>Search for Potential Matches</h2>
      <form onSubmit={handleSearch}>
        <label>
          Min Age:
          <input
            type="number"
            name="minAge"
            value={searchCriteria.minAge}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Max Age:
          <input
            type="number"
            name="maxAge"
            value={searchCriteria.maxAge}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Gender:
          <input
            type="text"
            name="gender"
            value={searchCriteria.gender}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Religion:
          <input
            type="text"
            name="religion"
            value={searchCriteria.religion}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Profession:
          <input
            type="text"
            name="profession"
            value={searchCriteria.profession}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;

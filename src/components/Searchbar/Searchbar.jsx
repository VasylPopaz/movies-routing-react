import React, { useState } from 'react';
import { SearchButton, SearchForm, SearchInput } from './Searchbar.styled';

const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSearch(query);
    setQuery('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <label>
        <SearchInput
          type="text"
          value={query}
          onChange={handleChange}
          required
        />
      </label>
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  );
};

export default Searchbar;

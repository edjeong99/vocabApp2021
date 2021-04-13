import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const callSearchFunction = (e) => {
    console.log('query = ', searchValue);
    e.preventDefault();
    search(searchValue);
    setSearchValue('');
  };

  return (
    <Form>
      <FormControl
        type='text'
        placeholder='Search'
        className='mr-sm-2'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button variant='outline-primary' onClick={callSearchFunction}>
        Search
      </Button>
    </Form>
  );
  return (
    <form
    // className={classes.search}
    >
      <input
        // className={classes.searchInputFile}
        value={searchValue}
        onChange={handleSearchInputChange}
        type='text'
      />
      <div
        onClick={callSearchFunction}
        type='submit'
        // className={classes.searchIcon}
      >
        {/* <SearchIcon /> */}search
      </div>
    </form>
  );
};

export default Search;

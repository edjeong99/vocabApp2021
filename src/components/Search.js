import React, { useState } from 'react';

// const useStyles = makeStyles((theme) => ({
//   search: {
//     flexGrow: 3,
//     display: 'flex',
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     alignContent: 'center',
//   },
//   searchInputFile: {
//     paddingRight: 24, // keep right padding when drawer closed

//     maxHeight: '30px',
//   },
//   searchIcon: {
//     marginLeft: '10px',
//   },
// }));

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    search(searchValue);
    setSearchValue('');
  };

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

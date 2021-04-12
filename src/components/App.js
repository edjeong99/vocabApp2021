import React, { useState, useEffect } from 'react';

import Header from './Header';

import Search from './Search';
import SearchResult from './SearchResult';
import '../css/App.css';
import * as Constants from '../util/Constants';

function App() {
  // searchResultList is result of a user search.  It has list of stock symbols that match search
  const [searchResultList, setSearchResultList] = useState(null);

  const search = (searchValue) => {
    console.log(
      'Search being w/ ' +
        Constants.WEBSTER_API_URL +
        searchValue +
        Constants.WEBSTER_TOKEN
    );
    fetch(Constants.WEBSTER_API_URL + searchValue + Constants.WEBSTER_TOKEN)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse) {
          console.log(jsonResponse);
          setSearchResultList(jsonResponse);
        } else {
          console.log('Search error');
        }
      })
      .catch((e) => console.log('Search error ', e));
  };

  return (
    <div className='App'>
      <Header text='Vocabulary' />
      <div className='searchField'>
        <Search search={search} />
        <SearchResult searchResultList={searchResultList} />
      </div>
    </div>
  );
}

export default App;

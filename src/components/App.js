import React, { useState, useEffect } from 'react';

import Header from './Header';
import DisplayWords from './DisplayWords';
import Search from './Search';
//import SearchResult from './SearchResult';
import '../css/App.css';
import * as Constants from '../util/Constants';

let defList = [];

function App() {
  const [wordList, setWordList] = useState([]);
  // searchResultList is result of a user search.  It has list of stock symbols that match search
  const [searchResultList, setSearchResultList] = useState([]);

  const search = (searchWord) => {
    console.log(
      'Search being w/ ' +
        Constants.WEBSTER_API_URL +
        searchWord +
        Constants.WEBSTER_TOKEN
    );
    fetch(Constants.WEBSTER_API_URL + searchWord + Constants.WEBSTER_TOKEN)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse) {
          //  console.log(jsonResponse);

          setSearchResultList(jsonResponse);
          setWordList((wordList) => [...wordList, searchWord]);
          let newWord = {
            word: `${searchWord}`,
            data: `${jsonResponse}`,
          };
          //console.log(newWord.data);
          defList = [...defList, newWord];
          // console.log('defList = ');
          // console.log(defList);
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
        <DisplayWords wordList={wordList} defList={defList} />
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import DisplayWords from './DisplayWords';
import Search from './Search';
//import SearchResult from './SearchResult';
import '../css/App.css';
import * as Constants from '../util/Constants';

// list of vocabulary and definitions
let defList = [];

function App() {
  //list of vocabulary
  const [wordList, setWordList] = useState([]);

  useEffect(() => {
    let storedContent = JSON.parse(localStorage.getItem('wordList'));
    if (storedContent) {
      console.log('App useEffect put stored content into Wordlist');
      setWordList(storedContent);
    }
  }, []);

  const addWord = (newWord) => {
    console.log('defList = ');
    console.log(defList);
    localStorage.setItem('wordList', JSON.stringify([...wordList, newWord]));
    setWordList((wordList) => [...wordList, newWord]);
  };

  return (
    <Container>
      <Header />
      <Search addWord={addWord} />
      <DisplayWords wordList={wordList} />
    </Container>
  );
}

export default App;

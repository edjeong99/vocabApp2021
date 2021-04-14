import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import DisplayWords from './DisplayWords';
import Search from './Search';
//import SearchResult from './SearchResult';
import '../css/App.css';

function App() {
  //list of vocabulary
  const [wordList, setWordList] = useState([]);

  // below useEffect init data.  checks local storage and use the data
  useEffect(() => {
    console.log('Init useEffect!!!');
    let storedContent = JSON.parse(localStorage.getItem('wordList'));
    if (storedContent) {
      setWordList(storedContent);
    }
  }, []);

  // add new word
  const addWord = (newWord) => {
    console.log('defList = ');

    localStorage.setItem('wordList', JSON.stringify([...wordList, newWord]));
    setWordList((wordList) => [...wordList, newWord]);
  };

  return (
    <Container fluid>
      <Header />
      <Search addWord={addWord} />
      <DisplayWords wordList={wordList} />
    </Container>
  );
}

export default App;

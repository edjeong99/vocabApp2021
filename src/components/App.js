import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import DisplayWords from './DisplayWords';
import Search from './Search';
//import SearchResult from './SearchResult';
import '../css/App.css';

function App() {
  //list of vocabulary
  const [wordObjList, setWordObjList] = useState([]);

  // below useEffect init data.  checks local storage and use the data
  useEffect(() => {
    console.log('Init useEffect!!!');
    let storedContent = JSON.parse(localStorage.getItem('wordObjList'));
    if (storedContent) {
      setWordObjList(storedContent);
    }
  }, []);

  // add new word
  const addWordObj = (newWordObj) => {
    console.log('defList = ');

    localStorage.setItem(
      'wordObjList',
      JSON.stringify([...wordObjList, newWordObj])
    );
    setWordObjList((wordObjList) => [...wordObjList, newWordObj]);
  };

  const deleteWordObj = (deletingWord) => {
    let newWordObjList = wordObjList.filter(
      (wordObj) => wordObj.spell !== deletingWord
    );
    setWordObjList((wordObjList) => newWordObjList);
    localStorage.setItem('wordObjList', JSON.stringify(newWordObjList));
  };

  return (
    <Container fluid>
      <Header />
      <Search addWordObj={addWordObj} />
      <DisplayWords wordObjList={wordObjList} deleteWordObj={deleteWordObj} />
    </Container>
  );
}

export default App;

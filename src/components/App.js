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
  const [memorizedWordObjList, setMemorizedWordObjList] = useState([]);
  const [isDisplayStudy, setIsDisplayStudy] = useState(true);

  // below useEffect init data.  checks local storage and use the data
  useEffect(() => {
    console.log('Init useEffect!!!');
    let storedContent = JSON.parse(localStorage.getItem('wordObjList'));
    if (storedContent) {
      setWordObjList(storedContent);
    }
    let storedMemoContent = JSON.parse(
      localStorage.getItem('memorizedWordObjList')
    );
    if (storedMemoContent) {
      setMemorizedWordObjList(storedMemoContent);
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

  const saveToMemorizedList = (wordObj) => {
    // save the new wordObj to the memorizedList
    localStorage.setItem(
      'memorizedWordObjList',
      JSON.stringify([...memorizedWordObjList, wordObj])
    );
    setMemorizedWordObjList((memorizedWordObjList) => [
      ...memorizedWordObjList,
      wordObj,
    ]);

    // delete the word from wordList
    deleteWordObj(wordObj.spell);
  };

  const changeWordList = () => {
    setIsDisplayStudy((isDisplayStudy) => !isDisplayStudy);
  };

  return (
    <Container fluid>
      <Header isDisplayStudy={isDisplayStudy} changeWordList={changeWordList} />
      <Search addWordObj={addWordObj} />
      <DisplayWords
        wordObjList={wordObjList}
        deleteWordObj={deleteWordObj}
        saveToMemorizedList={saveToMemorizedList}
      />
    </Container>
  );
}

export default App;

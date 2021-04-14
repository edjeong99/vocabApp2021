import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import DisplayWordsList from './DisplayWordsList';
import DisplayWordsCarousel from './DisplayWordsCarousel';
const DisplayWords = ({ wordList }) => {
  return (
    <Tabs defaultActiveKey='profile' id='uncontrolled-tab-example'>
      <Tab eventKey='List' title='List'>
        <DisplayWordsList wordList={wordList} />
      </Tab>
      <Tab eventKey='Carousel' title='Carousel'>
        <DisplayWordsCarousel wordList={wordList} />
      </Tab>
    </Tabs>
  );
};

export default DisplayWords;

import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import DisplayWordsList from './DisplayWordsList';
import DisplayWordsCarousel from './DisplayWordsCarousel';
const DisplayWords = ({ wordList }) => {
  return (
    <Tabs defaultActiveKey='List' id='uncontrolled-tab-example'>
      <Tab className='wordDisplay' eventKey='List' title='List'>
        <DisplayWordsList wordList={wordList} />
      </Tab>
      <Tab className='wordDisplay' eventKey='Carousel' title='Carousel'>
        <DisplayWordsCarousel wordList={wordList} />
      </Tab>
    </Tabs>
  );
};

export default DisplayWords;

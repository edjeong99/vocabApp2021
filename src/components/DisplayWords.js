import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import DisplayWordsList from './DisplayWordsList';
import DisplayWordsCarousel from './DisplayWordsCarousel';
const DisplayWords = ({ wordObjList }) => {
  return (
    <Tabs defaultActiveKey='List' id='uncontrolled-tab-example'>
      <Tab className='wordDisplay' eventKey='List' title='List'>
        <DisplayWordsList wordObjList={wordObjList} />
      </Tab>
      <Tab className='wordDisplay' eventKey='Carousel' title='Carousel'>
        <DisplayWordsCarousel wordObjList={wordObjList} />
      </Tab>
    </Tabs>
  );
};

export default DisplayWords;

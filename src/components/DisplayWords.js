import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import DisplayWordsList from './DisplayWordsList';
import DisplayWordsCarousel from './DisplayWordsCarousel';
const DisplayWords = ({ wordObjList, deleteWordObj, saveToMemorizedList }) => {
  return (
    <Tabs defaultActiveKey='List' id='uncontrolled-tab-example'>
      <Tab className='wordDisplay' eventKey='List' title='List'>
        <DisplayWordsList
          wordObjList={wordObjList}
          deleteWordObj={deleteWordObj}
          saveToMemorizedList={saveToMemorizedList}
        />
      </Tab>
      <Tab className='wordDisplay' eventKey='Carousel' title='Carousel'>
        <DisplayWordsCarousel
          wordObjList={wordObjList}
          deleteWordObj={deleteWordObj}
          saveToMemorizedList={saveToMemorizedList}
        />
      </Tab>
    </Tabs>
  );
};

export default DisplayWords;

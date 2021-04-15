import React from 'react';
import { ListGroup } from 'react-bootstrap';

const DisplayWordsList = ({ wordObjList }) => {
  if (!wordObjList || wordObjList.length < 1) {
    return <div> no words, yet </div>;
  }

  return (
    <ListGroup>
      {wordObjList.map((wordObj, index) => (
        <ListGroup.Item key={`${index}`}>
          <h5 className='inline'>{wordObj.spell}</h5> :{' '}
          {wordObj.data[0].shortdef[0]}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default DisplayWordsList;

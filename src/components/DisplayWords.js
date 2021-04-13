import React from 'react';
import { ListGroup } from 'react-bootstrap';

const DisplayWords = ({ wordList, defList }) => {
  //console.log('DisplayWords ', wordList);
  if (defList[0]) console.log(defList[0].data);
  if (!wordList) {
    return <div> no words, yet </div>;
  }

  return (
    <ListGroup>
      {defList.map((def, index) => (
        <ListGroup.Item key={`${index}`}>
          <h5 className='inline'>{def.word}</h5> : {def.data[0].shortdef[0]}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default DisplayWords;

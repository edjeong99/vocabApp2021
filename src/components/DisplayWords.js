import React from 'react';
import { ListGroup } from 'react-bootstrap';

const DisplayWords = ({ wordList }) => {
  //console.log('DisplayWords ', wordList);

  if (!wordList || wordList.length < 1) {
    return <div> no words, yet </div>;
  }

  return (
    <ListGroup>
      {wordList.map((word, index) => (
        <ListGroup.Item key={`${index}`}>
          <h5 className='inline'>{word.word}</h5> : {word.data[0].shortdef[0]}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default DisplayWords;

import React from 'react';
import { ListGroup } from 'react-bootstrap';

const DisplayWordsList = ({ wordList }) => {
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

export default DisplayWordsList;

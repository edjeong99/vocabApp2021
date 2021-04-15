import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { TiDelete, TiDocumentAdd } from 'react-icons/ti';

const DisplayWordsList = ({ wordObjList, deleteWordObj }) => {
  // console.log(wordObjList);
  const handleSave = () => {};

  if (!wordObjList || wordObjList.length < 1) {
    return <div> no words, yet </div>;
  }

  return (
    <ListGroup>
      {wordObjList.map((wordObj, index) => (
        <ListGroup.Item key={`${index}`}>
          <h5 className='inline'>{wordObj.spell}</h5> :{' '}
          {wordObj.data[0].shortdef[0]}
          <TiDelete size='1.5em' onClick={() => deleteWordObj(wordObj.spell)} />
          <TiDocumentAdd size='1.5em' onClick={() => handleSave()} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default DisplayWordsList;

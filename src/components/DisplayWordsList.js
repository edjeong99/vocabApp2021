import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { TiDelete, TiDocumentAdd } from 'react-icons/ti';

const DisplayWordsList = ({
  wordObjList,
  deleteWordObj,
  saveToMemorizedList,
}) => {
  console.log(wordObjList);
  const handleSave = (i) => {
    saveToMemorizedList(wordObjList[i]);
  };

  if (!wordObjList || wordObjList.length < 1) {
    return <div> no words, yet </div>;
  }

  return (
    <ListGroup>
      {wordObjList.map((wordObj, index) => (
        <ListGroup.Item key={`${index}`}>
          <div className='wordListHeader'>
            <h5 className='wordListHeaderTitle'>{wordObj.spell}</h5>
            <div className='wordListHeaderIcons'>
              <TiDelete
                size='1.5em'
                onClick={() => deleteWordObj(wordObj.spell)}
              />
              <TiDocumentAdd size='1.5em' onClick={() => handleSave(index)} />
            </div>
          </div>
          {wordObj.data[0].shortdef && wordObj.data[0].shortdef[0]}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default DisplayWordsList;

import React from 'react';
import Card from 'react-bootstrap/Card';
import { TiDelete, TiDocumentAdd } from 'react-icons/ti';

const DisplayCarouselCard = ({ wordObj, handleDelete }) => {
  console.log(wordObj);

  let handleSave = () => {
    console.log('Save');
  };
  if (!wordObj) return null;
  return (
    <Card>
      <Card.Body>
        <div className='cardHeader'>
          <Card.Title>{wordObj.spell}</Card.Title>
          <TiDelete size='1.5em' onClick={() => handleDelete()} />
          <TiDocumentAdd size='1.5em' onClick={() => handleSave()} />
        </div>
        <Card.Text>
          {Object.keys(wordObj.data).map((i) => (
            <p>
              <em>{wordObj.data[i].fl}</em>, {wordObj.data[i].shortdef}
            </p>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DisplayCarouselCard;

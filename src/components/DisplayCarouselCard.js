import React from 'react';
import Card from 'react-bootstrap/Card';
import { TiDelete, TiDocumentAdd } from 'react-icons/ti';

const DisplayCarouselCard = ({
  wordObj,
  handleDelete,
  handleSaveToMemorized,
}) => {
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
          <div>
            <TiDelete size='1.5em' onClick={() => handleDelete()} />
            <TiDocumentAdd
              size='1.5em'
              onClick={() => handleSaveToMemorized()}
            />
          </div>
        </div>
        <Card.Text>
          {Object.keys(wordObj.data).map(
            (i) =>
              wordObj.data[i].fl && (
                <p key={i}>
                  <em>{wordObj.data[i].fl}</em>, {wordObj.data[i].shortdef}
                </p>
              )
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DisplayCarouselCard;

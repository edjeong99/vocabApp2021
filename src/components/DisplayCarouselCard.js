import React from 'react';
import Card from 'react-bootstrap/Card';
import { TiDelete, TiDocumentAdd } from 'react-icons/ti';

const DisplayCarouselCard = ({ word }) => {
  console.log(word);

  let handleDelete = () => {
    console.log('Delete');
  };

  let handleSave = () => {
    console.log('Save');
  };
  if (!word) return null;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{word.word}</Card.Title>
        <TiDelete size='1.5em' onClick={() => handleDelete()} />
        <TiDocumentAdd size='1.5em' onClick={() => handleSave()} />

        <Card.Text>
          {Object.keys(word.data).map((i) => (
            <p>
              <em>{word.data[i].fl}</em>, {word.data[i].shortdef}
            </p>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DisplayCarouselCard;

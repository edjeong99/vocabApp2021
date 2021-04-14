import React from 'react';
import Card from 'react-bootstrap/Card';

const DisplayCarouselCard = ({ word }) => {
  console.log(word);
  if (!word) return null;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{word.word}</Card.Title>
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

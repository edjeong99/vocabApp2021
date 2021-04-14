import React from 'react';
import Card from 'react-bootstrap/Card';

const DisplayCarouselCard = ({ word, data }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{word}</Card.Title>
        <Card.Text>
          {Object.keys(data).map((i) => (
            <p>
              <em>{data[i].fl}</em>, {data[i].shortdef}
            </p>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DisplayCarouselCard;

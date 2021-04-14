import React from 'react';
import Card from 'react-bootstrap/Card';

const DisplayCarouselCard = ({ word, data }) => {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title>{word}</Card.Title>
        <Card.Text>
          {data &&
            data.map((def, index) => (
              <p>
                {index} :{def.fl}
              </p>
            ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DisplayCarouselCard;

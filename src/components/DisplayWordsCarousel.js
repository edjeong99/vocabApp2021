import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import DisplayCarouselCard from './DisplayCarouselCard';

const DisplayWordsCarousel = ({ wordList }) => {
  const [word, setWord] = useState();
  let index = 0;

  useEffect(() => {
    setWord(wordList[index]);
    console.log('index = ' + index);
    console.log(wordList);
  }, []);

  if (!wordList || wordList.length < 1) {
    return <div> no words, yet </div>;
  }

  const changeIndex = (num) => {
    index += num;
    if (index < 0) index = wordList.length - 1;
    else if (index > wordList.length - 1) index = 0;
    setWord(wordList[index]);
    console.log('changeIndex  index = ', index);
  };

  return (
    <div className='carousel'>
      <Button
        className='carouselBtn xs={1}'
        variant='primary'
        onClick={() => changeIndex(-1)}
      >
        &#x21E6;
      </Button>

      <div className='carouselCard'>
        <DisplayCarouselCard word={word} />
      </div>

      <Button
        className='carouselBtn xs={1}'
        variant='primary'
        onClick={() => changeIndex(1)}
      >
        &#x21E8;
      </Button>
    </div>
  );
};

export default DisplayWordsCarousel;

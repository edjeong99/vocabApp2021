import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import DisplayCarouselCard from './DisplayCarouselCard';

// let index = 0;
const DisplayWordsCarousel = ({ wordList }) => {
  const [index, setIndex] = useState(0);

  console.log('index = ' + index);
  console.log(wordList);
  // useEffect(() => {
  //   setWord(wordList[index]);
  //   console.log('index = ' + index);
  //   console.log(wordList);
  // }, []);

  if (!wordList || wordList.length < 1) {
    return <div> no words, yet </div>;
  }

  const changeIndex = (num) => {
    let newNum = index + num;
    if (newNum < 0) newNum = wordList.length - 1;
    else if (newNum > wordList.length - 1) newNum = 0;

    setIndex(newNum);
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
        <DisplayCarouselCard word={wordList[index]} />
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

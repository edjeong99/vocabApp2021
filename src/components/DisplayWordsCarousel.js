import React from 'react';

import DisplayCarouselCard from './DisplayCarouselCard';

const DisplayWordsCarousel = ({ wordList }) => {
  if (!wordList || wordList.length < 1) {
    return <div> no words, yet </div>;
  }
  let word = wordList[0];
  // <Carousel>
  // {wordList.map((word, index) => (
  //   <DisplayCarouselCard key={index} word={word} />
  // ))}
  // </Carousel>

  return (
    <div className='Carousel'>
      <div className='carouselBtn leftBtn'>
        <i className='fa fa-angle-left fa-3x' aria-hidden='true'></i>
      </div>
      <div className='carouselCard'>
        <DisplayCarouselCard word={word.word} data={word.data} />
      </div>
      <div className='carouselBtn rightBtn'></div>
    </div>
  );
};

export default DisplayWordsCarousel;

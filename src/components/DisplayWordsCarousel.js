import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import DisplayCarouselCard from './DisplayCarouselCard';

// let index = 0;
const DisplayWordsCarousel = ({
  wordObjList,
  deleteWordObj,
  saveToMemorizedList,
}) => {
  const [index, setIndex] = useState(0);

  console.log('index = ' + index);
  console.log(wordObjList);
  // useEffect(() => {
  //   setWord(wordObjList[index]);
  //   console.log('index = ' + index);
  //   console.log(wordObjList);
  // }, []);

  if (!wordObjList || wordObjList.length < 1) {
    return <div> no words, yet </div>;
  }

  const changeIndex = (num) => {
    let newNum = index + num;
    if (newNum < 0) newNum = wordObjList.length - 1;
    else if (newNum > wordObjList.length - 1) newNum = 0;

    setIndex(newNum);
    console.log('changeIndex  index = ', index);
  };

  const handleDelete = () => {
    deleteWordObj(wordObjList[index].spell);
    // if the deleting word is the last word, the index needs to be changed by -1
    if (index === wordObjList.length - 1) changeIndex(-1);
  };

  const handleSaveToMemorized = () => {
    saveToMemorizedList(wordObjList[index]);
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
        <DisplayCarouselCard
          wordObj={wordObjList[index]}
          handleDelete={handleDelete}
          handleSaveToMemorized={handleSaveToMemorized}
        />
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

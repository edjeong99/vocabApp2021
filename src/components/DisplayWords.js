import React from 'react';



const DisplayWords = ({ wordList, defList }) => {
  

  //console.log('DisplayWords ', wordList);
  if (defList[0]) console.log(defList[0].data);
  if (!wordList) {
    return <div> no words, yet </div>;
  }

  return (
    <div className='tableContainer' style={{ overflowX: 'auto' }}>
      {wordList.map((word, index) => (
        <div key={`${index}`}>{word}</div>
      ))}
      {defList.map((def, index) => (
        <div key={`${index}`}>{def.data[0].shortdef[0]}</div>
      ))}
    </div>
  );
};

export default DisplayWords;

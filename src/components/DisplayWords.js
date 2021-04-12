import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  align2: {
    textAlign: 'center',
    flexGrow: 2,
  },
  align1: {
    textAlign: 'center',
    flexGrow: 1,
  },
  spaceHolder: {
    flexGrow: 1,
    paddingRight: 0,
  },
}));
const DisplayWords = ({ wordList }) => {
  const classes = useStyles();

  //console.log('DisplayWords ', wordList);
  // console.log(quoteList);
  if (!wordList) {
    return <div> no words, yet </div>;
  }
  return (
    <div className='tableContainer' style={{ overflowX: 'auto' }}>
      {wordList.map((word, index) => (
        <div key={`${index}`}>{word}</div>
      ))}
    </div>
  );
};

export default DisplayWords;

// <div className='stocks'>
// {quoteList.map((quote, index) => (
//   <DisplayAStock key={index} quote={quote} deleteStock={handleDelete} />
// ))}
// </div>

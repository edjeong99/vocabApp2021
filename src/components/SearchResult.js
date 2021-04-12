import React from 'react';
//import Loader from './Loader';
//import DisplaySearchResult from './DisplaySearchResult';

const styles = (theme) => ({
  inputCenter: {
    textAlign: 'center',
    color: 'red',
  },
});

const SearchResult = ({ searchResultList }) => {
  //  console.log('SearchResult');
  // console.log(
  // 'loading = ' +
  //   loading +
  //   ' errorMessag = ' +
  //   errorMessage +
  //   'searchResultList = ' +
  //   searchResultList );

  if (searchResultList) {
    return (
      <div className='searchResultWindow'>
        <h3>Choose a Symbol to add to the list below</h3>
        <div className='searchResult'>
          {searchResultList.map((item) => (
            <div>{item.shortdef[0]}</div>
          ))}
        </div>
      </div>
    );
  }
  return <div>Empty in SearchResult</div>;
  //return <div className='searchResultWindow'>{loading && <Loader />}</div>;
};

export default SearchResult;

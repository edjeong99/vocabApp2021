import React, { useState } from 'react';
import { Form, FormControl, Button, Spinner } from 'react-bootstrap';
import * as Constants from '../util/Constants';

const Search = ({ addWord }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  // searchResultList is result of a user search.  It has list of stock symbols that match search
  const [searchResultList, setSearchResultList] = useState([]);

  const handleSearchInputChange = (e) => {
    setQuery(e.target.value);
  };

  const callSearchFunction = (e) => {
    console.log('query = ', query);
    e.preventDefault();
    setLoading(true);
    fetch(Constants.WEBSTER_API_URL + query + Constants.WEBSTER_TOKEN)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse) {
          console.log(jsonResponse);
          let newWord = {
            word: `${query}`,
            data: { ...jsonResponse },
          };
          //console.log(newWord.data);
          addWord(newWord);
          setLoading(false);
        } else {
          console.log('Search error');
        }
      })
      .catch((e) => {
        console.log('Search error at catch ', e);
        setLoading(false);
      });

    setQuery('');
  };

  return (
    <Form>
      <FormControl
        type='text'
        placeholder='Search'
        className='mr-sm-2'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant='outline-primary' onClick={callSearchFunction}>
        {loading && (
          <Spinner
            as='span'
            animation='border'
            size='sm'
            role='status'
            aria-hidden='true'
          />
        )}
        Search
      </Button>
    </Form>
  );
};

export default Search;

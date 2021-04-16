import React, { useState } from 'react';
import { Form, FormControl, Button, Spinner, Row, Col } from 'react-bootstrap';
import * as Constants from '../util/Constants';

const Search = ({ addWordObj }) => {
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
          let newWordObj = {
            spell: `${query}`,
            data: { ...jsonResponse },
          };
          //console.log(newWord.data);
          addWordObj(newWordObj);
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
    <Form className='mt-3 mb-3 search' onSubmit={callSearchFunction}>
      <Row>
        <Col xs={8}>
          <FormControl
            type='text'
            placeholder='Search'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Col>
        <Col xs={4} className='d-flex justify-content-center'>
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
        </Col>
      </Row>
    </Form>
  );
};

export default Search;

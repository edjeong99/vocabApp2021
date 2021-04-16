import React from 'react';
import { Navbar, DropdownButton, Dropdown } from 'react-bootstrap';
const Header = ({ isDisplayStudy, changeWordList }) => {
  const handleSelect = (e) => {
    console.log(e);
    if (isDisplayStudy && e === 'memorized') {
      console.log('changing to memo');
      changeWordList();
    }

    if (!isDisplayStudy && e === 'studying') {
      console.log('changing to studying');
      changeWordList();
    }
  };
  return (
    <Navbar bg='primary' variant='dark' expand='md'>
      <Navbar.Brand href='#home'>Vocabulary-App</Navbar.Brand>
      <DropdownButton
        alignRight
        title='word list'
        id='dropdown-menu-align-right'
        onSelect={handleSelect}
      >
        <Dropdown.Item eventKey='studying' active={isDisplayStudy}>
          Studying
        </Dropdown.Item>
        <Dropdown.Item eventKey='memorized' active={!isDisplayStudy}>
          Memorized
        </Dropdown.Item>
      </DropdownButton>
    </Navbar>
  );
};

export default Header;

import React from 'react';
import { Navbar } from 'react-bootstrap';
const Header = () => {
  return (
    <Navbar bg='primary' variant='dark' expand='md'>
      <Navbar.Brand href='#home'>Vocabulary-App</Navbar.Brand>
    </Navbar>
  );
};

export default Header;

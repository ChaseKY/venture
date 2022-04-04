import React from 'react';
import Nav from './Nav';

function Header(props) {
  console.log(props);
  return (
    <header>
      <Nav setCurrent={props.setCurrent}></Nav>
    </header>
  );
}

export default Header;

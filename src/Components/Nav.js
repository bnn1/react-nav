import React, { useState } from 'react';
import MenuBtn from './MenuBtn';
// import styles
import './Nav.css';
const Nav = (props) => {
  const [state, setState] = useState('hidden');
  const menuItems = props.menuItems;
  const handleClick = () => changeState(state, setState, 'hidden', 'toggled');
  return (
    <>
      <nav className={state + ' navmenu'}>
        <ul>
          {menuItems.map((menuItem) => (
            <li key={menuItem}>
              <a href='#'>{menuItem}</a>
            </li>
          ))}
        </ul>
      </nav>
      <MenuBtn onClick={handleClick} className={state + ' menu-bars'} />
    </>
  );
};

function changeState(stateObject, setState, state1, state2) {
  if (stateObject === state1) {
    setState(state2);
  } else {
    setState(state1);
  }
}

export default Nav;

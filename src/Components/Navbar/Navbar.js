import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/CreateEvent' activeStyle>
            Create Event
          </NavLink>
          <NavLink to='/SeeEvents' activeStyle>
            See Events
          </NavLink>
          <NavLink to='/LoginForm' activeStyle>
            Log In
          </NavLink>
          <NavLink to='/RegisterForm' activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;
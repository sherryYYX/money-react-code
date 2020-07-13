import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

const NavStyle = styled.nav`
box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul{
    display:flex;
    flex-direction: row;
    >li{
      width: 33.33333%;
      text-align: center;
      padding: 16px;
      
    };
  }
`
const Nav = ()=>{
  return(
    <NavStyle>
      <ul>
        <li>
          <Link to="/labels">labels</Link>
        </li>
        <li>
          <Link to="/money">money</Link>
        </li>
        <li>
          <Link to="/statistics">statistics</Link>
        </li>
      </ul>
    </NavStyle>
  )
}

export default Nav;
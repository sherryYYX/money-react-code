import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

require('../icons/money.svg')
require('../icons/label.svg')
require('../icons/statistics.svg')


const NavStyle = styled.nav`
box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul{
    display:flex;
    flex-direction: row;
    >li{
      width: 33.33333%;
      text-align: center;
      padding: 2px 0;
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    };
  }
`
const Nav = ()=>{
  return(
    <NavStyle>
      <ul>
        <li>
          <svg>
            <use xlinkHref="#label"></use>
          </svg>
          <Link to="/labels">labels</Link>
        </li>
        <li>
          <svg>
            <use xlinkHref="#money"></use>
          </svg>
          <Link to="/money">money</Link>
        </li>
        <li>
          <svg>
            <use xlinkHref="#statistics"></use>
          </svg>
          <Link to="/statistics">statistics</Link>
        </li>
      </ul>
    </NavStyle>
  )
}

export default Nav;
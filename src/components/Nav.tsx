import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';



const NavStyle = styled.nav`
box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul{
    display:flex;
    flex-direction: row;
    >li{
      width: 33.33333%;
        text-align: center;
      >a{
          padding: 2px 0;
          display:flex;
          flex-direction: column;
          justify-content: center;
          align-items: center; 
          &.selected{
          color: #03933b;
            >svg{
              fill:#03933b;
            }
          }
        }
    };
  }
`
const Nav = ()=>{
  return(
    <NavStyle>
      <ul>
        <li>
          <NavLink to="/labels" activeClassName="selected">
            <Icon name='label'/>
            labels</NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name='money'/>
               money
            </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="statistics"/>
            statistics
          </NavLink>
        </li>
      </ul>
    </NavStyle>
  )
}

export default Nav;
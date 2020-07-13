import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Money from './pages/Money';
import Labels from './pages/Labels';
import Statistics from './pages/Statistics';
import styled from 'styled-components';

const Wrapper= styled.div`
  border: 1px solid red;
  height: 100vh;
  display:flex;
  flex-direction: column;
`

const Main = styled.div`
  border: 1px solid green;
  flex-grow: 1;
`
const Nav = styled.nav`
border: 1px solid blue;
  >ul{
    border: 1px solid red;
    display:flex;
    flex-direction: row;
    >li{
      width: 33.33333%;
      text-align: center;
      padding: 16px;
      
    };
  }
`

const APP =   ()=> {
  return (
    <Router>
      <Wrapper>

        <Main>
          <Switch>
            <Route path="/labels">
              <Labels/>
            </Route>
            <Route path="/money">
              <Money/>
            </Route>
            <Route path="/statistics">
              <Statistics/>
            </Route>
            <Redirect exact from="/" to="/money"/>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Main>

        <Nav>
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
        </Nav>

      </Wrapper>
    </Router>
  );
}

function NoMatch() {
  return(
    <div>页面不存在，请点击返回 <a href="/">首页</a> </div>
  )
}

export default APP;
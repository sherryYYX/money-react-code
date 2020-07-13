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
import Nav from './components/Nav';

const Wrapper= styled.div`
  border: 1px solid red;
  height: 100vh;
  display:flex;
  flex-direction: column;
  font-family: -apple-system, "Noto Sans", "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
`

const Main = styled.div`
  flex-grow: 1;
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

        <Nav/>

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
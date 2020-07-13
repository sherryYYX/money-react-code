import styled from 'styled-components';
import React from 'react';
import Nav from './Nav';
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

const Layout =(props: any)=>{
  return(
      <Wrapper>
        <Main>
          {props.children}
        </Main>
        <Nav/>
      </Wrapper>
  )
}
export default Layout
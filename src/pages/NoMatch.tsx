import React from 'react';
import styled from 'styled-components';

const H3 = styled.div`
  padding: 16px;
  font-size: 20px;
  >a{
    color: blue;
  }
`
const NoMatch =() =>{
  return(
    <H3>页面不存在，请点击返回 <a href="/">首页</a> </H3>
  )
}
export default NoMatch;

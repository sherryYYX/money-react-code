import React from 'react';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import styled from 'styled-components';
import TagsStyle from './money/TagsSection';



const NotesStyle = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  >label{
  display:flex;
  align-items: center;
    >span{
      margin-right: 16px;
      white-space: nowrap;
    }
    >input{
    display:block;
    width: 100%;
    height: 72px;
    border: none;
    background: none;
    }
  }
`

const Category = styled.section`
    font-size: 24px;
  >ul{
    display:flex;
    background: #f5f5f5;
    >li{
      width: 50%;
      text-align: center;
      padding: 16px 0;
      &.selected{
        color: green;
      }
    }
  }
`

const NumberPad = styled.section`
  display:flex;
  flex-direction: column; 
  > .output{
    background: #fff;
    font-size: 28px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    display:flex;
    justify-content: space-between;
    }
  > .pad{
    > button{
    font-size: 18px;
      background: #fff;
      width: 25%;
      height: 64px;
      float: left;
      border-radius: 4px;
      border-width: 4px;
      border-style: solid;
      border-color: rgb(250, 250, 250);
      border-image: initial;
      &.ok{
        float: right;
        height: 128px;
      }
      &.dot{
        width: 50%;
      }
    }
  }
`

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
 
`

const Money= ()=>{
  return(
    <MyLayout>
      <TagsStyle>
      </TagsStyle>
      <NotesStyle>
        <label>
          <span>备注</span>
          <input type="text" placeholder="请输入记账备注"/>
        </label>
      </NotesStyle>
      <Category>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </Category>
      <NumberPad>
        <div className="output">
          <span >¥</span>
          100
        </div>
        <div className="pad clearFix">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">ok</button>
          <button className="dot">0</button>
          <button>.</button>
        </div>
      </NumberPad>
    </MyLayout>
  )
}

export default Money
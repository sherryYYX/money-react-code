import React from 'react';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import styled from 'styled-components';

const TagsStyle = styled.div`
  background: #fff;
    padding: 12px 16px;
  > ul{
    margin: 0 -12px;
    >li{
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }
  >button{
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
 `

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
    background: #c4c4c4;
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

`

const Money= ()=>{
  const layout = <><Layout>
    <TagsStyle>
      <ul>
        <li>衣服</li>
        <li>衣服</li>
        <li>衣服</li>
      </ul>
      <button>新增标签</button>
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
      <div>100</div>
      <div>
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
        <button>ok</button>
        <button>0</button>
        <button>.</button>
      </div>
    </NumberPad>
  </Layout></>;
  return layout
}

export default Money
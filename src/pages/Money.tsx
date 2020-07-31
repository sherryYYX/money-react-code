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
  
`

const Category = styled.section`

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
        <input type="text"/>
      </label>
    </NotesStyle>
    <Category>
      <ul>
        <li>支出</li>
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
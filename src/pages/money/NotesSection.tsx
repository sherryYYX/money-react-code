import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
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

type Props={
  value: string
  onChange:(value: string)=> void
}

const NotesSection:React.FC<Props>=(props)=>{
  const note = props.value
  return(
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text" placeholder="请输入记账备注"
          value={note} onChange={(e)=>{props.onChange(e.target.value)}}
        />
      </label>
    </Wrapper>
  )
}


export default NotesSection;
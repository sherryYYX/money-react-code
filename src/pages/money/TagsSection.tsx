import React from 'react';
import styled from 'styled-components';
import {useTag} from '../../useTag';

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  flex-grow: 1;
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
      &.selected{
        background: green;
      }
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

type Props ={
  value: {id:number,tagName:string},
  onchange: (selected: {id:number,tagName:string})=> void
}

const TagsSection : React.FC<Props>=(props)=>{

  const selectedTag = props.value

  const {tags, addTag} = useTag()



  const toggle = (tag:{id:number,tagName:string})=>{
    props.onchange(tag)
  }

  return(
    <Wrapper>
      <ul>
        {tags.map((tag)=>
          <li key={tag.id} onClick={(e)=>toggle(tag)} className={ selectedTag.id === tag.id  ? 'selected':''}>{tag.tagName}</li>
        )}
      </ul>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  )
}
export default TagsSection;
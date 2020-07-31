import React, { useState} from 'react';
import styled from 'styled-components';

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

const TagsSection : React.FC=()=>{
  const [tags, setTags] = useState<string[]>(['衣服','食物','住房','交通'])

  let [selectedTag, setSelectedTag] = useState<number>(0)

  const addTag = ()=>{
    let tagName = window.prompt('请输入新增标签名')
    //将新增标签名放到标签里，React要生成新的数组
    if(tagName !== null){
      setTags([...tags, tagName])
    }
  }

  const toggle = (tag:string,index:number)=>{
    setSelectedTag(index)
    console.log(selectedTag);
  }

  return(
    <Wrapper>
      <ul>
        {tags.map((tag,index)=>
          <li key={tag} onClick={(e)=>toggle(tag,index)} className={selectedTag === index  ? 'selected':''}>{tag}</li>
        )}
      </ul>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  )
}
export default TagsSection;
import React from 'react';
import Layout from '../components/Layout';
import {useTag} from '../useTag';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';
import {Button} from '../components/Button';
import {Center} from '../components/Center';

const TagList = styled.ol`
  font-size: 16px;
  background: #fff;
  >li{
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px; 
    > a{
      padding: 12px 16px;
      display:flex;
      justify-content: space-between;
      align-items: center;  
     >svg{
      width: 1em;
      height: 1em;
     }
    } 
  }
`


const Labels= ()=>{
  const {tags, addTag} = useTag()
  return(
    <Layout>
      <TagList>
        { 
          tags.map((tag:({id:number;tagName:string})) =>
            <li  key={tag.id}>
              <Link to={'/labels/'+tag.id}>
                <span>{tag.tagName}</span>
                <Icon name='_right'/>
              </Link>
            </li>
          )
        }
      </TagList>
      <Center>
        <Button onClick={addTag} >新增标签</Button>
      </Center>
    </Layout>

  )
}

export default Labels
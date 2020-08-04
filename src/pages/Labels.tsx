import React from 'react';
import Layout from '../components/Layout';
import {useTag} from '../useTag';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';

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

const Button = styled.button`
  font-size: 18px;
  padding: 8px 12px;
  border: none;
  background: green;
  border-radius: 4px;
  color: #fff;
`

const Center = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
`

const Labels= ()=>{
  const {tags, setTags} = useTag()
  return(
    <Layout>
      <TagList>
        { 
          tags.map(tag =>
            <li  key={tag}>
              <Link to={'/labels/'+tag}>
                <span>{tag}</span>
                <Icon name='_right'/>
              </Link>
            </li>
          )
        }
      </TagList>
      <Center>
        <Button>新增标签</Button>
      </Center>
    </Layout>

  )
}

export default Labels
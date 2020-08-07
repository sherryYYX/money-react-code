import React from 'react';
import {useTag} from '../useTag';
import {useParams} from 'react-router-dom'
import Layout from './Layout';
import Icon from './Icon';
import {Button} from './Button';
import {Center} from './Center';
import styled from 'styled-components';

const TopBar = styled.header`
background: #fff;
 text-align: center;
 position: relative;
 line-height: 20px;
 padding: 14px;
 >svg{
  width: 1em;
  height: 1em;
  position: absolute;
  left:0;
  top: 50%;
  transform: translateY(-50%);
 }
`

const Label = styled.label`
  margin-top: 8px;
  background: #fff;
  display:flex;
  align-items: center;
    >span{
      margin-right: 16px;
      white-space: nowrap;
    }
    >input{
    display:block;
    width: 100%;
    height: 44px;
    border: none;
    background: none;
    }
`


type Params ={
  id:string
}
const Tag:React.FC = (props)=>{
  const {findTag} = useTag()
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id))

  return(
    <Layout>
      <TopBar>
        <Icon name="left"/>
        <span>编辑标签</span>
      </TopBar>
      <Label>
        <span>标签名</span>
        <input type="text" placeholder="标签名"/>
      </Label>
      <div>{tag.tagName}</div>
      <Center>
        <Button>删除标签</Button>
      </Center>
    </Layout>
  )
}

export {Tag}
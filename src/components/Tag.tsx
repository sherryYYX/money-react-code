import React from 'react';
import {useTag} from '../useTag';
import {useParams} from 'react-router-dom'

type Params ={
  id:string
}
const Tag:React.FC = ()=>{
  const {findTag} = useTag()
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id))

  return(
    <div>{tag.tagName}</div>
  )
}

export {Tag}
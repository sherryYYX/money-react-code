
// @ts-ignore
import {useState} from 'react';
import {createId} from './lib/creatId';

const defaultTag = [
    {id:createId(),tagName:'衣服'},
    {id:createId(),tagName:'食物'},
    {id:createId(),tagName:'住房'},
    {id:createId(),tagName:'交通'},
]

const useTag = ()=>{
  const [tags, setTags] = useState<{id:number;tagName:string}[]>(defaultTag)

  const findTag = (id:number) => tags.filter(tag => tag.id === id)[0]

  return{
    tags: tags,
    setTags: setTags,
    findTag: findTag
  }
}
export {useTag}
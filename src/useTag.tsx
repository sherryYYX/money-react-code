
// @ts-ignore
import {useState} from 'react';

const useTag = ()=>{
  const [tags, setTags] = useState<string[]>(['衣服','食物','住房','交通'])
  return{
    tags: tags,
    setTags: setTags
  }
}
export {useTag}
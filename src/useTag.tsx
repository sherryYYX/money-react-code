
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

  const addTag = ()=>{
    let tagName = window.prompt('请输入新增标签名')
    //将新增标签名放到标签里，React要生成新的数组
    if(tagName !== null && tagName !== ''){
      setTags([...tags, {id:createId(), tagName:tagName}])
    }
  }

  const findTag = (id:number) => tags.filter(tag => tag.id === id)[0]

  const findTagIndex = (id: number)=>{
    let result = -1;
    for(let i = 0; i <= tags.length; i++){
      if(tags[i].id === id ){
        result = i
        break
      }
    }
    return result
  }

  const updateTag = (id: number, obj: {name:string})=>{
    setTags(tags.map((tag)=>{
      if(tag.id === id){
        return {id:id, tagName: obj.name}
      }else {
        return tag
      }
    }))
  }

  const deleteTag = (id: number)=>{
    setTags(tags.filter(tag => tag.id !== id ))
  }

  return{
    tags: tags,
    setTags: setTags,
    addTag: addTag,
    findTag: findTag,
    updateTag: updateTag,
    deleteTag: deleteTag
  }
}
export {useTag}
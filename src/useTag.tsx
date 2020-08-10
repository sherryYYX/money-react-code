
import {useEffect, useState} from 'react';
import {createId} from './lib/creatId';
import {useUpdate} from './useUpdate';

const useTag = ()=>{
  const [tags, setTags] = useState<{id:number;tagName:string}[]>([])

  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
    if(localTags.length === 0){
      localTags = [
        {id:createId(),tagName:'衣服'},
        {id:createId(),tagName:'食物'},
        {id:createId(),tagName:'住房'},
        {id:createId(),tagName:'交通'},
      ]
    }
    setTags(localTags)
  }, []); // 组件挂载时执行


  useUpdate(()=>{
    window.localStorage.setItem('tags', JSON.stringify(tags))
  },[tags])

  const addTag = ()=>{
    let newTagName = window.prompt('请输入新增标签名')
    //将新增标签名放到标签里，React要生成新的数组
    if(newTagName !== null && newTagName !== ''){
      setTags([...tags, {id:createId(), tagName:newTagName}])
    }
  }

  const findTag = (id:number) => tags.filter(tag => tag.id === id)[0]

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
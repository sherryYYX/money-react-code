
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
    //获取要改的 tag 的 index
    const index = findTagIndex(id)
    //深拷贝tags
    const tagsClone = JSON.parse(JSON.stringify(tags))
    //将拷贝后的数组里的index 删掉，替换成{id :id, name : obj.name}
    tagsClone.splice(index, 1, {id:id, name: obj.name})
    setTags(tagsClone)
  }

  const deleteTag = (id: number)=>{
    //获取要删除的 tag 的 index
    const index = findTagIndex(id)
    //深拷贝tags
    const tagsClone = JSON.parse(JSON.stringify(tags))
    //将拷贝后的数组里的index 删掉，替换成{id :id, name : obj.name}
    tagsClone.splice(index, 1)
    setTags(tagsClone)
  }

  return{
    tags: tags,
    setTags: setTags,
    findTag: findTag,
    updateTag: updateTag,
    deleteTag: deleteTag
  }
}
export {useTag}
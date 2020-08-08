import React, {useState} from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import TagsStyle from './money/TagsSection';
import NotesStyle from './money/NotesSection';
import Category from './money/CategorySection';
import NumberPad from './money/NumberPadSection';
import {useRecords} from '../hook/useRecord';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
 
`

const defaultData ={
  tag: {id:1, tagName:"衣服"},
  note: '',
  category: '-' as ('-'|'+'),
  numberPad: 0
}

const Money= ()=>{

  const [selected, setSelected] = useState(defaultData)

  const {addRecord} = useRecords()

  const submit =()=>{
    addRecord(selected)
    window.alert('记账成功！')
    setSelected(defaultData)
  }

  return(
    <MyLayout>
      {JSON.stringify(selected)}
      <TagsStyle value={selected.tag}
      onchange={(tag)=>{
        setSelected({
          ...selected,
          tag: tag
        })
      }} />
      <NotesStyle value={selected.note}
       onChange={(note)=>{
         setSelected({
           ...selected,
           note: note
         })
       }} />
      <Category value = {selected.category}
         onChange={(category)=>{
           setSelected({
             ...selected,
             category: category
           })
         }} />
      <NumberPad value={selected.numberPad}
                 onOk={submit}
         onChange={(numberPad)=>{
           setSelected({
             ...selected,
             numberPad: numberPad
           })
         }} />
    </MyLayout>
  )
}

export default Money;
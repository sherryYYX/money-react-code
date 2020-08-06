import React, {useState} from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import TagsStyle from './money/TagsSection';
import NotesStyle from './money/NotesSection';
import Category from './money/CategorySection';
import NumberPad from './money/NumberPadSection';
import {createId} from '../lib/creatId';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
 
`

const Money= ()=>{

  const [selected, setSelected] = useState({
    tag: {id:1, tagName:"衣服"},
    note: '',
    category: '-' as ('-'|'+'),
    numberPad: 0
  })

  return(
    <MyLayout>
      {selected.tag.tagName}<hr/>
      {selected.note}<hr/>
      {selected.category}
      <hr/>
      {selected.numberPad}

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
                 onOk={()=>{console.log('ok');}}
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
import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import TagsStyle from './money/TagsSection';
import NotesStyle from './money/NotesSection';
import Category from './money/CategorySection';
import NumberPad from './money/NumberPadSection';




const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
 
`

const Money= ()=>{
  return(
    <MyLayout>
      <TagsStyle/>
      <NotesStyle/>
      <Category/>
      <NumberPad/>
    </MyLayout>
  )
}

export default Money
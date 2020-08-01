import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
    font-size: 24px;
  >ul{
    display:flex;
    background: #f5f5f5;
    >li{
      width: 50%;
      text-align: center;
      padding: 16px 0;
      &.selected{
        color: green;
      }
    }
  }
`
const CategorySection : React.FC = ()=>{
  const [categoryList] = useState<('+'|'-')[]>(['-','+'])
  const categoryMap = {
    '-': "支出",
    '+': '收入'
  }
  const [category, setCategory] = useState('-')
  return(
    <Wrapper>
      <ul>
        {
          categoryList.map(c =>
            <li key={c} className={category === c ? 'selected':''}
              onClick={()=>{setCategory(c)}} >{categoryMap[c]}</li>
          )
        }
      </ul>
    </Wrapper>
  )
}

export default CategorySection
import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import {useRecords} from '../hook/useRecord';
import day from 'dayjs'

const Header = styled.header`
  height: 200px;
  background: #62b17a;
  >div{
    color: #fff;
    padding-top: 80px;
    text-align: center;
    font-size: 18px;
  }
  >footer{
  font-size: 14px;
    display:flex;
    justify-content: flex-start;
    margin-top: 76px;
    color: #fff;
    >.month{
      margin: 0 18px;
    }
    >.expanse{
      margin-right: 18px;
    }
  }
`

const NowTime = styled.div`
  //border: 1px solid red;
  padding-top: 10px;
  display:flex;
  justify-content: flex-end;
  >span{
    margin-right: 18px;
  }
`

const Item = styled.div`
  border-radius: 8px;
  padding: 10px 8px;
  background: #fff;
  margin: 10px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  >.tag{
   
  }
  >.note{
    font-size: 12px;
    color: #c1c4cb;
    margin-right: auto;
    margin-left: 18px;
  }
  >.right{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    >.day{
       font-size: 12px;
        color: #c1c4cb;
    }
  }

`

const Statistics= ()=>{

  const {records} = useRecords()
  console.log(records);

  const result = (category:'+'|'-', time:'day'|'month')=>{
    let daily=0;
    let monthly=0;
    const now = day();

    const categoryRecords=records.filter(r=>r.category===category);
    for(let i=0;i<categoryRecords.length;i++){
      if(now.isSame(day(categoryRecords[i].createAt),'day')){
        daily+=categoryRecords[i].numberPad;
      }
      if(now.isSame(day(categoryRecords[i].createAt),'month')){
        monthly+=categoryRecords[i].numberPad;
      }
    }
    if(time==='day'){return daily.toFixed(2);}
    if(time==='month'){return monthly.toFixed(2);}
  }

  const sortRecords = records.sort((a,b)=>{
    if(a.createAt===b.createAt) return 0
    if(a.createAt > b.createAt) return -1
    if(a.createAt < b.createAt) return 1
    return 0
  })

  return(
    <Layout>
      <Header>
        <div>记账本</div>
        <footer>
          <span className="month">本月</span>
          <span className="expanse">总支出¥{result('-','month')}</span>
          <span>总收入¥{result('+','month')}</span>
        </footer>
      </Header>
      <main>
        <NowTime>
          <span>今日支出¥{result('-','day')}</span>
          <span>今日收入¥{result('+','day')}</span>
        </NowTime>
        <div>
              {sortRecords.map((r,index)=>{
                return <Item key={index}>
                  <span className="tag">
                    {r.tag.tagName}
                  </span>
                  <span className="note">
                     {r.note}
                  </span>
                  <span className="right">
                    ¥{r.category}{r.numberPad.toFixed(2)}
                    <span className="day">
                      {day(r.createAt).format('YYYY年MM月DD日')}
                    </span>
                  </span>
                </Item>
              })}
        </div>
      </main>
    </Layout>

  )
}

export default Statistics
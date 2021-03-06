import React, {useEffect, useState} from 'react';
import {useUpdate} from '../useUpdate';

type RecordItem = {
  tag: {id:number,tagName:string},
  note: string,
  category: '-'|'+',
  numberPad: number,
  createAt: string
}

type newRecordItem = {
  tag: {id:number,tagName:string},
  note: string,
  category: '-'|'+',
  numberPad: number
}


export const useRecords = ()=>{
  const [records, setRecords] = useState<RecordItem[]>([])

  useEffect(()=>{
    const localRecords =JSON.parse(window.localStorage.getItem('records')||'[]')
    setRecords(localRecords)
  },[])

  let addRecord = (newRecord: newRecordItem)=>{
    if(newRecord.numberPad <= 0){
      window.alert('请输入记账明细')
      return false
    }else {
      const record = {...newRecord, createAt: new Date().toISOString()}
      setRecords([...records, record ])
    }
    return true
  }



  useUpdate(()=>{
    window.localStorage.setItem('records', JSON.stringify(records))
  },[records])
  return{
    addRecord,
    records
  }

}




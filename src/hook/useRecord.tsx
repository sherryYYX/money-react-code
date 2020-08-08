import React, {useEffect, useState} from 'react';
import {useUpdate} from '../useUpdate';

type RecordItem = {
  tag: {},
  note: string,
  category: '-'|'+',
  numberPad: number,
  createAt: string
}

type newRecordItem = {
  tag: {},
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
    const record = {...newRecord, createAt: new Date().toISOString()}
    setRecords([...records, record ])
  }

  useUpdate(()=>{
    window.localStorage.setItem('records', JSON.stringify(records))
  },[records])
  return{
    addRecord,
    records
  }

}




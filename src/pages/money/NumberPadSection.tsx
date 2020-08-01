import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  display:flex;
  flex-direction: column; 
  > .output{
    background: #fff;
    font-size: 28px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    display:flex;
    justify-content: space-between;
    }
  > .pad{
    > button{
    font-size: 18px;
      background: #fff;
      width: 25%;
      height: 64px;
      float: left;
      border-radius: 4px;
      border-width: 4px;
      border-style: solid;
      border-color: rgb(250, 250, 250);
      border-image: initial;
      &.ok{
        float: right;
        height: 128px;
      }
      &.dot{
        width: 50%;
      }
    }
  }
`

const NumberPadSection:React.FC = ()=>{

  let [output, setOutput] = useState('0')

  const onClickButtonWrapper = (e:React.MouseEvent)=>{
    const text = (e.target as HTMLButtonElement).textContent;
    if(text === null){return;}
    if(output.length>16){
      output = output.slice(0,16)
    }
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if(output === '0'){
          setOutput(text)
        }else{
          setOutput(output+text)
        }
        break;
      case '.':
        if(output.indexOf('.')>=0){
          return;
        }else {
          setOutput(output+text)
        }
        break;
      case '删除':
        if(output.length === 1){
          setOutput('0')
        }else{
          setOutput(output.slice(0,-1))
        }
        break;
      case '清空':
        setOutput('0')
        break;
      case 'ok':
        console.log('ok');
        break;
    }
  }

  return(
    <Wrapper>
      <div className="output">
        <span >¥</span>
        {output}
      </div>
      <div className="pad clearFix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">ok</button>
        <button className="dot">0</button>
        <button>.</button>
      </div>
    </Wrapper>
  )
}

export default NumberPadSection
import React, {useState} from 'react';
import Texts from './components/Texts.js'
import Digits from './components/Digits.js'
import Roll from './components/Roll.js';
import data from './data/data.js'
import Confetti from 'react-confetti'
export default function App() {
  const [digits, setDigits]=useState(data)
  const [win, setWin]=useState(false)
  const [counter, setCounter]=useState(1)
  function toggleFreeze(id){
    setDigits(prevState=>{
      return prevState.map(box=>{
        return box.id===id?{...box, freeze: !box.freeze}:box
      })
    })
    let j=1
    for(let i=0;i<digits.length;i++){
      if(digits[0].digit===digits[i].digit&&digits[i].freeze===true){
        j++
      }
    }
    if(j===10){
      setWin(true)
    }
  }
  function roll(){
    setCounter(prevState=>prevState+1)
    setDigits(prevState=>{
      return prevState.map(box=>{
        return box.freeze===true?box:{...box, digit: Math.floor(Math.random() * 6) + 1}
      })
    })
  }
  return (
    <main>
      <div className="container">
        <Texts 
          counter={counter}
          win={win}
        />
        <Digits 
          digits={digits} 
          toggleFreeze={toggleFreeze}
        />
        <Roll
          win={win}
          roll={roll}
          reset={()=>{
            document.location.reload()
          }}          
        />
        {win&&<Confetti className='confetti'/>}
      </div>
    </main>
  );
}

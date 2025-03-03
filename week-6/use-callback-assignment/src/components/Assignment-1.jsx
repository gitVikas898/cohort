import { useState } from 'react';
import './App.css'
import { useMemo } from 'react';

const words = ["hi","my","name","is","for","random","word"];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];

for(let i=0;i<TOTAL_LINES;i++){
  let sentence = ""
  for(let j =0;j<words.length;j++){
    sentence +=(words[Math.floor(words.length*Math.random())]);
    sentence +=" "
  }
  ALL_WORDS.push(sentence);
}

function App() {

  const [sentence,setSentence] = useState(ALL_WORDS);
  const [filter,setFilter] = useState("");

  // const filterSentece = sentence.filter((line)=>line.includes(filter)); //in efficient way to do this 

  //efficient way

  const filterSentence = useMemo(()=>{
    return sentence.filter((x)=>x.includes(filter))
  },[sentence,filter])

  return (
    <div>
        <input type='text' onChange={(e)=>{
          setFilter(e.target.value)
        }}></input>
        {filterSentence.map((word)=>{
          return(
            <p>{word}</p>
          )
        })}
    </div>
  )
}

export default App

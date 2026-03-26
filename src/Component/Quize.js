import React, { useRef, useState } from "react";
import {data} from './QuesAns.js';

function Quize(){
    let [index,setIndex] = useState(0);
    let [ques,setques] = useState(data[index]);
    let [lock,setlock] = useState(false);
    let [score,setscore] = useState(0);
    let [result,setResult] = useState(false);

    let opt1 = useRef();
    let opt2 = useRef();
    let opt3 = useRef();
    let opt4 = useRef();

    let opt_arr = [opt1,opt2,opt3,opt4];

    const ckAns = (e,ans)=>{
        if(lock === false){
            if(ques.ans === ans){
                e.target.classList.add("correct");
                setlock(true);
                setscore((prev)=>prev+1);
            } 
            else{
                e.target.classList.add("wrong");
                setlock(true);
                opt_arr[ques.ans-1].current.classList.add("correct");
            }
        } 
    }

    const next = ()=>{
        if(lock === true){
            if(index === data.length-1){
                setResult(true);
                return 0;
            }
            setIndex(++index);
            setques(data[index]);
            setlock(false);
            opt_arr.map((opt)=>{
                opt.current.classList.remove("wrong");
                opt.current.classList.remove("correct");
                return null;
            })
        }
    }

    const reset = ()=>{
        setIndex(0);
        setques(data[0]);
        setscore(0);
        setlock(false);
        setResult(false);
    }
    return(
        <div id="quize">
          <h1>Start Solving Quize</h1>
          <hr />
          {result?<>
            <h2>Congratulations!!! You have scored {score} out off {data.length}.</h2>
            <button className="btn btn-danger" onClick={reset}>Reset</button>
          </>:<>
            <h2>{index+1}.{ques.qu}</h2>
          <ul>
            <li ref={opt1} onClick={(e)=>{ckAns(e,1)}}>{ques.opt1}</li>
            <li ref={opt2} onClick={(e)=>{ckAns(e,2)}}>{ques.opt2}</li>
            <li ref={opt3} onClick={(e)=>{ckAns(e,3)}}>{ques.opt3}</li>
            <li ref={opt4} onClick={(e)=>{ckAns(e,4)}}>{ques.opt4}</li>
          </ul>
          <button className="btn btn-success" onClick={next}>NextQuestion</button>
          <div> {index+1}  out off {data.length} !!!</div>
         
          </>}  
        </div>
    );
}
export default Quize;
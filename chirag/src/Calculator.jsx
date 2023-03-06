import React from "react";
import { useState } from "react";
import "./Calculator.css"
let Calculator=()=>{
    const [result,setResult]=useState("");
    let event1=(e)=>{
        setResult(result.concat(e.target.name))
        //console.log( result(setResult.concat(e.target.name)))
        
    }
    let clear=()=>{
        setResult("")
    }

    let back_Space=()=>{
        setResult(result.slice(0,result.length-1))
    }
    let compute= () => {
     try{
        setResult(eval(result).toString());
     }
     catch(Error){
        setResult("Error"+Error.message)
     }
    } 
    return (<div className="container">
        <form>
            <input type="text" value={result}/>
            </form>
            <div className="keyboard">
            <button id="clear"  onClick={clear}>clear</button>
            <button id="btn" onClick={back_Space}>c</button>
            <button  name="/"id="btn" onClick={event1} >/</button>
            <button  name="9"onClick={event1} >9</button>
            <button onClick={event1} name="8">8</button>
            <button onClick={event1} name="7">7</button>
            <button id="btn" onClick={event1} name="*">*</button>
            <button onClick={event1} name="6">6</button>
            <button onClick={event1} name="5">5</button>
            <button onClick={event1} name="4">4</button>
            <button id="btn" onClick={event1} name="-">-</button>
            <button onClick={event1} name="3">3</button>
            <button onClick={event1} name="2">2</button>
            <button onClick={event1} name="1">1</button>
            <button id="btn" onClick={event1} name="+">+</button>
            <button onClick={event1} name="0">0</button>
            <button onClick={event1} name="00">00</button>
            <button onClick={event1} name=".">.</button>
            <button id="btn" onClick={compute}>=</button>
            </div>
    </div>
    )
}
export default Calculator
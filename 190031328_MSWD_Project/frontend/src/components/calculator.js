import React,{useState} from 'react';
import Axios from 'axios'
const Calculator = ()=> {
  const [result,setResult]=useState("")
  const calculate=()=>{
    try{
    // eslint-disable-next-line
   var ans = eval(result).toString()
    Axios.post("http://localhost:3001/insert",{
    history: result + " = " + ans,

    })
    setResult(ans)
  }
    catch(err){
      setResult("Syntax Error")
    }
  }
  const handleClick = (e) =>{
    setResult(result.concat(e.target.name));
  }
  const handleRoot = (e) =>{
    setResult(Math.sqrt(result).toString());
  }
  const clear = () => {
    setResult("")
  }
  const backspace = () => {
    setResult(result.slice(0, -1))
  }

  return (
    <div>
    <div className="cont">
      <form>
      <input type="text"value={result} />
      </form>
      <div className="keypad">
      <button className="hil2" onClick={clear} id="clear">CE</button>
      <button className="hil2" onClick={backspace} id="backspace">C</button>
      <button className="hil2" onClick={event =>  window.location.href='/history'}>Hist</button>
      <button name="/" className="hil" onClick={handleClick}>&divide;</button>
      <button className="hil" name="%" onClick={handleClick}>%</button>
      <button name="7" onClick={handleClick}>7</button>
      <button name="8" onClick={handleClick}>8</button>
      <button name="9" onClick={handleClick}>9</button>
      <button name="*" className="hil" onClick={handleClick}>&times;</button>
      <button name="-" className="hil" onClick={handleClick}>&ndash;</button>
      <button name="4" onClick={handleClick}>4</button>
      <button name="5" onClick={handleClick}>5</button>
      <button name="6" onClick={handleClick}>6</button>
      <button className="hil" name="(" onClick={handleClick}>(</button>
      <button className="hil" name=")" onClick={handleClick}>)</button>
      <button name="1" onClick={handleClick}>1</button>
      <button name="2" onClick={handleClick}>2</button>
      <button name="3" onClick={handleClick}>3</button>
      <button name="0"id="zero" onClick={handleClick}>0</button>
      <button name="+" className="hil" onClick={handleClick}>+</button>
      <button className="hil" onClick={handleRoot}>&#8730;</button>
      <button name="."  onClick={handleClick}>.</button>
      <button onClick={calculate} id="result" className="hil">=</button>
      </div>
    </div>


    <br></br>
    </div>

  );
}

export default Calculator;

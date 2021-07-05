import React,{useState,useEffect} from 'react';
import Axios from 'axios'
const History = ()=> {
    const [history,setHistory]=useState([])
    useEffect(()=> {
        Axios.get('http://localhost:3001/read').then((response)=>{
          setHistory(response.data);
        })
      },[])
  return(
    <div className="hist">
    <h1>History</h1>
    {history.map((val, key) => {
      return (
        <div>
        <p>{val.history}</p>
        </div>);
    })}
    <button className="his" onClick={event =>  window.location.href='/'}>Back</button>
    </div>
  );

}
export default History;

import logo from './logo.svg';
import './App.css';
import{useState} from 'react';
var value1,value2,operator,final_value;

function App() {
  const setHistoryfunc=(value1,operator,value2,final_value)=>{
    if(history.length>5){
      history.shift();
      setHistory([...history,[value1,` ${operator}` , ` ${value2}`," =" ,` ${final_value}`]]);
    }
    else{
      setHistory([...history,[value1,` ${operator}` , ` ${value2}`," =" ,` ${final_value}`]]);
    }
    console.log("hitarray");
      
console.log("hitarray");
    console.log(history);
    return;
  }
  let [history, setHistory] = useState([]);
  let [input_field, setinput_field] = useState("");
  const digitAdd = (int) => {
    if(int<10){
      setinput_field((previnputField) => previnputField + int);
    }
    else if(int=="*" || int=="+" || int=="-" || int=="/" || int=="%"){
      value1=input_field;
      setinput_field(() => "")
      operator= int;
      // console.log(int);
    }
    
    else if(int=="."){
      setinput_field((previnputField) => previnputField + int);
    }
    
}
const showHistory = ()=>{
  return <div>{history.map(value =>{
    <span className="3">{value}</span>
  })}</div>
}
const showResult=()=>{
  // console.log("click");
  // console.log(operator);
  value2=input_field;
  if(operator=="+"){
    final_value=parseFloat(value1)+parseFloat(value2);
    setinput_field(() => final_value);
    setHistoryfunc(value1,operator,value2,final_value);
    operator="";

  }
  else if(operator=="-"){
    final_value=parseFloat(value1)-parseFloat(value2);
    setinput_field(() => final_value);
    setHistoryfunc(value1,operator,value2,final_value);
    operator="";
  }
  else if(operator=="*"){
    final_value=parseFloat(value1)*parseFloat(value2);
    setinput_field(() => final_value);
    setHistoryfunc(value1,operator,value2,final_value);
    operator="";
  }
  else if(operator=="/"){
    final_value=parseFloat(value1)*parseFloat(value2);
    setinput_field(() => final_value);
    setHistoryfunc(value1,operator,value2,final_value);
    operator="";
  }
  else if(operator=="%"){
    console.log("%")
    final_value=parseFloat(value1)*(parseFloat(value2)/100);
    setinput_field(() => final_value);
    setHistoryfunc(value1,operator,value2,final_value);
    console.log(final_value)
    operator="";
  }
  
}
  return (
    <>
    <div className="header_bar rm-10 text-center font-extrabold text-3xl mt-20">Calculator</div>
    <div className="container_calc">
      <div className="calc">
      <div className="text_field">
        <input type="number" className="field" onChange={(e)=>{
          setinput_field(e.target.value);
          console.log(input_field);
        }} value={input_field} /></div>
        <div className="row1">
          <button onClick={()=>{
            setinput_field("");
          }}>AC</button>
          <button onClick={
            ()=>{
              setinput_field((input_field.toString()).slice(0,-1));
            }
          }>Back</button>
          <button onClick={()=>{
            setHistory([]);
            setinput_field("");
            
          }}>MClear</button>
          <button onClick={()=>digitAdd("/")}>/</button>
        </div>
        <div className="row2">
          <button onClick={()=>digitAdd(7)}>7</button>
          <button onClick={()=>digitAdd(8)}>8</button>
          <button onClick={()=>digitAdd(9)}>9</button>
          <button onClick={()=>digitAdd("*")}>*</button>
        </div>
        <div className="row3">
          <button  onClick={()=>digitAdd(4)}>4</button>
          <button  onClick={()=>digitAdd(5)}>5</button>
          <button onClick={()=>digitAdd(6)}>6</button>
          <button onClick={()=>digitAdd("-")}>-</button>
        </div>
        <div className="row4">
          <button onClick={()=>digitAdd(1)}>1</button>
          <button  onClick={()=>digitAdd(2)}>2</button>
          <button  onClick={()=>digitAdd(3)}>3</button>
          <button onClick={()=>digitAdd("+")}>+</button>
        </div>
        <div className="row5">
          <button onClick={()=>digitAdd("%")}>%</button>
          <button onClick={()=>digitAdd(0)}>0</button>
          <button onClick={()=>digitAdd(".")}>.</button>
          <button onClick={()=>showResult()}>=</button>
        </div>
      
      </div>
      <div className="history">
        <h2 >History</h2>
        <div className="historycard">
        {history.length > 0 ? history.map((value, index) => (
  <span >{value}</span>
)) : "No History"}
        </div>
      </div>
    </div>
    </>
  );
}

export default App;

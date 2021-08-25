import React,{useEffect, useState} from "react";
import Contents from "./components/Contents";
import Header from "./components/Header";
import Footer from "./components/Footer";
let dataArray=[];
let count=0;
function App() {
const [balance,setBalance]=useState(9.99);
const [message,setMessage]=useState("");
const [slotSym1,setSlotSym1]=useState([]);
const [tabledata,setTabledata]=useState([]);


const onStart=()=>{
  if(balance<2){
    setMessage("Insufficient funds !!! Press debug to add.");
  }
  else{
    const slot1=randomf()+"";
    const slot2=randomf()+"";
    const slot3=randomf()+"";
    const result=slot1+slot2+slot3;
    display(result);
    function score(result){
        const count=[];
        const scorec=[];
        count[0]=result.match(/0/g);
        count[1]=result.match(/1/g);
        count[2]=result.match(/2/g);
        count[3]=result.match(/3/g);
        for(let j=0;j<4;j++){
            if(count[j]!==null){
                scorec.push(count[j]);
            }
        }
        return(scorec.length);
    }

    const reward=score(result);
    if(reward===1 && result==="000"){
      setBalance(Math.round((balance+5.00-2.00)*100)/100);   
    }
    else if(reward===1&&result!=="000"){
      setBalance(Math.round((balance+2.00-2.00)*100)/100);
    }
    else if(reward===2){
      setBalance(Math.round((balance+0.50-2.00)*100)/100);
    }
    else{
      setBalance(Math.round((balance-2.00)*100)/100);
    }
  }  
}

function dataTable(res){
  let time= new Date().toLocaleTimeString().toString();
  let object={id:count,"result":res,"time":time}
  count=count+1;
  return object;
}

const addfunds=()=>{
  setMessage("");
  setBalance(Math.round((balance+5.00)*100)/100);
}

function display(result){
  const array=result.split("");
  const slots=[]
  for(let i=0;i<3;i++){
      if(array[i]==="0"){
          slots[i]='♠';
      }
      else if(array[i]==="1"){
        slots[i]="♥";
      }
      else if(array[i]==="2"){
        slots[i]="♣";
      }
      else if(array[i]==="3"){
        slots[i]="♦";
      }
  }
  setSlotSym1(slots);
  let res=slots.join("");
  dataArray.push(dataTable(res));
  
  
}

useEffect(()=>{
  setTabledata(dataArray);
},[balance,message,slotSym1,tabledata]);

const randomf=()=>{
  return(Math.floor(Math.random()*4));
}

  return(
    <div id="app">
      <Header balance={balance}/> 
      <Contents start={onStart} message={message} addbalance={addfunds} slot1={slotSym1} tabledata={tabledata}/>
      <Footer></Footer>
    </div>
  );
}

export default App;

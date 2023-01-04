
import React from 'react';

const getval=(e:React.MouseEvent<HTMLButtonElement>)=>{
    console.log("cloi" ,e)
}
const setshsval=(e:React.ChangeEvent<HTMLInputElement>)=>{
  console.log(e.target.value)
}


function Event() {
  return (
    <div className="App">
     Event
     <input type="text" placeholder="right" onChange={(e)=>setshsval(e)}/>
     <button onClick={(e)=>getval(e)}>click</button>
    </div>
  );
}

export default Event;

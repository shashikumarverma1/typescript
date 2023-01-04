import { type } from 'os';
import React from 'react';
type myprop={
    name:string ,
    age:number ,
    list :Array<number> ,
    children:React.ReactNode ,
    // style:React.CSSProperties ,
}


function Home(props:myprop) {
  return (
    <div className="App">
     Home
     {props.name}{props.age}
     <h1>{props.list[5]}</h1>
     <h3>{props.children}</h3>
     {/* <h2>{props.style.color}</h2> */}
    </div>
  );
}

export default Home;

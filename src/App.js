import React, { useState } from 'react';
import Tweet from './Tweet'
import './App.css'

 
function App(){

  const [ isRed, setRed]=useState(false);
  const [count, setCount]=useState(0);

  // const increment=()=>{
  //   setCount(count+1);
  //   setRed(true)
  // }

  const handleClick=(event)=>{
    event.preventDefault();
    event.target.style.color= 'red'
    console.log(event.target);
 
  }

  return(
    <div>
      <div className="boxes" onClick={ handleClick }>
        <Tweet name="Dev ED" message="This is a random tweet"/>
        <Tweet name="john snow"  message="I am the true king"/>
        <Tweet name="traversy media"  message="700k my dudes"/>
        <Tweet name="MOSH"  message="My new course is available" />
      </div>
      
      {/* <div className="changebtn">
        <h1 className={ isRed ? 'red': ""}>Change my colour</h1>
        <button onClick={ handleClick }>Change Value</button>
        <h1>{ count }</h1>
      </div> */}
    </div>
    
    
  );
}

export default App;

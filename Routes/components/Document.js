import React, { useState } from 'react';

function Example() {
  // Declare a state variable 'count' with an initial value of 0

  const [details, setDetails] = useState({ count:0,text:"rubab"});

  // Function to increment the count
  
 function countervalue(){
  
    setDetails((purani )=>{ 
        console.log(purani);
        return{
            ...purani, // '...'  ya jo previous value hote ha us ko copy kar leta ha 
            count: purani.count + 1,
        }
   
    });

  }
    function handleTextChange(e){
      setDetails((purani)=>{
        return{
            ...purani,
            text: e.target.value
        }

      })

    }

  return (
    <div>
      
      <p>Count: {details.count}</p> 
      <input  type='text' value={details.text} onChange={handleTextChange}/>
      <h1>{details.text}was clicked {details.count} time</h1>
      <button onClick={countervalue}>Increment</button>
    </div>
  );
}
export default Example;
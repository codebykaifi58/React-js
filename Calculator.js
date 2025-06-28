import React from 'react';
import  '../App.css';
import { useState,useEffect } from 'react'; //useState ka use kiya gaya hai input value ko store karne ke liye — yani calculator ka screen pe kya dikhana hai.


function Calculator(){
    const [Inputvalue,setvalue] = useState(''); //Ek state banayi gayi hai Inputvalue naam ki, jo initially khali hai (''). Jab user koi button dabata hai, to uss state ko update kiya jata hai using setvalue().
  const Button = [ 
        ['AC','()', '%', '/'], //Yeh ek 2D array hai jo sab buttons ka layout define karta hai — har row mein 4 buttons hain. Jaise calculator mein hota hai.
        ['7','8','9','*'],
        ['4','5','6','-'],
        ['1','2', '3', '+'],
        ['0','.', 'DEL', '=']
    ];

    function getValue(btnvalue){
        console.log(btnvalue);
       if(btnvalue === 'AC'){ // Agar button "AC" ho: → poora input clear kar do.
           setvalue('');
       }else if(btnvalue === 'DEL'){  // Agar button "DEL" ho: explain below row → last character remove karo.
            setvalue(Inputvalue.slice(0,-1)); // agr ham slice ke right side value ko -1 sa or kam kary ga to wo utne he character right side sa remove kary ga
       }                                      // or agr ham left side wale value ko 0 sa ziyada kary ga to wo utne he character left side sa bhi remover kary ga
        else if(btnvalue === '='){ //  Agar "=" ho:
            setvalue(eval(Inputvalue).toString()); // → eval() ka use karke expression solve karo (jaise "4+5" → "9").
       }   
       else{ 
         setvalue (Inputvalue + btnvalue);// Baaki har case mein: → button ka value current input ke end mein jor do (concatenate).
       }
    }
    return(
        
            <div className="calculator-main">
                <div className="cal-part">
                    <div className="inputArea">
                        <input type="text" value={Inputvalue}/>
                    </div>
                    <div className="btnArea">
                       {
                             Button.map((btn,index)=>(
                               <div className='row'>
                                <div className='col-md-4'>
                                        <button key={index} onClick={()=>getValue(btn[0])}>{btn[0]}</button>
                                        <button key={index} onClick={()=>getValue(btn[1])}>{btn[1]}</button>
                                        <button key={index} onClick={()=>getValue(btn[2])}>{btn[2]}</button>
                                        <button key={index} onClick={()=>getValue(btn[3])}>{btn[3]}</button>
                                    </div>
                               </div>   
                            ))
                       }
                    </div>
                </div>
            </div>
        
    )
}
export default Calculator;
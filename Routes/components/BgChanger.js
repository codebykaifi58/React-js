import { useState } from "react";

function BgChanger(){
    const [bgchanger,setcolor] = useState('white');
    return(
        <div style={{width:'100vw',height:'100vh',background:bgchanger,}}>
            <button onClick={()=>setcolor('blue')} style={{background:'blue',color:'white'}}>Blue</button>
            <button onClick={()=>setcolor('green')} style={{background:'green', color:'white'}}>Green</button>
            <button onClick={()=>setcolor('yellow')} style={{background:'yellow',color:'black'}}>Yellow</button>
            <button onClick={()=>setcolor('purple')} style={{background:'purple', color:'white',}}>Purple</button>
            <button onClick={()=>setcolor('red')} style={{background:'red'}}>Red</button>
            <button onClick={()=>setcolor('orange')} style={{background:'orange'}}>Orange</button>
            <button onClick={()=>setcolor('gray')} style={{background:'gray'}}>Gray</button>
            <button onClick={()=>setcolor('black')} style={{background:'black'}}>Black</button>
            <button onClick={()=>setcolor('brown')} style={{background:'brown'}}>Brown</button>
        </div>
    )
}
export default BgChanger;
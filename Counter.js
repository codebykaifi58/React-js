import {use,useState} from 'react'

function Counter(){
    const [counter,setcolor] = useState(0);
    return(
        <>
            <div className="cotainer-fluid">
                <div className="container">
                    <div className="row">
                        <div style={{width:'50px',height:'50px',background:'green',textAlign:'center'}}>
                            <p style={{color:'black'}}>{counter}</p>
                        </div>
                        <div>
                            <button onClick={()=>setcolor(counter-1)}>subtract</button>
                            <button onClick={()=>setcolor(counter+1)}>Additon</button>
                            <button onClick={()=>setcolor(counter*0)}> Reset </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Counter;
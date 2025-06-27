import React from 'react'

function Practice(Props){
    const Array = [
        {name : 'Kaif', Detail : "i am a Web Developer."},
        {name : 'Aliza', Detail : "i am a Web Developer."},
        {name : 'Sani', Detail : "i am a Web Developer."},
        {name : 'Ansa', Detail : "i am a Web Developer."},
    ]
    return(
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        {
                            Array.map((data,index)=>(
                                <div className="col-3">
                                    <div className="card">
                                        <div className="card-header">
                                            <h1> {data.name}</h1>
                                        </div>
                                        <div className="card-body">
                                            <p>{data.Detail}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Practice;
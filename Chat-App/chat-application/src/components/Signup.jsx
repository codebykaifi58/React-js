import React, { useEffect } from "react";
import {useState} from 'react';
function Signup(){
 const [sign,setsign] = useState("Sign Up");

 const [Username, setUsername] = useState("");
 const [Email, setEmail] = useState("");
 const [Phone, setPhone] = useState("");
 const [Password, setPassword] = useState("");
 const [ConfPassword, setConfPassword] = useState("");
 
  const handlesubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost/react-js/Chat-App/back-end/Registered.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: Username,
        email: Email,
        phone: Phone,
        password: Password,
      }),
    })
    .then(async res => {
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error("Bad response: " + errorText);
  }
  return res.json();
})
.then(data => {
  console.log("Response from PHP:", data);
})
.catch(err => {
  console.error("Error:", err.message);
});

  };
    return(
        <>
            <div className="main">
                <div className="signup-back">
                    <form className="form px-4" onSubmit={handlesubmit}>
                        <h1>{sign}</h1>
                        <div className="input-group mb-3">
                             <span className="input-group-text"><i className="bi bi-person"></i></span>
                             <div className="form-floating">
                                <input 
                                   type="text" 
                                   className="form-control shadow-none" 
                                   id="floatingInputGroup1"
                                   placeholder="Username"
                                   value={Username} 
                                   onChange={(e)=> setUsername(e.target.value)}
                                    />
                                <label htmlFor="floatingInputGroup1">Username</label>
                             </div>
                        </div>
                        {sign === "Sign Up" &&(
                            <div className="input-group mb-3">
                                <span className="input-group-text"><i className="bi bi-envelope-fill"></i></span>
                                <div className="form-floating">
                                    <input 
                                        type="email" 
                                        className="form-control shadow-none" 
                                        id="floatingInputGroup1" 
                                        placeholder="Email"
                                        value={Email}
                                        onChange={(e)=> setEmail(e.target.value)}
                                        />
                                    <label htmlFor="floatingInputGroup1">Email</label>
                                </div>
                            </div>
                        )}
                        {sign === "Sign Up" &&(
                            <div className="input-group mb-3">
                                 <span className="input-group-text"><i className="bi bi-telephone-fill"></i></span>
                                 <div className="form-floating">
                                  <input 
                                    type="number" 
                                    className="form-control shadow-none" 
                                    id="floatingInputGroup1" 
                                    placeholder="Number"
                                    value={Phone}
                                    onChange={(e)=>setPhone(e.target.value)}
                                    />
                                  <label htmlFor="floatingInputGroup1">Number</label>
                                </div>
                             </div>
                        )}
                        <div className="input-group mb-3">
                             <span className="input-group-text"><i className="bi bi-person-fill-lock"></i></span>
                             <div className="form-floating">
                                <input 
                                    type="password" 
                                    className="form-control shadow-none" 
                                    id="floatingInputGroup1" 
                                    placeholder="Password"
                                    value={Password}
                                    onChange={(e)=> setPassword(e.target.value)}
                                    />
                                <label htmlFor="floatingInputGroup1">Password</label>
                             </div>
                        </div>
                        {sign ==="Sign Up" && (
                            <div className="input-group mb-3">
                             <span className="input-group-text"><i className="bi bi-person-fill-lock"></i></span>
                             <div className="form-floating">
                                <input 
                                    type="password" 
                                    className="form-control shadow-none" 
                                    id="floatingInputGroup1" 
                                    placeholder="confirm Password"
                                    value={ConfPassword}
                                    onChange={(e)=> setConfPassword(e.target.value)}
                                    />
                                <label htmlFor="floatingInputGroup1">Confirm Password</label>
                             </div>
                        </div>
                        )}
                        <button className="btn btn-dark w-100 round-5" type="submit">Submit</button>
                        <p>
                            {sign === "Sign Up" ? "Already have an acount ?" : "Don't have an acount?"}
                            <span className="link" onClick={()=>{setsign(sign === "Sign Up" ? "Login" : "Sign Up")}}>
                                {sign === "Sign Up" ? "Login" : "Sign Up"}
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Signup;
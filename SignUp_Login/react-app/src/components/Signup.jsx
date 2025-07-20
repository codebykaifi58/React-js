import React from "react";
import {useState} from 'react';
function Signup(){
 const [sign,setsign] = useState("Sign Up");

 
 
    return(
        <>
            <div className="main">
                <div className="signup-back">
                    <form className="form px-4">
                        <h1>{sign}</h1>
                        <div className="input-group mb-3">
                             <span className="input-group-text"><i class="bi bi-person"></i></span>
                             <div className="form-floating">
                                <input type="text" className="form-control shadow-none" id="floatingInputGroup1" placeholder="Username"/>
                                <label for="floatingInputGroup1">Username</label>
                             </div>
                        </div>
                        {sign === "Sign Up" &&(
                            <div className="input-group mb-3">
                                <span className="input-group-text"><i class="bi bi-envelope-fill"></i></span>
                                <div className="form-floating">
                                    <input type="email" className="form-control shadow-none" id="floatingInputGroup1" placeholder="Username"/>
                                    <label for="floatingInputGroup1">Email</label>
                                </div>
                            </div>
                        )}
                        {sign === "Sign Up" &&(
                            <div className="input-group mb-3">
                                 <span className="input-group-text"><i class="bi bi-telephone-fill"></i></span>
                                 <div className="form-floating">
                                  <input type="number" className="form-control shadow-none" id="floatingInputGroup1" placeholder="Username"/>
                                  <label for="floatingInputGroup1">Number</label>
                                </div>
                             </div>
                        )}
                        <div className="input-group mb-3">
                             <span className="input-group-text"><i class="bi bi-person-fill-lock"></i></span>
                             <div className="form-floating">
                                <input type="password" className="form-control shadow-none" id="floatingInputGroup1" placeholder="Username"/>
                                <label for="floatingInputGroup1">Password</label>
                             </div>
                        </div>
                        {sign ==="Sign Up" && (
                            <div className="input-group mb-3">
                             <span className="input-group-text"><i class="bi bi-person-fill-lock"></i></span>
                             <div className="form-floating">
                                <input type="password" className="form-control shadow-none" id="floatingInputGroup1" placeholder="Username"/>
                                <label for="floatingInputGroup1">Confirm Password</label>
                             </div>
                        </div>
                        )}
                        <button className="btn btn-dark w-100 round-5">Submit</button>
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
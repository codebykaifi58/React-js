
import {useState,useEffect} from 'react';
function Signup(){
    const [sign,setsign] = useState("Sign Up");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [userdata, setuserdata] = useState([]);

const handlesubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost/React-js/Chat-App/back-end/Registered.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        phone,
        password,
        confPassword, // must match key in PHP
      }),
    });

    const data = await res.json();
    alert(data.message);

    if (data.success) {
      // Reset form after successful signup
      setUsername("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfPassword("");
      if(sign === "Sign Up") setsign("Login");// agr signup ho jae to wo login mode ma a jae ga
    }

  } catch (err) {
    console.error("Server error:", err);
    alert("Something went wrong!");
  }
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
                                   value={username} 
                                   onChange={(e)=> setUsername(e.target.value)}
                                    />
                                <label htmlFor="floatingInputGroup1">Username</label>
                             </div>
                        </div>
                      {sign === "Sign Up" ? 
                            <div className="input-group mb-3">
                                <span className="input-group-text"><i className="bi bi-envelope-fill"></i></span>
                                <div className="form-floating">
                                    <input 
                                        type="email" 
                                        className="form-control shadow-none" 
                                        id="floatingInputGroup1" 
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e)=> setEmail(e.target.value)}
                                        />
                                    <label htmlFor="floatingInputGroup1">Email</label>
                                </div>
                            </div> : null
                        }
                        {sign === "Sign Up" ?
                            <div className="input-group mb-3">
                                 <span className="input-group-text"><i className="bi bi-telephone-fill"></i></span>
                                 <div className="form-floating">
                                  <input 
                                    type="number" 
                                    className="form-control shadow-none" 
                                    id="floatingInputGroup1" 
                                    placeholder="Number"
                                    value={phone}
                                    onChange={(e)=>setPhone(e.target.value)}
                                    />
                                  <label htmlFor="floatingInputGroup1">Number</label>
                                </div>
                             </div> :null
                        }
                        <div className="input-group mb-3">
                             <span className="input-group-text"><i className="bi bi-person-fill-lock"></i></span>
                             <div className="form-floating">
                                <input 
                                    type="password" 
                                    className="form-control shadow-none" 
                                    id="floatingInputGroup1" 
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e)=> setPassword(e.target.value)}
                                    />
                                <label htmlFor="floatingInputGroup1">Password</label>
                             </div>
                        </div>
                        {sign ==="Sign Up" ?
                            <div className="input-group mb-3">
                             <span className="input-group-text"><i className="bi bi-person-fill-lock"></i></span>
                             <div className="form-floating">
                                <input 
                                    type="password" 
                                    className="form-control shadow-none" 
                                    id="floatingInputGroup1" 
                                    placeholder="confirm Password"
                                    value={confPassword}
                                    onChange={(e)=> setConfPassword(e.target.value)}
                                    />
                                <label htmlFor="floatingInputGroup1">Confirm Password</label>
                             </div>
                        </div> :null
                        }
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
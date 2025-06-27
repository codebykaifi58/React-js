import React from "react";
import { Link } from "react-router-dom";
import  '../App.css';
function Navbar(){
    return(
        <>
            <div className="navbar">
                <ul>
                    <li><Link to="practice">Props</Link></li>
                    <li><Link to="bgchanger">Bg Changer</Link></li>
                    <li><Link to="Document">Document</Link></li>
                    <li><Link to="counter">Counter</Link></li>
                </ul>
            </div>
        </>
    )
}
export default Navbar;
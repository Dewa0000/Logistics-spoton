import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../image/logo.png"
import "./Header.css"
const Header = () => {
    
    const menubtn=() => {
        
        console.log("menu button clicked");
    }

    const [DC, setDC] = useState("DC");

    function dcChange(event){
        setDC(event.target.value);
    }
    console.log(DC);
    return (
            <div className="outer-main">
            <div className="input-type">
                <img id = "image" src={logo} alt="Logo" />
                <span id="myH1">Spoton<br></br>Logistics</span>
                <span id = "menuIcon" onClick={menubtn} class="material-symbols-outlined">widgets</span>
           <select id="Ctype"  onClick={dcChange} placeholder="Center Type">
               <option value="">Select an Option</option>
               <option value="Hub">Hub</option>
               <option value="DC">DC</option>
               <option value="IPC">IPC</option>
           </select>
           <input id="Cname" type="text" placeholder="Center Name"></input>
           <span class="material-symbols-outlined">edit</span>
           <select id="Stype"  placeholder="Shipment Type">
               <option value="Waybill">Waybill</option>
               <option value="OrderID">Order ID</option>
               <option value="LRno">LR No.</option>
           </select>
           <input id="SNo" type="number" placeholder="Shipment"></input>
           <h1 id="myNN">DS</h1>
           <select id="Stype">
              <option>Dewashish Sahu</option>
           </select>
           </div>
           <nav className="navbar">
            <Link  to = {"/"} className="tab">Overview</Link>
            <Link  to = {"/Live"} className="tab">Live Dispatches</Link>
            <Link  to = {"/Live"} className="tab">Expected Load</Link>
           </nav>
            </div>
        
    );
}

export default Header;

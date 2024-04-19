import React from "react";
import "./Body.css";
import { useState, useEffect } from "react";
import Cards from "../../Common/Cards/Cards";
import useFetch from "../Fetch/Fetch";
import { Link } from "react-router-dom";

const Body = () => {

   const {value,loading,error} = useFetch("http://localhost:3000/delivery_centers");

    const handleClick = () => {
      console.log("clicked")
    }

    return (
        <div className="container">
            <h1 id="myTD">To Be Dispatched</h1>
            <hr></hr>
            
            <button className="Dbtn" onClick= {handleClick}>LM</button>          
            <button className="Dbtn">FM</button>
            <button className="Dbtn">RT</button>
            <br></br><br></br>
            <div className="report">
                
                <span>  
                    {error && <div>{error}</div>}
                    {loading && <div>Loading...</div>}  
                    <h2 id="r4">{value && value.map(shipments => 
                    <Link to={`/Live/${shipments.id}`}>
                        <span key={shipments.id}>{shipments.location.capacity}</span>
                    </Link>
                    )}</h2>
                    <label htmlFor="r4">Shipments</label>
                </span>
                <span className="rBtn">
                    <h2 id="r1">1</h2>
                    <label htmlFor="r1">WIP</label>
                </span>
                <span className="rBtn">
                    <h2 id="r2">1</h2>
                    <label htmlFor="r2">Flash</label>
                </span>
                <span className="rBtn">
                    <h2 id="r3">1</h2>
                    <label htmlFor="r3"></label>
                </span>
            </div>
            <div className="graph">
                <ul className="status">
                    <li>
                        <span class="progress"></span>
                        Forward
                    </li>
                    <li>
                        <span class="progress"></span>
                        BFSI
                    </li>
                    <li>
                        <span class="progress"></span>
                        Reattempt
                    </li>
                    <li>
                        <span class="progress"></span>
                        Reverse
                    </li>
                    <li>
                        <span class="progress"></span>
                        KYC
                    </li>
                    <li>
                        <span class="progress"></span>
                        C2C
                    </li>
                </ul>
                <div className="dsbtn">
                    <h1 id="cdBtn">CREATE DISPATCH</h1>
                    <span id="arrow" class="material-symbols-outlined">arrow_forward_ios</span>
                </div>
            </div>
            <Cards />
        </div>
    
    )
}

export default Body;
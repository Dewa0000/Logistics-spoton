import React from "react";
import "./Cards.css";

const Cards = () => {
    return(
      <div className="card">
        <h1>Today's Performance</h1>
        <hr></hr>
        <h2>LM</h2>
        <div className="LM">  
        <span>   
        <h3>100 %</h3>
        <h3>Dispatch %</h3>
        </span>
        <span>
        <h3>0.32 %</h3>
        <h3>Closure %</h3>
        </span>
        <span>
        <h3>2.50 %</h3>
        <h3>FDDS %</h3>
        </span>
        <span>
        <h3>0.00 %</h3>
        <h3>COD FDDS %</h3>
        </span>
        <span>
        <h3>0.00 %</h3>
        <h3>FDPS %</h3>
        </span>
        </div>
        <h2>FM</h2>
        <div className="FM">
          <span>
          <h3>100 %</h3>
          <h3>Dispatch %</h3>
          </span>
          <span>
          <h3>100 %</h3>
          <h3>Closure %</h3>
          </span>
        </div>
        <h2>RT</h2>
        <div className="RT">
          <span>
          <h3>100 %</h3>
          <h3>Dispatch %</h3>
          </span>
          <span>
          <h3>100 %</h3>
          <h3>Closure %</h3>
          </span>
        </div>
      
      </div>
    );
}

export default Cards;
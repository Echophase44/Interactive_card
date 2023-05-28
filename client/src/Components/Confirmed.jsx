import React from "react";
import checkmark from "../assets/icon-complete.svg"
import "../styles/confirmed.css"

function Confirmed(){

  return(
    <div className="confirmed-container">
      <img src={checkmark} alt="Checkmark" className="confirmed-checkmark"/>
      <p className="confirmed-thanks">THANK YOU!</p>
      <span className="confirmed-message">We've added your card details</span>
      <button className="confirmed-button">Continue</button>
    </div>
  )
}

export default Confirmed
import React from "react";
import '../styles/form.css'

function Form() {

  return(
    <form className="form-main" action="">
      <label htmlFor="name">CARDHOLDER NAME</label>
      <input className="form-name"
        id="name"
        type="text" 
        name="name"
        placeholder="e.g. Jane Appleseed"
        required
      />

      <label htmlFor="number">CARD NUMBER</label>
      <input className="form-cardNumber"
        id="number"
        type="number"
        name="number"
        placeholder="e.g. 1234 5687 9123 0000"
        required
      />

      <div className="form-wrapper">
        
        <div className="columnWrapper">
          <label htmlFor="expMonth">EXP. DATE (MM/YY)</label>
          <div className="innerExpWrapper">
            <input 
              id="expMonth"
              type="number"
              name="expMonth"
              placeholder="MM"
              required
            />
            <input 
              id="expYear"
              type="number"
              name="expYear"
              placeholder="YY"
              required
            />
          </div>
        </div>

        <div className="columnWrapper">
        <label htmlFor="cvc">CVC</label>
        <input 
          id="cvc"
          type="number"
          name="expMonth"
          placeholder="e.g. 123"
          required
        />
        </div>
      </div>

    </form>
  )
}

export default Form
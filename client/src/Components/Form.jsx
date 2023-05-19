import React from "react";
import { useState } from "react";
import '../styles/form.css'

function Form() {
  const initialValues = {name: "", number: "", expMonth: "", expYear: "", cvc: ""}
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})

  const handleChange = (e) => {
    
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validation(formValues))
  }

  const validation = (values) => {
    const errors = {}
    if(!values.name){
      errors.name = "Please enter name on the card."
    } else if (/\d+/g.test(values.name)){
      errors.name = "Numbers are not a valid input."
    }
    return errors
  }

  console.log(formErrors)

  return(
    <form className="form-main" onSubmit={handleSubmit}>
      <label htmlFor="name">CARDHOLDER NAME</label>
      <input className="form-name"
        id="name"
        type="text" 
        name="name"
        placeholder="e.g. Jane Appleseed"
        value={formValues.name}
        onChange={handleChange}
        
      />
      <p>{formErrors.name}</p>

      <label htmlFor="number">CARD NUMBER</label>
      <input className="form-number"
        id="number"
        type="number"
        name="number"
        placeholder="e.g. 1234 5687 9123 0000"
        value={formValues.number}
        onChange={handleChange}
        required
      />

      <div className="form-wrapper">

        <div className="columnWrapper">
          <label htmlFor="expMonth">EXP. DATE (MM/YY)</label>
          <div className="innerExpWrapper">
            <input className="form-month"
              id="expMonth"
              type="number"
              name="expMonth"
              placeholder="MM"
              value={formValues.expMonth}
              onChange={handleChange}
              required
            />
            <input className="form-year"
              id="expYear"
              type="number"
              name="expYear"
              placeholder="YY"
              value={formValues.expYear}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="columnWrapper">
        <label htmlFor="cvc">CVC</label>
        <input className="form-cvc"
          id="cvc"
          type="number"
          name="cvc"
          placeholder="e.g. 123"
          value={formValues.cvc}
          onChange={handleChange}
          required
        />
        </div>
      </div>
      <button type="submit" className="form-btn">Submit</button>

    </form>
  )
}

export default Form
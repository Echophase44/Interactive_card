import React from "react";
import { useState } from "react";
import '../styles/form.css'

function Form(props) {
  const { setCardDisplayInfo, setIsConfirmed } = props

  const initialValues = {name: "", number: "", expMonth: "", expYear: "", cvc: ""}
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})

    if(name === "number"){
      setCardDisplayInfo(prevInfo => ({
        ...prevInfo,
        [name]: new Array(value)
      }))
    } else {
    setCardDisplayInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }))}
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validation(formValues))
  }

  const validation = (values) => {
    const errors = {}
    let date = new Date()
    let month = date.getMonth() + 1;
    let year = date.getFullYear()
    let yearDiff = Number(year.toString().charAt(0) + year.toString().charAt(1) + values.expYear) - year
    console.log(month)

    if(!values.name){
      errors.name = "Please enter name on the card."
    } else if (/\d+/g.test(values.name)){
      errors.name = "Numbers are not a valid input."
    }

    if(!values.number){
      errors.number = "Field cannot be blank."
    } else if (!/^[0-9]*$/.test(values.number)){
      errors.number = "Wrong format, numbers only."
    }

    if(!values.expMonth || !values.expYear){
      errors.expMonth = "Field cannot be blank."
    } else if (!/^[0-9]*$/.test(values.expMonth) || !/^[0-9]*$/.test(values.expYear)){
      errors.expMonth = "Wrong format, numbers only."
    }

    if(values.expMonth === "00" || Number(values.expMonth) > 12){
      errors.expMonth = "Invalid Month."
    }

     if(Number("23" + values.expYear) < year){
      errors.expMonth = "Card has expired."
     } else if (yearDiff > 5 || yearDiff < 0) {
      errors.expMonth = "Invalid year."
     }

     if(!values.cvc){
      errors.cvc = "Field cannot be blank."
     } else if(!/^[0-9]*$/.test(values.cvc)){
      errors.cvc = "Wrong format, numbers only."
     }

     if(Object.keys(errors).length === 0){
      setIsConfirmed(true)
      }
    
    return errors

    
  }

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
        type="text"
        name="number"
        placeholder="e.g. 1234 5687 9123 0000"
        value={formValues.number}
        onChange={handleChange}
        maxLength={16}
      />
      <p>{formErrors.number}</p>

      <div className="form-wrapper">

        <div className="columnWrapper">
          <label htmlFor="expMonth">EXP. DATE (MM/YY)</label>
          <div className="innerExpWrapper">
            <input className="form-month"
              id="expMonth"
              type="text"
              name="expMonth"
              placeholder="MM"
              value={formValues.expMonth}
              onChange={handleChange}
              maxLength={2}
            />
            
            <input className="form-year"
              id="expYear"
              type="text"
              name="expYear"
              placeholder="YY"
              value={formValues.expYear}
              onChange={handleChange}
              maxLength={2}
            />
          </div>
          <p>{formErrors.expMonth}</p>
        </div>

        <div className="columnWrapper">
        <label htmlFor="cvc">CVC</label>
        <input className="form-cvc"
          id="cvc"
          type="text"
          name="cvc"
          placeholder="e.g. 123"
          maxLength={4}
          value={formValues.cvc}
          onChange={handleChange}
        />
        <p>{formErrors.cvc}</p>
        </div>
      </div>
      <button type="submit" className="form-btn">Confirm</button>

    </form>
  )
}

export default Form
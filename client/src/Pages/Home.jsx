import React from "react";
import { useState } from "react";
import Form from '../Components/Form.jsx'
import bg_desktop from '../assets/bg-main-desktop.png'
import card_front from '../assets/bg-card-front.png'
import card_back from '../assets/bg-card-back.png'
import cardLogo from '../assets/card-logo.svg'

function Home () {
  const [cardInfo, setCardInfo] = useState({
    number: ["0000000000000000"],
    exp: ['0000'],
    firstName: "JANE",
    LastName: "APPLESEED",
    security: ["000"]
  })

  const displayCardNumber = cardInfo.number.map((value) =>{
    const groupOne = value.slice(0, 4)
    const groupTwo = value.slice(4,8)
    const groupThree = value.slice(8, 12)
    const groupFour = value.slice(12)

    return(
      <div className="card-number">{groupOne}&nbsp;&nbsp;{groupTwo}&nbsp;&nbsp;{groupThree}&nbsp;&nbsp;{groupFour}</div>
    )
  })

  return (
    <main>
      <div className="imageContainer">
        <img className="imageBackround" src={bg_desktop} alt="Background" />
        <div className="card-front" style={{backgroundImage:"url(" + card_front + ")"}}>
          <img className="card-logo" src={cardLogo} alt="Card Logo" />
          {displayCardNumber}
          <span className="card-name">JANE APPLESEED</span>
          <span className="card-exp"> 00/00</span>
        </div>

        <div className="card-back" style={{backgroundImage:"url(" + card_back + ")"}}>
          <span className="card-security">{cardInfo.security[0]}</span>
        </div>
      </div>
     
     <section className="infoContainer">
      <Form />

     </section>

     
    </main>
  )
}

export default Home
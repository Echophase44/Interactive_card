import React from "react";
import { useState } from "react";
import Form from '../Components/Form.jsx'
import bg_desktop from '../assets/bg-main-desktop.png'
import card_front from '../assets/bg-card-front.png'
import card_back from '../assets/bg-card-back.png'
import cardLogo from '../assets/card-logo.svg'

function Home () {
  const [cardDisplayInfo, setCardDisplayInfo] = useState({
    number: ["0000000000000000"],
    expMonth: ['00'],
    expYear: ['00'],
    name: "jane appleseed",
    cvc: ["000"]
  })

  const [isConfirmed, setIsConfirmed] = useState(false)

  const displayCardNumber = cardDisplayInfo.number.map((value) =>{
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
        {/* <img className="imageBackround" src={bg_desktop} alt="Background" /> */}
        <div className="imageBackround"></div>
        <div className="card-front" style={{backgroundImage:"url(" + card_front + ")"}}>
          <img className="card-logo" src={cardLogo} alt="Card Logo" />
          {displayCardNumber}
          <span className="card-name">{cardDisplayInfo.name?.toUpperCase()}</span>
          <span className="card-exp"> {cardDisplayInfo.expMonth}/{cardDisplayInfo.expYear}</span>
        </div>

        <div className="card-back" style={{backgroundImage:"url(" + card_back + ")"}}>
          <span className="card-security">{cardDisplayInfo.cvc}</span>
        </div>
      </div>
     
     <section className="infoContainer">
      {!isConfirmed && <Form 
        setCardDisplayInfo = { setCardDisplayInfo }
        setIsConfirmed = { setIsConfirmed }
      />}

      {isConfirmed && <div>Hola</div>}

     </section>

     
    </main>
  )
}

export default Home
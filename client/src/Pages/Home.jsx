import React from "react";
import bg_desktop from '../assets/bg-main-desktop.png'
import card_front from '../assets/bg-card-front.png'
import card_back from '../assets/bg-card-back.png'

function Home () {

  return (
    <main>
      <div className="imageContainer">
        <img className="imageBackround" src={bg_desktop} alt="Background" />
        <div className="card-front" style={{backgroundImage:"url(" + card_front + ")"}}>
          
        </div>
        <div className="card-back" style={{backgroundImage:"url(" + card_back + ")"}}>

        </div>
      </div>
     
     <section>


     </section>

     
    </main>
  )
}

export default Home
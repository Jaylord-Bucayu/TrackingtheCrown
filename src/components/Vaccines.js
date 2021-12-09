import React from 'react'

const Vaccines = ()=>{
    return(
        <div class="Vaccines">
            <h2>Top Vaccines</h2>
           <div class="vaccines-items">
          <div class="vaccine-img">  <img src={process.env.PUBLIC_URL + 'images/vaccines/astra_logo.png'}   alt="country_image"/></div>
          <div class="vaccine-img">  <img src={process.env.PUBLIC_URL + 'images/vaccines/moderna_logo.jpg'} alt="country_image" /></div>
          <div class="vaccine-img">  <img src={process.env.PUBLIC_URL + 'images/vaccines/sino_logo.png'}    alt="country_image" /></div>
          <div class="vaccine-img">  <img src={process.env.PUBLIC_URL + 'images/vaccines/pfixer_logo.png'}  alt="country_image" /></div>
        </div>
        </div>
        

    )

}

export default Vaccines;
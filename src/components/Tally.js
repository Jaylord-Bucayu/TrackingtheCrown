import React from 'react'


const Tally = ({country})=>{
    return(
        <div class="Tally">

            <div class="tally-wrap">
                <div class="tally-wrap_left">
                <img src={process.env.PUBLIC_URL + 'images/covid.png'} />
                </div>
                <div class="tally-wrap_right">
                    <div class="tally-wrap_right_head">Countries Report</div>
                    <div class="tally-wrap_right_body" >
                        {country.slice(0,7).map((countries) => {
                            return( <div class="tally-wrap_right_body-item">
                                <div class="tally-wrap_right_body-item-el">
                                    
                                <img src={`https://flagcdn.com/w20/${countries.code.toLowerCase()}.png`} srcset={`https://flagcdn.com/w40/${countries.code.toLowerCase()}.png`} width="40" height="35" alt={`${countries.code}`}/>
                                <p> {countries.name}</p>
                                    </div>
                                   
                                   <p> {countries.totalConfirm}</p>
                            </div>)
                        })}
                       
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Tally;
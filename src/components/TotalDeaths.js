import React from 'react'

const TotalDeaths = ({value}) => {
    return (
        <div className="grid-row total-deaths">
             
               <div className="title-top">   <h2>Total Deaths</h2> </div>
                <p>{value}</p>
        </div>
    )
}

export default TotalDeaths

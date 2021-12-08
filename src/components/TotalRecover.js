import React from 'react'

const TotalRecover = ({value}) => {
    return (
        <div className="grid-row total-recovered">
            <h2>Total Recovered</h2>
                <p>{value}</p>
        </div>
    )
}

export default TotalRecover

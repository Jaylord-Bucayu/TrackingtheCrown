import React from 'react'

const TotalConfirmed = ({value}) => {
    return (
        <div className="total-confirmed">
            <h2>Total Confirmed Cases</h2>
            <p>{value}</p>
        </div>
    )
}

export default TotalConfirmed

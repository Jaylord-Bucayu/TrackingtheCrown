import React from 'react'
import {Bar} from 'react-chartjs-2';
const Chart = ({country}) => {

    
  const state = {
    labels: 

        country.map((m) => 
            m.name
        )
    ,
    datasets: [
      {
        label: 'Total Cases',
        backgroundColor: '#EB4983',
        borderColor: 'lightgray',
        borderWidth: 2,
        data:  country.map((m) => 
        m.totalConfirm
    )
      }
    ]
  }
  

    return (
        <div className="container">
        <Bar
         data={state}
         options={{
           title:{
             display:true,
             text:'Cases per Day',
             fontSize:20
           },
           legend:{
             display:true,
             position:'right'
           }
         }}
       />
        </div>
    )
}

export default Chart

import React from 'react'
import { FcExpand,FcCollapse,FcGlobe } from "react-icons/fc";

const Selection = ({countries, onChange,show,toggleOption,defaultSelected}) => {
    return (
        
        <div className="selection">
            
            <p>Stats Overview</p>
                {/* <select onChange={onChange}>
                    <option defaultValue> Global</option>
                    {countries.map((country) => (
                    <option key={country.ID}>{country.Country}</option>) )}
                </select> */}

                <div className="select" >
                        <p>{defaultSelected}</p>
                        <button onClick={toggleOption}> {show ?  <FcCollapse/> :  <FcExpand/>}</button>
                    
                </div>

                
                <div className={show ? 'close' : 'option'}>
                    <ul>
                        <li> <FcGlobe/> Global </li>
                    {countries.map((country) => (
                    <li key={country.ID} onClick={onChange}> 
                  
                    {/* <img src={`https://www.flagscdn.com/12x12/${country.countryCode}.png`} /> */}
                      {country.Country}</li>) )}


              
                       
                    </ul>
                </div>
        </div>
    )
}

export default Selection

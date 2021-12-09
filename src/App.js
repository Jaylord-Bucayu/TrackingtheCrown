import React,{useEffect,useState} from 'react'
import './App.scss';

import Nav from './components/Nav';
import Tally from './components/Tally';
import Vaccines from './components/Vaccines';





const App = () => {

    useEffect(() => {
        getApi();
        // getNews();
      
     
       
    },[]
    );
    
    const [country,setCountry] = useState([]);
    const [deaths,setDeaths] = useState(''); 

      const [defaultSelected,setdefaultSelected] = useState('Global');
    const [totalConfirm,setTotalConfirm] = useState(''); 

    const [totalDeaths,setTotalDeaths] = useState(''); 


    const [totalRecovered,setTotalRecovered] = useState(''); 

    const [newConfirm,setNewConfirm] = useState(''); 
    const [global,setGlobal] = useState([]); 
    const [countries,setCountries] = useState([]);

  //   const [news,setNews] = useState([]);
  // const getNews = async () => {
  //   const response = await fetch(`https://newsapi.org/v2/everything?q=Apple&from=2021-07-08&sortBy=popularity&apiKey=${API_KEY}`);

  //   const data = await response.json();

  //   setNews(data.articles);
      

  // } 
  const getApi = async () =>{
    
      const response = await fetch('https://api.covid19api.com/summary');

      const data = await response.json();

       
       const getShort = data.Global;
        
      const coun = data.Countries;
              setGlobal(getShort);
     
          setDeaths(getShort.NewDeaths);
          setNewConfirm(getShort.NewConfirmed);
          setTotalConfirm(getShort.TotalConfirmed);
          setTotalDeaths(getShort.TotalDeaths);

          setTotalRecovered(getShort.TotalRecovered);
          setCountries(data.Countries);
            
               const counts = coun.map((country) =>(
                 {
                      name: country.Country,
                      id: country.ID,
                     newConfirmed: country.NewConfirmed,
                      newDeaths:country.NewDeaths,
                      newRecovered:country.NewRecovered,
                     
                      totalConfirm:country.TotalConfirmed,
                      totalDeaths:country.TotalDeaths,
                      totalRecovered:country.TotalRecovered,
                      code:country.CountryCode,
                 }
               ) );
                
               setCountry(counts);

             
               counts.map((c) => { 
           

                const sortedData = [...counts];
      
      
               const sort = sortedData.sort((a,b) =>{
                  if(a.totalConfirm > b.totalConfirm){
                          return -1;
                  }
                  else{
                      return 1;
                  }
                  return sort;
              }
              
                
              );
              
              setCountry(sort);
             
            });
        

         
          
  }
 
  const getAll = {
    NewDeaths :       deaths,
    NewConfirmed:     newConfirm,
    TotalConfirmed:   totalConfirm,
    TotalDeaths:      totalDeaths,
    TotalRecovered:   totalRecovered,
  }

const [show,setShow] = useState(false);
// console.log(country);

  const getSelectionValue = (e) => {
    // alert('ok');
      const selected = e.target.value;
 
      

     
      
      if(selected === 'Global'){

        setTotalRecovered(global.TotalRecovered);
               
        setDeaths(global.NewDeaths);
        setNewConfirm(global.NewConfirmed);
        setTotalConfirm(global.TotalConfirmed);
        setTotalDeaths(global.TotalDeaths);

      }



                  country.map((c) => {
                   
            if(c.name === selected){
           
             
              
                setTotalRecovered(c.totalRecovered);
               
                setDeaths(c.newDeaths);
                setNewConfirm(c.newConfirmed);
                setTotalConfirm(c.totalConfirm);
                setTotalDeaths(c.totalDeaths);
      
               setdefaultSelected(selected);
            }
           
              
                
              

             
          } );
          
        setShow(false);
  }

 
  return (
    <div className="App">
      <Nav/>
            <div class="select-country">
              <select  onChange={getSelectionValue}>
                <option>Global</option>
              {country.map((country) => {
                 return( <option value={country.name}>{country.name}</option>);
                })}
              </select>
               


            </div>
      <div class="main-body">
       
        <div class="country-number"><p>{defaultSelected}</p></div>
          <div class="numbers">
            <p>{totalConfirm}</p>
            <span>Active cases</span>
            <span id="recovered">Recovered: {totalRecovered}</span>
            <span id="deaths">Deaths {totalDeaths}</span>
          
          </div>
      </div>

      <Tally country={country}/>
      <Vaccines/>
      
       <footer class="footer">
       <p>Created by: Jaylord Bucayu</p>
       <p>Api from: <a href="https://api.covid19api.com/summary">Api.covid19api</a></p>
       </footer>
        
    </div>
  )
}

export default App

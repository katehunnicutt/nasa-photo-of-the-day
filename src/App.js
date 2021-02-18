import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios'
import {API_KEY, BASE_URL} from './index'
import Description from "./components/Description";
import styled from "styled-components";


function App() {

const [nasaData, setNasaData] = useState([])

useEffect(()=>{
  axios
  .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
  .then((res)=>{
    setNasaData(res.data);
    console.log(res.data);
  })
  .catch((err)=>{
    console.log(err,"youbad");
  })
},[])





  return (
     <div className="App">
     <StyledBackground className = 'AM'>
      <h1>Nasa Photo of the Day</h1>
       <p>
     <Description descriptionProp = {nasaData.explanation} img={nasaData.hdurl}/>
     </p>
     <button>Learn More</button>

     </StyledBackground>
     </div>
   );

}

const StyledBackground = styled.div`
background-color: lightblue;
padding:1%;`
export default App;
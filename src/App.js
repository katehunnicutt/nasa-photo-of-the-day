import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios'
import {API_KEY, BASE_URL} from './index'
import Description from "./components/Description";
import Photo from "./components/dailyPhoto";
import Photographer from "./components/photographer";
import Title from "./components/title"
import styled from "styled-components";


//styled components are built outside of the component they are styling
//Capitalize style components
//don't forget semi-colons
const StyledApp = styled.div`

  background-color: ${pr => pr.theme.primaryColor};
  color: ${pr => pr.theme.lightestColor};
  padding:1%;
  `

function App() {
const [nasaData, setNasaData] = useState([])

  useEffect(()=>{

    axios
    .get(`${BASE_URL}api_key=${API_KEY}`)
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
     <StyledApp className = 'AM'>
      <h1>Nasa Photo of the Day</h1>
      <p>
     <Photo dailyPhoto = {nasaData.url} />
     <Title title = {nasaData.title} />
     <Photographer photoTaker = {nasaData.copyright}/>
     <Description descriptionProp = {nasaData.explanation}/>
     </p>

     </StyledApp>
     </div>
   );

}

export default App;
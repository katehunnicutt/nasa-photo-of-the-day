import React, {useState, useEffect} from 'react'
import { BASE_URL, API_KEY } from '../index'
import axios from 'axios'
import styled from "styled-components";


function Description(props) {
    const {descriptionProp, img} = props

    return (<div class = 'descriptionProp'>
        <Styleimg src={img}/>
        <p>{descriptionProp}</p>
        </div>
        )
}


const Styleimg = styled.img`
width: 900px;`
export default Description
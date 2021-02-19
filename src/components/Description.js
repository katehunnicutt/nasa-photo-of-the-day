import React, {useState, useEffect} from 'react'
import { BASE_URL, API_KEY } from '../index'
import axios from 'axios'
import styled from "styled-components";

const Styleimg = styled.img`
    width: 500px;
    border: solid 20px;
    border-color: ${props => props.theme.secondaryColor};
`

function Description(props) {
    const {descriptionProp, img} = props

    return (<div class = 'descriptionProp'>
        <Styleimg src={img}/>
        <p>{descriptionProp}</p>
        </div>
        )
}



export default Description
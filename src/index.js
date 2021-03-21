import React from "react";
import ReactDOM from "react-dom";
import {ThemeProvider} from 'styled-components'
import theme from './theme/index'
import "./index.css";
import App from "./App";
export const BASE_URL = 'https://api.nasa.gov/planetary/apod?'
export const API_KEY = '0h9CYsDQZjBnBgh3ZyLO4CntIuuDrGeVe2c6hvgB'

ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
    //one time
    <ThemeProvider theme = {theme}><App/></ThemeProvider>,
    document.querySelector('#root')
)
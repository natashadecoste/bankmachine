import React from "react"
import {Login} from "./../component/login"
import "./layouts.scss";



import { createMuiTheme } from '@material-ui/core/styles';



const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#bbdefb',
        },
        secondary: {
            main: '#0d47a1',
        },
    },
    typography: {
        useNextVariants: true,
    },
  });

export default () => 
<div>
    <Login />
</div>
    


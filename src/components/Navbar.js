import React from 'react'
import { NavLink } from 'react-router-dom'
 import {Box} from '@mui/material'

const Navbar=()=>{
    return(
        <>
        <ul style={{listStyle:'none'}}>
            <Box sx={{display:'flex',gap:'1rem'}}>
            <li><NavLink to='/'>Login</NavLink></li>
            <li><NavLink to='/register'>Register</NavLink></li>
            <li><NavLink to='/home'>Home</NavLink></li>
            </Box>
        </ul>
        </>
    )
}

export default Navbar;
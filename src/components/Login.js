import React from 'react'
import {Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography} from '@mui/material';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Login=()=>{

const navigate=useNavigate()


    return(
        <>
        <Navbar/>
        <Typography>Login Page</Typography>

        <Box sx={{display:'flex',flexDirection:'column',ml:'40%',mt:'1rem',gap:'1rem'}}>
        <TextField placeholder='Enter Username' sx={{width:'20rem'}}/>
        <TextField placeholder='Enter password'  sx={{width:'20rem'}}/>
        <FormGroup>
            <FormControlLabel control={<Checkbox></Checkbox>} label='Remember me'>

            </FormControlLabel>
        </FormGroup>

        <Button variant='contained' sx={{width:'20rem'}}   onClick={()=>navigate('/home')}>Login</Button>
        </Box>
        </>
    )
}



export default Login;
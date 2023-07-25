import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material';
import { ErrorMessage, useFormik } from 'formik';
import * as yup from 'yup';
import Navbar from './Navbar';

const validate = values => {

    const errors = [];

    if(!values.username) {
        errors.username = 'Required'
    }
    if(!values.email) {
        errors.email = 'Required'
    }
    if(!values.birthdate) {
        errors.birthdate = 'Required'
    }
    if(!values.password) {
        errors.password = 'Required'
    }
    if(!values.confirmpassword) {
        errors.confirmpassword = 'Required'
    }
    else if(values.password !== values.confirmpassword) {
        errors.confirmpassword = 'Password not match'
    }


    return errors;

}



const Register = () => {

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            birthdate: '',
            password: '',
            confirmpassword: ''
        },
        validate,
        onSubmit:values => {
            console.log('values', values)
        }
    })


    return (
        <>
            <Navbar />
            <Typography sx={{mb:'1rem'}}>Register Page</Typography>
            <form onSubmit={formik.handleSubmit}>
                <label>Username</label>
                <input
                    name='username' type='text'
                    onChange={formik.handleChange}
                    value={formik.values.username} />
                {formik.errors.username ? <Typography >{formik.errors.username}</Typography> : ''}
                <br />
                <label>Email</label>
                <input
                    name='email' type='email'
                    onChange={formik.handleChange}
                    value={formik.values.email} />
                {formik.errors.email ? <Typography>{formik.errors.email}</Typography> : ''}
                <br />

                <label>Birthdate</label>
                <input
                    name='birthdate' type='text'
                    onChange={formik.handleChange}
                    value={formik.values.birthdate} />
                {formik.errors.birthdate ? <Typography>{formik.errors.birthdate}</Typography> : ''}
                <br />

                <label>Password</label>
                <input
                    name='password' type='text'
                    onChange={formik.handleChange}
                    value={formik.values.password} />
                {formik.errors.password ? <Typography>{formik.errors.password}</Typography> : ''}
                <br />

                <label>Confirmpassword</label>
                <input
                    name='confirmpassword' type='text'
                    onChange={formik.handleChange}
                    value={formik.values.confirmpassword} />
                {formik.errors.confirmpassword ? <Typography>{formik.errors.confirmpassword}</Typography> : ''}
                <br/>
                <button variant='contained' sx={{ width: '20rem',mt:'1rem' }} type='submit'>Register</button>

            </form>








            {/* <Box sx={{display:'flex',flexDirection:'column',ml:'40%',mt:'1rem',gap:'1rem'}}> */}
            {/* <TextField placeholder='Enter Username' sx={{width:'20rem'}}/>
        <TextField placeholder='Enter email'  sx={{width:'20rem'}}/>
        <TextField placeholder='Enter Birthdate' sx={{width:'20rem'}}/>
        <TextField placeholder='Enter password'  sx={{width:'20rem'}}/>
        <TextField placeholder='Enter confirm password'  sx={{width:'20rem'}}/> */}

            {/* </Box> */}
        </>
    )
}



export default Register;
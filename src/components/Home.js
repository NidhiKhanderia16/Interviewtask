import { Card, CardContent, CardMedia, Typography,Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Home=()=>{

const [list,setList]=useState([]);
const navigate=useNavigate();

useEffect(()=>{

const fetchdata=async()=>{
    await axios.get('https://fakestoreapi.com/products')
    .then((res)=>setList(res.data))
}


fetchdata()


},[])


console.log("1111",list)


const handleClick=(id)=>{
navigate(`/home/${id}`)
}
    return(
        <>
        <Navbar/>
        <Typography>Home Page</Typography>
        <Box sx={{display:'flex',flexDirection:'column'}}>
      {
        list?.map((e,i)=>{
            return(
                <>
                
                <Card sx={{width:'30rem',height:'30rem'}}>
                    <CardMedia><img src={e.image} alt={e.title} width='300rem' height='200rem'/></CardMedia>
                    <CardContent>
                    {/* <Typography>Id: {e.id}</Typography>
                    <Typography>Name: {e.title}</Typography>
                    <Typography>{e.description}</Typography>
                    <Typography>${e.price}</Typography> */}
                    <Button variant='contained' onClick={()=>handleClick(e.id)}>Visit Product</Button>
                    </CardContent>
                </Card>
                </>
            )
        })
      }
      </Box>
        </>
    )
}



export default Home;
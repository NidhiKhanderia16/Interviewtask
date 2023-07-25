import { Typography, Box,Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Product = () => {

    const { id } = useParams();

    const [list, setList] = useState([]);

    useEffect(() => {

        const fetchdata = async () => {
            await axios.get('https://fakestoreapi.com/products')
                .then((res) => setList(res.data))
        }


        fetchdata()


    }, [])

    const data = list.filter((e) => e.id == id);


    return (
        <>
            <Typography>Product Page</Typography>

            {
                data.map((e) => {
                    return (
                        <>
                            <Box sx={{ mt: "5rem", mb: '5rem' }}>
                                <Typography>Product Id:  {e.id}</Typography>
                                <img src={e.image} alt={e.title} width='300rem' height='300rem' />
                                <Typography>Name: {e.title}</Typography>
                                <Typography>Detail: {e.description}</Typography>
                                <Typography>Category: {e.category}</Typography>
                                <Typography>Price: ${e.price}</Typography>
                                <Button variant='contained'>Add tO Cart</Button>
                            </Box>

                        </>
                    )
                })
            }



        </>
    )
}

export default Product;
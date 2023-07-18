import { Box, Button, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ProductState } from '../ContextPage/Context'

const Total = () => {
    const {state:{cart}, dispatch} = ProductState()
    const [total, setTotal] = useState()
    useEffect(()=>{
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price)*curr.qty, 0))
    },[cart])
  return (
    <div sx={{
        width:{
            md:'28%',
            xs:'100%'
        }
    }}>
        <Container>
        <Box sx={{
            padding:'20px',
            display:'flex',
            alignItems:'center',
            background:'#f6f2ef',
            borderRadius:'10px',
            flexDirection:'column',
            marginTop:'5%'

        }}>
            <Typography sx={{
                marginBottom:'2%',
                borderBottom:'1px solid gray',
                width:'100%',
                textAlign:'center'
            }}>
                CART SUMMARY
            </Typography>
            <Box sx={{
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between',
                padding:'10px 0',
                borderBottom:'1px solid gray',
                width:'100%',
                textAlign:'center'
            }}>
                <Typography>Subtotal:</Typography>
                &nbsp;
                <Typography>#{total}</Typography>
            </Box>
            <Button type='button' disabled={cart.length === 0} sx={{
                width:'100%',
                marginTop:'2%',
                padding:'15px',
                background:'blue',
                color:'white',
                borderRadius:'10px'
            }}>
                CHECKOUT {`(${total})`}
            </Button>
        </Box>
        </Container>
    </div>
  )
}

export default Total
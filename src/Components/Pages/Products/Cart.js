import { Box, Button, Container, Table, TableRow, TableContainer, TableBody, TableHead, Typography, TableCell, Select, MenuItem } from '@mui/material'
import React from 'react'
import {FaTrash} from 'react-icons/fa'
// import DisplayProducts from './DisplayProducts'
import Total from './Total'
import { ProductState } from '../ContextPage/Context'
import { useEffect } from 'react'
import { useState } from 'react'
import Footer from '../../SharedPages/Footer'

const Cart = () => {
  const {state:{cart}, dispatch} = ProductState()
  const [total, setTotal] = useState()
  useEffect(()=>{
      setTotal(cart.reduce((acc, curr) => acc + Number(curr.price)*curr.qty, 0))
  },[cart])
  return (
    <div style={{
      marginBottom:'5%'
    }}>
        <Container>
        <Box sx={{
          display:'flex',
          alignItems:'center',
          flexDirection:{
            xs:'column',
            md:'row'
          },
          justifyContent:'space-between'
        }}>
         <Box sx={{
        width:{
            xs:'95%',
            md:'68%'
        },
        // padding:'20px'
    }}>
    
    <TableContainer>
        <Table>
     
          <TableHead>
            <TableRow>
              {['Item', 'Product', 'Price', 'Quantity', '' ].map((name)=>(
                <TableCell style={{
                    color:'black',
                    fontSize:'20px',
                    fontWeight:'600',
                    background:'#f6f2ef'

                }}
                // align={name === 'Item' ? '' : 'right'}
                align='center'
                >
                {name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {cart.map((x, index)=>{
      return(
        <TableRow key={x.id}>
            <TableCell component='th' scope='row' style={{
              display:'flex',
              gap:'15px'
            }}>
              <img src={x.show} alt={x.name} style={{
                width:'150px',
                height:'150px',
                borderRadius:'10px'
              }}/>
              
            </TableCell>
            <TableCell>
              {x.name}
            </TableCell>
            <TableCell>
              ${x.price}
            </TableCell>
            <TableCell>
            <Select
            style={{
              width: '100px',
              height: '50px',
              color: 'black'
            }}
            variant='outlined'
            value={x.qty}
            onChange={(e)=> dispatch({
              type:'UPDATE_STATE',
              payload:{
                id: x.id,
                qty: e.target.value,
              }
            })}
            >
              {[...Array(x.instock).keys()].map((c)=>(
                <MenuItem value={c + 1} key={c + 1} sx={{
                  color:'black'
                }}>{c + 1}</MenuItem>
              ))}
              {/*  */}
            
            </Select>
            </TableCell>
            <TableCell>
              <Button  onClick={()=> dispatch({
                type:'REMOVE_FROM_CART',
                payload: x,
              })} sx={{
                color:'red'
              }}>
              <FaTrash/>
              </Button>
            </TableCell>
        </TableRow>
      )
      })}
          </TableBody>
        </Table>
        </TableContainer>
      
    
      
   
         </Box>
            {/* ----------------Total Area -----------------------*/}
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
                <Typography>${total}</Typography>
            </Box>
            <Button type='button' disabled={cart.length === 0} sx={{
                width:'100%',
                marginTop:'2%',
                padding:'15px',
                background:'blue',
                color:'white',
                borderRadius:'10px'
            }}>
                CHECKOUT
            </Button>
        </Box>
        </Container>
    </div>
         
        </Box>
            
        </Container>
        <Footer/>
    </div>
  
  )
}

export default Cart
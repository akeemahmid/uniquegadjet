import { AppBar, Container, Toolbar, Box, Badge } from '@mui/material'
import React from 'react'
import Hamburgerbar from "../Pages/HomeComponent/Hamburgerbar"
import { ShoppingCart } from '@mui/icons-material'
import '../Styles/style.css'
import { ProductState } from '../Pages/ContextPage/Context'

// import './'

const Sharednavbar = () => {
  const {state:{cart}} = ProductState()
  return (
    <div>
      <AppBar sx={{
        background: 'whitesmoke',
        position: 'sticky',
        top: 0,
        left: 0,
        boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)', 
      }} className='Navbar'>
        <Container>
          <Toolbar sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          <Box sx={{
            color:'gray',
            fontWeight:'700',
            fontSize: '30px'

          }}>
            Logo
          </Box>
          <Box sx={{
            alignItem:'center',
            display: 'flex',
            justifyContent:'center'
          }}>
            <Box sx={{
              marginRight:'8px'
            }}>
            <ShoppingCart className='cart' sx={{
              // marginRight:'8px',
              color:'black',
              fontSize:'27px',
              position:'relative'
            }}/>
            <Badge sx={{
              background:'gray',
              padding:'3px',
              position:'absolute',
              top:'3px',
              // right:'3px',
              borderRadius:'50%'
            }}>{cart.length}</Badge>
            </Box>
            
            {/* <span style={{
              position:'absolute',
              top:'5px',
              right:{
                xs:'25%',
                md:'8%'
              },
              // width:'18px',
              padding:'3px',
              // height:'15px',
              background:'gray',
              borderRadius:'50%',
              color:'white',
              fontSize:'13px'
            }}>
              {cart.length}
            </span> */}
            {/* sidenarbar */}
            <Hamburgerbar/>
          </Box>

          </Toolbar>
        </Container>
      </AppBar>
  
    </div>
  )
}

export default Sharednavbar
import React from 'react'
import FormControl from './FormControl'
import { Container, Box, Typography } from '@mui/material'
import Beyond from '../../SharedPages/Beyond'
import Footer from '../../SharedPages/Footer'

const Contact = () => {
  return (
    <div>
        <Box sx={{
            marginTop:'3%'
        }}>
          <Container>
          <Typography sx={{
              textAlign:'left',
              fontSize:{
                xs:'35px',
                md:'40px'
              },
              fontWeight:'700'
            }}>
                Contact Information
            </Typography>
          </Container>
      
            <FormControl/>
            <Beyond/>
            <Footer/>
        </Box>
    </div>
  )
}

export default Contact
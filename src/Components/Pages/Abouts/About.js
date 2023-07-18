import React from 'react'
import { Box, Container, Typography } from '@mui/material'

const About = () => {
  return (
    <div>
        <Container>
            <Typography sx={{
                fontSize:{
                    xs:'30px',
                    md:'35px'
                },
                fontWeight:'600',
                marginTop:'3%'
            }}>
                Yo My Nigga My Gee
            </Typography>
            <Typography sx={{
                fontSize:'20px',
                margin:'1% 0'
            }}>
                Currently this page is under Contruction.  So guess what i still have other pages available
                feel free to explore so you won't miss out all the amazing stuff i have for you
            </Typography>
            <Typography sx={{
                fontSize:{
                    xs:'30px',
                    md:'35px'
                },
                fontWeight:'600'
            }}>
                Stay Jiggy My Gee
            </Typography>
        </Container>
    </div>
  )
}

export default About
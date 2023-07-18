import { Container, Typography, Box } from '@mui/material'
import React from 'react'
import '../../Styles/style.css'

const Business = () => {
  return (
 
           <div className='subdiv'>
            <Container>
            <Box sx={{
                display:'flex',
                width:{
                    xs:'100%',
                    md:'45%'
                },
                padding:'20px',
                alignItems:{
                    xs:'center',
                    md:'flex-start'
                },
                flexDirection:'column',
                height:{
                    xs:'350px',
                    md:'400px'
                },
                justifyContent:{
                    xs:'none',
                    md:'center'
                },
                textAlign:{
                    xs:'center',
                    md:'left'
                }
            }}>
            <Typography
              sx={{
                width:'100%',
                fontSize:{
                    xs:'33px',
                    md:'40px'
                },
                fontWeight:'600',
                textAlign:{
                    xs:'center',
                    md:'left'
                },
            }}
            >
                Galaxy for Business
                </Typography>
            <Typography sx={{
                marginBottom:'3%',
                textAlign:{
                    xs:'center',
                    md:'left'
                },
                width:'100%'
            }}>Get exclusive deals, volume pricing, free shipping and flexible financing on a wide range of samsung technology for your business</Typography>
            {/* <button style={{
                padding:'10px 15px',
                borderRadius:'10px',
                color:'white',
                background: 'black',
                fontSize:'20px',
                // width:'100%'

            }}>
                Learn more
            </button> */}
            <button style={{
                // width:'200px',
                padding:'10px 15px',
                borderRadius:'10px',
                color:'white',
                background: 'black',
                fontSize:'20px',
                alignSelf:{
                    xs:'center',
                    md:'left'
                },
                outline:'none',
            }}>
                Learn more
            </button>
            

            </Box>
            
            <Box sx={{
                  width:{
                    xs:'100%',
                    md:'45%'
                },
            }}>

            </Box>
            </Container>
        </div>

  )
}

export default Business
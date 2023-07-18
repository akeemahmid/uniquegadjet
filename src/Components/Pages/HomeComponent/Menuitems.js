import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Menuitems = ({catego}) => {
    console.log(catego.name);
  return (
    <div>
        {catego.map((x)=>{
            return(
                <h2>
                    {x.name}
                </h2>
            )
        })}
        {/* {catego.name} */}
        {/* <Container>
            <Box key={catego.id} sx={{
                display:'flex',
                alignItems:'center',
                justifyContent:{
                    xs:'center',
                    md:'space-between'
                },
                flexDirection:{
                    xs:'column-reverse',
                    md:'row'
                }
            }}>
                <Box sx={{
                    width:{
                        xs:'100%',
                        md:'45%', 
                    },
                    height:{
                        xs:'50%',
                        md:'100%'

                    },
                    overflow:'hidden',
                }}>
                    <image src={catego.image} alt={catego.name} style={{
                        width:'100%',
                        height:'100%'
                    }}/>
                </Box>
                <Box sx={{
                     width:{
                        xs:'100%',
                        md:'45%',
                    },
                    height:{
                        xs:'50%',
                        md:'100%'

                    },
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    textAlign:'center'
                }}>
                    <Typography sx={{
                          width:'100%',
                          fontSize:{
                              xs:'33px',
                              md:'40px'
                          },
                          fontWeight:'600',
                          textAlign:'center'
                    }}>
                        {catego.name}
                    </Typography>
                    <Typography sx={{
                             marginBottom:'3%'
                    }}>
                        {catego.writeup}
                    </Typography>
                </Box>
            </Box>
        </Container> */}
    </div>
  )
}

export default Menuitems
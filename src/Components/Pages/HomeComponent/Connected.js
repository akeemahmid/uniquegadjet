import React from 'react'
import { Container, Box, Typography } from '@mui/material'


const Connected = () => {
  return (
    <div style={{
        marginTop:'3%'
    }}>
        <Container>
            <Typography sx={{
                width:'100%',
                fontSize:{
                    xs:'33px',
                    md:'40px'
                },
                fontWeight:'600',
                textAlign:'center'
            }}>
                The Connected Power Of Samsung Galaxy
            </Typography>
            <Typography sx={{
                width:'100%',
                textAlign:'center',
                marginBottom:'3%'
            }}>
                Galaxy connected devices are perfect together. sync your whole ecosystem for a seamless Galaxy mobile expe
            </Typography>
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
                        xs:'100%',
                        md:'25%'
                    },

                    height:{
                        md:'400px',
                        xs:'none'
                    },
                    // border:'2px solid green',
                    // height:{
                    //     md:'400px',
                    //     xs:'250px'
                    // },
                
                    display:'flex',
                    alignItems:'flex-start',
                    flexDirection:{
                        xs:'row',
                        md:'column'
                    },
                    justifyContent:'space-between',
                 
                }}> 
                <Box sx={{
                    overflow:'hidden',
                    width:{
                        xs:'170px',
                        md:'180px'
                    },
                    height:'180px',
                    textAlign:'center',
                    background:'#f6f2ef',
                    alignItems:'center',
                    padding:{
                        md:'15px',
                        xs:'10px'
                    },
                    borderRadius:'10px'
                }}>
                    <img src='https://images.samsung.com/is/image/samsung/assets/us/2302/pfs/mobile/01192023/pc/11-01-co35-eco-DM3-pc-160x160.png?$160_160_PNG$' alt='name' style={{
                        width:'120px',
                        height:'75%',
                        display:'block',
                        marginBottom:'2%'
                    }}/>
                    <Typography sx={{
                        fontWeight:'300',
                        fontSize:'18px'
                    }}>
                        Galaxy S23 Ultra
                    </Typography>
                </Box>
                <Box sx={{
                    overflow:'hidden',
                    width:{
                        xs:'170px',
                        md:'180px'
                    },
                    height:'180px',
                    textAlign:'center',
                    background:'#f6f2ef',
                    borderRadius:'10px',
                    padding:{
                        md:'15px',
                        xs:'10px'
                    },
                }}>
                    <img src='https://images.samsung.com/is/image/samsung/assets/ee/2208/pfs/11-04-co35-eco-Watch5-mo-160x160.png?$160_160_PNG$' alt='name' style={{
                        width:'120px',
                        height:'75%',
                        display:'block',
                        marginBottom:'2%'
                    }}/>
                    <Typography sx={{
                        fontWeight:'300',
                        fontSize:'18px'
                    }}>
                        Galaxy Watch5
                    </Typography>
                </Box>
                </Box>
                <Box sx={{
                    width:{
                        xs:'100%',
                        md:'45%'
                    },
                   marginTop:{
                    xs:'10px',
                    md:'0',
                   },
                   marginBottom:{
                    xs:'10px',
                    md:'0',
                   },
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection:'column',
                    overflow:'hidden',
                    height:{
                        md:"400px",
                        xs:'300px'
                    },
                    borderRadius:'10px'
                    
                }} className='middle'>
                   
                   {/* <img src='' alt='name' style={{
                    width:'100%',
                    height:'0%'
                   }}/> */}
                </Box>
                <Box sx={{
                    width:{
                        xs:'100%',
                        md:'25%'
                    },
                    height:{
                        md:'400px',
                        xs:'none'
                    },
                    display:'flex',
                    alignItems:'flex-end',
                    flexDirection:{
                        xs:'row',
                        md:'column'
                    },
                    justifyContent:'space-between',
                 
                }}> 
                <Box sx={{
                    overflow:'hidden',
                    width:{
                        xs:'170px',
                        md:'180px'
                    },
                    height:'180px',
                    textAlign:'center',
                    background:'#f6f2ef',
                    padding:{
                        md:'15px',
                        xs:'10px'
                    },
                    borderRadius:'10px'
                }}>
                    <img src='https://images.samsung.com/is/image/samsung/assets/us/2302/pfs/mobile/01192023/pc/11-02-co35-eco-DM12-pc-160x160.png?$160_160_PNG$' alt='name' style={{
                        width:'120px',
                        height:'75%',
                        display:'block',
                        marginBottom:'2%'
                    }}/>
                    <Typography sx={{
                        fontWeight:'300',
                        fontSize:'18px'
                    }}>
                        Galaxy S23| S23+
                    </Typography>
                </Box>
                <Box sx={{
                    overflow:'hidden',
                    width:{
                        xs:'170px',
                        md:'180px'
                    },
                    height:'180px',
                    textAlign:'center',
                    background:'#f6f2ef',
                    borderRadius:'10px',
                    padding:{
                        md:'15px',
                        xs:'10px'
                    },
                }}>
                    <img src='https://images.samsung.com/is/image/samsung/assets/us/2208/mobile/08012022/pc/11-05-co35-eco-Buds2Pro-mo-160x160.png?$160_160_PNG$' alt='name' style={{
                        width:'120px',
                        height:'75%',
                        display:'block',
                        marginBottom:'2%'
                    }}/>
                    <Typography sx={{
                        fontWeight:'300',
                        fontSize:'18px'
                    }}>
                        Galaxy Bud2 Pro
                    </Typography>
                </Box>
                </Box>
            </Box>
        </Container>
    </div>
  )
}

export default Connected
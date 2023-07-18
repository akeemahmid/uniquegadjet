import React from 'react'
import { ProductState } from '../ContextPage/Context'
import { Box, Button, Container, Typography } from '@mui/material'
import { CiDeliveryTruck, CiWallet } from 'react-icons/ci'
import Banner from '../../SharedPages/Banner'
import { Link, useNavigate } from 'react-router-dom'
import Beyond from '../../SharedPages/Beyond'
import Footer from '../../SharedPages/Footer'
import { CgArrowsExchangeAltV } from 'react-icons/cg'
// import { products } from '../../ArrayData/Items'

const Product = () => {
    const {state:{products, cart}, dispatch} = ProductState()
    const navigate = useNavigate()
    console.log(cart)
  return (
    <div>
        <Box sx={{
            background:'black',
            color:'white',
            padding:'10px 0'
        }}>
            <Container>
                <Box sx={{
                    display:'flex',
                    alignItems:'center',
                    flexDirection:{
                        xs:'column',
                        md:'row'
                    }
                }}>
                <Box sx={{
                    width:{
                        xs:'100%',
                        md:'30%'
                    },
                    textAlign:{
                        md:'none',
                        xs:'center'
                    },
                    fontSize:{
                        xs:'22px',
                        md:'inherit'
                    },
                    marginBottom:{
                        xs:'10px',
                        md:'0'
                    }
                }}>Shop with Advantage</Box>
                <Box sx={{
                    width:{
                        md:'70%',
                        xs:'100%'
                    },
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'space-between',
                    flexWrap:'wrap'
                }}>
                    <Box sx={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:{
                            xs:'space-between',
                            md:'none'
                        },
                        width:{
                            md:'25%',
                            xs:'40%'
                        },
                        marginBottom:{
                            xs:'10px',
                            md:'0'
                        }
                        // border:'2px solid green'
                    }}>
                        <Box sx={{
                            fontSize:'32px',
                            marginRight:'2%'
                        }}>
                            <CiWallet/>
                        </Box>
                        &nbsp;
                        <Box>
                            0%  APR Finance no  down  payment
                        </Box>
                    </Box>
                    <Box sx={{
                        display:'flex',
                        alignItems:'center',
                        width:{
                            xs:'40%',
                            md:'25%',
                        },
                        marginBottom:{
                            xs:'10px',
                            md:'0'
                        }
                        // border:'2px solid green'
                    }}>
                        <Box sx={{
                            fontSize:'32px',
                            marginRight:'2%'
                        }}>
                            <CiDeliveryTruck/>
                        </Box>
                        &nbsp;
                        <Box>
                            Free, no-contact delivery and easy returns
                        </Box>
                    </Box>
                    <Box sx={{
                        display:'flex',
                        alignItems:'center',
                        width:{
                            xs:'40%',
                            md:'25%'
                        },
                        // border:'2px solid green'
                    }}>
                        <Box sx={{
                            fontSize:'32px',
                            marginRight:'2%'
                        }}>
                            <CiWallet/>
                        </Box>
                        &nbsp;
                        <Box>
                            0%  APR Finance no  down  payment
                        </Box>
                    </Box>
                    <Box sx={{
                        display:'flex',
                        alignItems:'center',
                        width:{
                            xs:'40%',
                            md:'25%'
                        },
                        // border:'2px solid green'
                    }}>
                        <Box sx={{
                            fontSize:'32px',
                            marginRight:'2%'
                        }}>
                            <CgArrowsExchangeAltV/>
                        </Box>
                        &nbsp;
                        <Box>
                            Highest online instant trade-in
                        </Box>
                    </Box>
                </Box>
                </Box>
               
            </Container>
        </Box>
        {/* <Box className='flow' sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            flexWrap:'wrap',
            overflowX:'auto',
            
        }}>
            <Box sx={{
                width:{
                    xs:'40%',
                    md:'25%'
                }
            }}></Box>
        </Box> */}
        <Banner/>
        <Container>
            <Typography sx={{
                width:'100%',
                textAlign:'center',
                fontSize:{
                    xs:'25px',
                    md:'30px'
                },
                marginTop:'3%',
                fontWeight:'600'
            }}>
                Features deals
            </Typography>
            <Box sx={{
                width:'100%',
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between',
                flexWrap:'wrap'
            }}>
                {products.map((product)=>{
                        return(
                            <Box key={product.id} sx={{
                                width:{
                                    xs:'47%',
                                    md:'27%'
                                },
                                // height:'70px',
                                // padding:'10px',
                                marginTop:'2%',
                                // border:'2px solid blue',
                                borderRadius:'20px',
                                background:'#f6f2ef',
                            }}>
                                <Box sx={{
                                    width:'100%',
                                    height:{
                                        md:'200px',
                                        xs:'50%'
                                    },
                                    // border:'2px solid orange',
                                    // background:'orange',
                                    overflow:'hidden',
                                    borderTopRadius:'inherit',
                                    textAlign:'center',
                                    padding:{
                                        xs:'0',
                                        md:'7px 30px'
                                    }
                                }}> 
                                <img src={product.show} alt={product.name} style={{
                                    display:'block',
                                    // width:{
                                    //     md:'80%',
                                    //     xm:'100%'
                                    // },
                                    width:'100%',
                                    height:'100%',
                                    borderRadius:'inherit',
                                    alignSelf:'center'
                                }}/>
                              
                                </Box>
                                <Box sx={{
                                    display:'flex',
                                    alignItems:'center',
                                    flexDirection:'column',
                                    padding:'10px'
                                }}>
                                    <Typography sx={{
                                        fontSize:{
                                            xs:'20px',
                                            md:'22px'
                                        },
                                        fontWeight:'750',
                                        lineHeight:'1.1'
                                    }}>
                                        Get a {product.name} in Green storage upgrade on us
                                    </Typography>
                                    <Typography sx={{
                                        marginTop:'2%',
                                        fontWeight:{
                                            xs:'18px',
                                            md:'inherit'
                                        },
                                        lineHeight:{
                                            xs:'1',
                                            md:'inherit'
                                        },
                                        display:{
                                            xs:'none',
                                            md:'inherit'
                                        }
                                    }}>
                                        Enjoy 512GB for the price of 256GB.
                                        Plus, get up to $750 instant trade-in
                                        credit. Now ${product.price} before eligible trade-in
                                    </Typography>
                                    <Box sx={{
                                        display:'flex',
                                        alignItems:'center',
                                        marginTop:'4%',
                                        // flexDirection:{
                                        //     xs:'column',
                                        //     md:'row'
                                        // },
                                        justifyContent:{
                                            xs:'none',
                                            md:'space-between'
                                        },
                                        width:'100%'
                                    }}>
                                        {
                                            cart.some((prod) => prod.id === product.id)?(
                                                <Button onClick={()=>dispatch({
                                                    type:'REMOVE_FROM_CART',
                                                    payload:product
                                                })}  sx={{
                                      
                                                    borderRadius:'25px',
                                                    padding:'10px 20px',
                                                    color:'black',
                                                    background:'red',
                                                    // variant:'danger',
                                                    fontSize:{
                                                        xs:'13px'
                                                    }
                                                }}>
                                                    REMOVE
                                                </Button>
                                            ):(
                                                <Button onClick={()=>dispatch({
                                                    type:'ADD_TO_CART',
                                                    payload:product
                                                })} sx={{
                                      
                                                    borderRadius:'25px',
                                                    padding:'10px 20px',
                                                    color:'white',
                                                    background:'blue',
                                                    fontSize:{
                                                        xs:'13px'
                                                    }
                                                }}>
                                                    ADD
                                                </Button>
                                            )
                                        }
                                       
                                        
                                     &nbsp;
                                     <Button onClick={()=>navigate(`/products/${product.id}`)} sx={{
                                        color:'black',
                                        borderBottom:'2px solid black',
                                        fontSize:{
                                            md:'inherit',
                                            xs:'12px'
                                        }
                                     }}>
                                      Learn More
                                     </Button>
                                    </Box>
                                   
                                </Box>

                            </Box>
                        )
                    })
                }
              
                
            </Box>

        </Container>
        <Beyond/>
        <Footer/>
    </div>
  )
}

export default Product
import React, { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";
// import { ProductState } from '../ContextPage/Context'
import { Container, Box, Typography, Button } from '@mui/material'
import Beyond from '../../SharedPages/Beyond'
import Confidence from './Confidence'
import { ProductState } from "../ContextPage/Context";
// import { Battery20Outlined } from "@mui/icons-material";


const Singleproduct = () => {
  // const {productId} = useParams()
  //
  // const product = products.find((product)=> product.id === productId)
  // console.log(product)
    const { productId } = useParams();
     const {state: {products}} = ProductState()
  const [name, setname] = useState("");
  const [price, setprice] = useState('')
  const [banner, setbanner] = useState('')
  const [small, setsmall] = useState('')
  const [performance, setperformance] = useState("");
  const [battery, setbattery] = useState('')
  const [ecodesign, setecodesign] = useState('')
  const navigate = useNavigate()
  const [size, setSize] = useState(window.innerWidth >= 500)
  const checkSize = ()=>{
    // window.addEventListener('load', size)
    setSize(window.innerWidth)
  }
  useEffect(() => {
    const product = products.find((product)=> product.id === parseInt(productId))
    setname(product.name)
    setprice(product.price)
    setbanner(product.bannerdeskImage)
    setsmall(product.bannermobImage)
    setbattery(product.batteryImage)
    setperformance(product.performanceTmage)
    setecodesign(product.ecodesignImage)
    window.addEventListener('resize', checkSize)
  }, [size]);

  return (
   
    <div>
      <Box sx={{
        // backgroundImage:{banner},
        // backgroundSize:'cover',
        // backgroundPosition:'center',
        width:'100%',
        height:{
          xs:'400px',
          md:'350px'
        },
        // border:'2px solid green',
        overflow:'hidden'

      }}>
<img src={size? banner : small} alt={name} style={{
  display:'block',
  width:'100%',
  height:'100%'
}}/>
      </Box>
      <Container>
        <Box sx={{
          marginTop:'3%',
          textAlign:'center',
          width:'100%'
        }}>
          <Typography sx={{
            width:'100%',
            textAlign:'center',
            fontWeight:'600',
            fontSize:{
              xs:'30px',
              md:'33px'
            },
            marginBottom:'2.6%'

          }}>
            {name}
          </Typography>
          <Typography sx={{
            width:'100%',
            textAlign:'center',
            fontWeight:'700',
            fontSize:{
              xs:'37px',
              md:'40px'
            },
            marginBottom:'2%',
            lineHeight:{
              xs:'1.1',
              md:'inherit'
            }

          }}>
              The future of awesome
          </Typography>
          <Typography sx={{
            textAlign:{
              xs:'text',
              md:'center'
            },
            width:'100%',
            marginBottom:'2%',
            fontSize:{
              xs:'18px',
              md:'17px'
            }
          }}>
            Get ready to experience {name}, a smartphone
            <br/>
              with awesome high-quality video, crips and vibrant low-high pics,
            <br/>
             and a screen that brings it all together- at an amazing value
          </Typography>
          <Button sx={{
            border:'2px solid black',
            borderRadius:'25px',
            padding:'10px  15px',
            color:'darkgray'
          }}>LEARN MORE</Button>
        </Box>
        <Box sx={{
          marginTop:'3%',
          width:'100%',
          display:'flex',
          alignItems:'center',
          // height:{
          //   xs
          // },
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
                md:'40%'
              },
              textAlign:{
                xs:'center',
                md:'left'
              }

          }}>
            <Typography sx={{
              fontSize:{
                xs:'27px',
                md:'30px'
              },
              marginBottom:'2%',
             textAlign:'inherit',
             fontWeight:'500'
            }}>
              {name}
            </Typography>
            <Typography sx={{
              textAlign:'inherit',
              marginBottom:'2%',
               fontWeight:'700',
             fontSize:{
              xs:'37px',
              md:'40px'
            },
            }}>
              Awesome 5G
            </Typography>
            <Typography>
              Enjoy the enhanced power of 5G, plus <br/>
              capture awesome video with Auto <br/>
              Framing and late-night photos with <br/>
              Nightography.
            </Typography>
          </Box>
          <Box sx={{
            width:{
              xs:'100%',
              md:'60%'
            },
            height:{
              xs:'300px',
              md:'350px'
            },
            overflow:'hidden',
            borderRadius:'20px',
            // border:'2px solid orange'
          }}>
            <img src={performance} alt={name} style={{
              width:'100%',
              height:{
                xs:'300px',
                md:'350px'
              },
              display:'block',
              borderRadius:'20px',
            }}/>
          </Box>
        </Box>
        <Box sx={{
          marginTop:'3%',
          width:'100%',
          display:'flex',
          alignItems:'center',
          // height:{
          //   xs
          // },
          justifyContent:{
            xs:'center',
            md:'space-between'
          },
          flexDirection:{
            xs:'column',
            md:'row'
          }
        }}>
        
          <Box sx={{
            width:{
              xs:'100%',
              md:'50%'
            },
            overflow:'hidden',
         
            height:{
              xs:'300px',
              md:'350px'
            },
            borderRadius:'20px',
            marginBottom:{
              xs:'1%',
              md:'0'
            }
          }}>
            <img src={ecodesign} alt={name} style={{
              width:'100%',
              height:{
                xs:'300px',
                md:'350px'
              },
              display:'block',
              borderRadius:'20px',
            }}/>
          </Box>
          <Box sx={{
              width:{
                xs:'100%',
                md:'40%'
              },
              textAlign:{
                xs:'center',
                md:'left'
              }

          }}>
           
          <Typography sx={{
                width:'100%',
                textAlign:'inherit',
                fontWeight:'700',
                fontSize:{
                  xs:'32px',
                  md:'40px'
                },
                marginBottom:'2%',
                marginTop:{
                  xs:'2%',
                  md:'0'
                },
                lineHeight:{
                  xs:'1.1',
                  md:'1.3'
                },
          }}>
            Trade in and <br/>
            save on <br/> {name}
          </Typography>
          <Typography sx={{
            marginBottom:'1%'
          }}>
            Buy {name} and save up to $250 <br/>
            with eligible trade-in
          </Typography>
          <Button onClick={()=>navigate('/products')} sx={{
            //  border:'2px solid black',
             borderRadius:'25px',
             padding:'10px  20px',
             color:'white',
             background:'blue'
          }}>
            Buy Now
          </Button>

          </Box>
        </Box>
        <Box sx={{
          marginTop:'3%',
          width:'100%',
          display:'flex',
          alignItems:'center',
          // height:{
          //   xs
          // },
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
                md:'40%'
              },
              textAlign:{
                xs:'center',
                md:'left'
              }

          }}>
        
            <Typography sx={{
              textAlign:'inherit',
              marginBottom:'2%',
               fontWeight:'700',
             fontSize:{
              xs:'35px',
              md:'40px'
            },
            }}>
              {name} for business
            </Typography>
            <Typography sx={{
              marginBottom:'2%'
            }}>
              Business innovation is for everyone
            </Typography>
            <Typography sx={{
              fontSize:'20px'
            }}>
              Get a 15W Power Adapter on us per<br/>
              device, plus enhanced trade-in value up <br/>
              to $180 per device and volume discounts with a Samsung Business Account.
            </Typography>
          </Box>
          <Box sx={{
            width:{
              xs:'100%',
              md:'60%'
            },
            height:{
              xs:'300px',
              md:'350px'
            },
            overflow:'hidden',
            //
            // border:'2px solid orange'
          }}>
            <img src={battery} alt={name} style={{
              width:'100%',
              height:{
                xs:'300px',
                md:'350px'
              },
              display:'block',
              borderRadius:'20px',
            }}/>
          </Box>
        </Box>
        <Beyond/>
    
       
      </Container>
      <Confidence/>
    </div>
  )
}

export default Singleproduct
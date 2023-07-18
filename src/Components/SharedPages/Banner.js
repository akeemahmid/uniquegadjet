import React from 'react'
// import { ProductState } from './ContextPage/Context'
import { Container, Box, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import '../Styles/style.css'



const Banner = () => {
  // const {state: {headerArray}} = ProductState()
  
  return (
    <div>
   
       
    <Swiper
      className="mySwiper"
      slidesPerView={1}
      pagination={{
      clickable: true,
      bulletClass:
        "swiper-pagination-bullet swiper-pagination-testClass",
    }}
    grabCursor={true}
    loop={true}
    modules={[Autoplay, Pagination]}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    // sx={{
    //   height:'400px'
    // }}
   
  >
   
        <SwiperSlide className='one'>
    <Container>
      <Box className='sub' sx={{
        display:'flex',
        justifyContent:{
          xs:'flex-start',
          md:'center'
        },
        flexDirection:'column',
        alignItems:'flex-start',
        textAlign:'left',
        height:{
          xs:'70vh',
          sm:'50vh',
          lg:'80vh'
        },
        width:{
          xs:'100%',
          md:'45%',
          lg:'50%'
        }
      }}>
        <Typography style={{
          width:'100%',
          fontSize:'22px',
          fontWeight:'400',
          marginBottom:'2%'
        }}>
          New
        </Typography>
        <Typography sx={{
          fontSize:{
            xs:'35px',
            md:'45px'
          },
          fontWeight:'700',
          marginBottom:'3%',
          lineHeight:'1'
          
        }}>
              Awesome belongs to everyone
        </Typography>
        <Typography sx={{
          width:'100%',
          marginBottom:'3%'
        }}> 
          Save up to $250 on the new Galaxy A54 with eligible trade in
        </Typography>
        <button style={{
          padding:'10px 15px',
          cursor:'pointer',
          background:'black',
          color:'whitesmoke',
          fontSize:'20px',
          border:'none',
          outline:'none',
          borderRadius:'25px'

        }}>
          Buy Now
        </button>
      </Box>
     
    </Container>
    
    </SwiperSlide>
    <SwiperSlide className='one'>
    <Container>
      <Box className='sub' sx={{
        display:'flex',
        justifyContent:{
          xs:'flex-start',
          md:'center'
        },
        flexDirection:'column',
        alignItems:'flex-start',
        textAlign:'left',
        height:{
          xs:'70vh',
          sm:'50vh',
          lg:'80vh'
        },
        width:{
          xs:'100%',
          md:'45%',
          lg:'50%'
        }
      }}>
        <Typography style={{
          width:'100%',
          fontSize:'22px',
          fontWeight:'400',
          marginBottom:'2%'
        }}>
          New
        </Typography>
        <Typography sx={{
          fontSize:{
            xs:'35px',
            md:'45px'
          },
          fontWeight:'700',
          marginBottom:'3%',
          lineHeight:'1'
          
        }}>
              Awesome belongs to everyone
        </Typography>
        <Typography sx={{
          width:'100%',
          marginBottom:'3%'
        }}> 
          Save up to $250 on the new Galaxy A54 with eligible trade in
        </Typography>
        <button style={{
          padding:'10px 15px',
          cursor:'pointer',
          background:'black',
          color:'whitesmoke',
          fontSize:'20px',
          border:'none',
          outline:'none',
          borderRadius:'25px'

        }}>
          Buy Now
        </button>
      </Box>
     
    </Container>
    
    </SwiperSlide>
    <SwiperSlide className='two'>
    <Container>
      <Box className='sub2' sx={{
        display:'flex',
        justifyContent:{
          xs:'flex-start',
          md:'center'
        },
        flexDirection:'column',
        alignItems:'flex-start',
        textAlign:'left',
        height:{
          xs:'70vh',
          sm:'50vh',
          lg:'80vh'
        },
        width:{
          xs:'100%',
          md:'45%',
          lg:'50%'
        }
      }}>
        <Typography style={{
          width:'100%',
          fontSize:'22px',
          fontWeight:'400',
          marginBottom:'2%'
        }}>
          New
        </Typography>
        <Typography sx={{
          fontSize:{
            xs:'35px',
            md:'45px'
          },
          fontWeight:'700',
          marginBottom:'3%',
          lineHeight:'1'
          
        }}>
              Awesome belongs to everyone
        </Typography>
        <Typography sx={{
          width:'100%',
          marginBottom:'3%'
        }}> 
          Save up to $250 on the new Galaxy A54 with eligible trade in
        </Typography>
        <button style={{
          padding:'10px 15px',
          cursor:'pointer',
          background:'black',
          color:'whitesmoke',
          fontSize:'20px',
          border:'none',
          outline:'none',
          borderRadius:'25px'

        }}>
          Buy Now
        </button>
      </Box>
     
    </Container>
    
    </SwiperSlide>
   
  
    {/* <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide> */}

  </Swiper>
    </div>
  )
}

export default Banner
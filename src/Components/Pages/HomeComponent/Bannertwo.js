import React from 'react'
// import { ProductState } from './ContextPage/Context'
import { Container, Box, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import '../../Styles/style.css'



const Bannertwo = () => {

  
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
  >


   
  

     <SwiperSlide className='ban'>
    
        <Container>
      <Box className='sub' sx={{
        display:'flex',
        justifyContent:{
          xs:'flex-start',
          md:'center'
        },
        flexDirection:'column',
        alignItems:{
            xs:'center',
            md:'flex-start'
        },
        textAlign:{
            xs:'center',
            md:'left'
        },
        height:{
          xs:'70vh',
          md:'80vh'
        },
        width:{
          xs:'100%',
          md:'45%'
        }
      }}>
      
        <Typography sx={{
          fontSize:{
            xs:'35px',
            md:'45px'
          },
          fontWeight:'700',
          marginBottom:'3%',
          lineHeight:'1'
          
        }}>
          The connected power of Samsung Galaxy
        </Typography>
   
        <button style={{
          padding:'10px 15px',
          cursor:'pointer',
          background:'whitesmoke',
          color:'black',
          fontSize:'20px',
          border:'none',
          outline:'none',
          borderRadius:'25px'

        }}>
          See All
        </button>
      </Box>
     
    </Container>
        
    </SwiperSlide> 
    <SwiperSlide className='ban3'>
    
    <Container>
  <Box className='sub' sx={{
    display:'flex',
    justifyContent:{
      xs:'flex-start',
      md:'center'
    },
    flexDirection:'column',
    alignItems:{
        xs:'center',
        md:'flex-start'
    },
    textAlign:{
        xs:'center',
        md:'left'
    },
    height:{
      xs:'70vh',
      md:'80vh'
    },
    width:{
      xs:'100%',
      md:'45%'
    }
  }}>
  
    <Typography sx={{
      fontSize:{
        xs:'35px',
        md:'45px'
      },
      color:'white',
      fontWeight:'700',
      marginBottom:'3%',
      lineHeight:'1'
      
    }}>
      Galaxy S
    </Typography>
    <Typography sx={{
          width:'100%',
          marginBottom:'3%'
        }}> 
         Share the Epic
        </Typography>
   
    <button style={{
      padding:'10px 15px',
      cursor:'pointer',
      background:'whitesmoke',
      color:'black',
      fontSize:'20px',
      border:'none',
      outline:'none',
      borderRadius:'25px'

    }}>
      See All
    </button>
  </Box>
 
</Container>
    
</SwiperSlide> 
<SwiperSlide className='ban2'>
    
    <Container>
  <Box className='sub' sx={{
    display:'flex',
    justifyContent:{
      xs:'flex-start',
      md:'center'
    },
    flexDirection:'column',
    alignItems:{
        xs:'center',
        md:'flex-start'
    },
    textAlign:{
        xs:'center',
        md:'left'
    },
    height:{
      xs:'70vh',
      md:'80vh'
    },
    width:{
      xs:'100%',
      md:'45%'
    }
  }}>
  
    <Typography sx={{
      fontSize:{
        xs:'35px',
        md:'45px'
      },
      fontWeight:'700',
      marginBottom:'3%',
      lineHeight:'1'
      
    }}>
    Galaxy A Series
    </Typography>

    <Typography sx={{
          width:'100%',
          marginBottom:'3%'
        }}> 
          Awesome is for everyone
        </Typography>

   
    <button style={{
      padding:'10px 15px',
      cursor:'pointer',
      background:'whitesmoke',
      color:'black',
      fontSize:'20px',
      border:'none',
      outline:'none',
      borderRadius:'25px'

    }}>
      See All
    </button>
  </Box>
 
</Container>
    
</SwiperSlide>

  </Swiper>
    </div>
  )
}

export default Bannertwo
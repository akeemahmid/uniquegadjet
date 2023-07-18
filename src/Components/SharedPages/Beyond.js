import { Container, Typography, Box } from '@mui/material'
import React from 'react'
import { ProductState } from '../Pages/ContextPage/Context'
import AliceCarousel from 'react-alice-carousel'
import '../Styles/style.css'

const Beyond = () => {
    const {state:{beyond}} = ProductState()
    const items = beyond.map((x)=>{
        const {id, name, image} = x
        return(
           <div key={id} style={{
            overflow:'hidden',
            width:{
                xs:'35%',
                md:'30%'
            }
           }}>
            <img src={image} alt={name} style={{
                width:'150px',
                display:'block',
                overflow:' hidden',
                height:'70%'
            }}/>
            <Typography sx={{
                fontSize:'25px',
                fontWeight:'550',

            }}>
                {name}
            </Typography>
           </div>
        )
    })

    const responsive = {
        0:{
            items: 2,
        },
        512:{
            items: 4,
        },
        900:{
            items: 4,
        }
    }
  return (
    <div style={{
        marginTop:'3%',
        // background: '#f6f2ef'
    }}>
        <Container>
            <Typography 
             sx={{
                width:'100%',
                fontSize:{
                    xs:'33px',
                    md:'40px'
                },
                fontWeight:'600',
                textAlign:'center'
            }}> Galaxy goes beyond smartphones
            </Typography>
            <Box>
            <AliceCarousel
                // disableDotsControls
                mouseTracking
                infinite
                disableButtonsControls
              // autoPlayInterval={900}
                // animationDuration={1500}
                responsive={responsive}
                items={items}/>
            </Box>
        </Container>
     
    </div>
  )
}

export default Beyond
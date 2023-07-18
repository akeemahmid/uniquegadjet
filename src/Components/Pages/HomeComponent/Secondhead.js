import React from 'react'
import { ProductState } from "../ContextPage/Context";
import { Container, Typography } from '@mui/material'
import AliceCarousel from 'react-alice-carousel'
import '../../Styles/style.css'
import { Link } from 'react-router-dom'

// const {state: {products}} = ProductState()

const Secondhead  = () => {
    const {state:{secondArray}} = ProductState()
    console.log(secondArray)
    
    const items = secondArray.map((x)=>{
        const { id, name, writeup, image} = x
        return(
        <div key={id} style={{
            background:'#f6f2ef',
           display:'flex',
           flexDirection:'column',
           alignItems:'center',
           marginRight:'10px',
           height:{
            xs:'200px',
            md:'250px'
           },
           overflow:'hidden'
        }} >
            <img src={image} alt={name}  style={{
                 width:'100%',
                 height:'50%',
                 cursor:'pointer',
                 display:'block'
            }}/>
            {/* <div  style={{
                width:'100%',
                height:'50%',
                cursor:'pointer'
            }}> 
            image area
            </div> */}
            <div style={{
                width:'100%',
                height:'50%',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                textAlign:'center',
                padding:'20px'

            }}>
                <Typography sx={{
                    fontSize:'22px',
                    fontWeight:'bold',
                    marginBottom:'3%'
                }}>
                    {name}
                </Typography>
                <Typography sx={{
                    fontSize:'18px',
                    marginBottom:'3%'
                }}>
                    {writeup}
                </Typography>
                <button style={{
                    border:'none',
                    borderBottom:'2px solid black',
                    paddingBottom:'5px',
                    fontSize:'15px'
                }}>
                    learn more
                </button>
            </div>
        </div>
        )
    })

    const responsive = {
        0:{
            items: 1.5,
        },
        512:{
            items: 2.5,
        },
        900:{
            items: 3,
        }
    }
  return (
    <div style={{
        marginTop:'3%',
        marginBottom:'3%',
    }}>
          <Container>
         <AliceCarousel
                disableDotsControls
                mouseTracking
                // infinite
                disableButtonsControls
              // autoPlayInterval={900}
                // animationDuration={1500}
                responsive={responsive}
                items={items}/>
      
            {/* {products.slice(0, 7).map((product)=>{
                return(
                <h2>{product.name}</h2>
                )
            })} */}
       
        </Container>

            </div>
  
  )
}

export default Secondhead 

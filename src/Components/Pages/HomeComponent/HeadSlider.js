import React from 'react'
import { ProductState } from "../ContextPage/Context";
import { Container } from '@mui/material'
import AliceCarousel from 'react-alice-carousel'
import '../../Styles/style.css'
import { Link } from 'react-router-dom'

// const {state: {products}} = ProductState()

const HeadSlider = () => {
    const {state:{products}} = ProductState()
    console.log(products)
    
    const items = products.slice(0, 8).map((product)=>{
        return(
          <Link to={`/products/${product.id}`} key={product.id} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent:'space-between',
            height: {
                xs:'150px',
                sm:'170px'
            },
            // textAlign: 'center'
            width: {
                xs:'23%',
                md: '25%'
            },
            // border:'2px solid black',
            overflow: 'hidden',
            flexDirection: 'column',
            // background: '#f6f2ef'
            }}>
                <img src={product.displayImage} alt={product.name} style={{
                    width: {
                        xs:'50%',
                        md: '50%'
                    },
                    height: '100px',
                    borderBottom:'5px',
                    display:'block'
                }}/>
             
                <span style={{
                    fontSize:'15px'
                }}>{product.name}</span>
                
            
              
            </Link>
        )
    })

    const responsive = {
        0:{
            items: 2.5,
        },
        512:{
            items: 4,
        },
        900:{
            items: 5,
        }
    }
  return (
    <div style={{
        background: '#f6f2ef',
        paddingTop: '3%',
    }}>
          <Container>
         <AliceCarousel
                disableDotsControls
                mouseTracking
                infinite
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

export default HeadSlider
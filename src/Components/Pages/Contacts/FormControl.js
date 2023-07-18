import React from 'react'
import { Container, Box, Typography} from '@mui/material'
import { ProductState } from '../ContextPage/Context'
import Quesstion from './Quesstion'
// import { Button } from 'react-scroll'

const FormControl = () => {
    const {state:{questions}} = ProductState()
  return (
    <div style={{
        marginTop:'3%'
    }}>
        <Container>
        <form action='mailto:akeemabdulhamid7@gmail.com' method='GET'>
            <Box sx={{
                display:'flex',
                alignItems:'center',
                justifyContent:{
                    xs:'none',
                    md:'space-between',
                },
                flexWrap:'wrap',
                flexDirection:{
                        xs:'column',
                        md:'row'
                },
                width:{
                    xs:'100%',
                    md:'80%'
                }
            }}>
                  <Box sx={{
                display:'flex',
                alignItems:'flex-start',
                flexDirection:'column',
                width:{
                    md:'40%',
                    xs:'100%'
                }
            }}>
                <label style={{
                    fontWeight:'450',
                    fontSize:'20px'
                }}>
                    First Name
                </label>
                <input  type='text' placeholder='First Name' name='subject' style={{
                    width:'100%',
                    background:'#f6f2ef',
                    outline:'none',
                    padding:'10px',
                    fontSize:'18px',
                    border:'none',
                    borderRadius:'10px',
                    marginBottom:'3%'
                }} required/>
            </Box>
            <Box sx={{
                display:'flex',
                alignItems:'flex-start',
                flexDirection:'column',
                width:{
                    md:'40%',
                    xs:'100%'
                }
            }}>
                <label style={{
                    fontWeight:'450',
                    fontSize:'20px'
                }}>
                   Last Name
                </label>
                <input  type='text'  style={{
                    width:'100%',
                    background:'#f6f2ef',
                    outline:'none',
                    padding:'10px',
                    fontSize:'18px',
                    border:'none',
                    borderRadius:'10px',
                    marginBottom:'3%'
                }} required/>
            </Box>
            <Box sx={{
                display:'flex',
                alignItems:'flex-start',
                flexDirection:'column',
                width:{
                    md:'40%',
                    xs:'100%'
                }
            }}>
                <label style={{
                    fontWeight:'450',
                    fontSize:'20px'
                }}>
                   Contact Preferance
                </label>
                <input  type='text'  style={{
                    width:'100%',
                    background:'#f6f2ef',
                    outline:'none',
                    padding:'10px',
                    fontSize:'18px',
                    border:'none',
                    borderRadius:'10px',
                    marginBottom:'3%'
                }}/>
            </Box>
            <Box sx={{
                display:'flex',
                alignItems:'flex-start',
                flexDirection:'column',
                width:{
                    md:'40%',
                    xs:'100%'
                }
            }}>
                <label style={{
                    fontWeight:'450',
                    fontSize:'20px'
                }}>
                  Phone Number
                </label>
                <input  type='text'  style={{
                    width:'100%',
                    background:'#f6f2ef',
                    outline:'none',
                    padding:'10px',
                    fontSize:'18px',
                    border:'none',
                    borderRadius:'10px',
                    marginBottom:'3%'
                }} required/>
            </Box>
            <Box sx={{
                display:'flex',
                alignItems:'flex-start',
                flexDirection:'column',
                width:{
                    md:'40%',
                    xs:'100%'
                }
            }}>
                <label style={{
                    fontWeight:'450',
                    fontSize:'20px'
                }}>
                    Email
                </label>
                <input  type='email' name='email' style={{
                    width:'100%',
                    background:'#f6f2ef',
                    outline:'none',
                    padding:'10px',
                    fontSize:'18px',
                    border:'none',
                    borderRadius:'10px',
                    marginBottom:'3%'
                }} required/>
            </Box>
            <Box sx={{
                display:'flex',
                alignItems:'flex-start',
                flexDirection:'column',
                width:{
                    md:'40%',
                    xs:'100%'
                }
            }}>
                <label style={{
                    fontWeight:'450',
                    fontSize:'20px'
                }}>
                    Region
                </label>
                <input  type='text'  style={{
                    width:'100%',
                    background:'#f6f2ef',
                    outline:'none',
                    padding:'10px',
                    fontSize:'18px',
                    border:'none',
                    borderRadius:'10px',
                    marginBottom:'3%'
                }} required/>
            </Box>
            <Box sx={{
                display:'flex',
                alignItems:'flex-start',
                flexDirection:'column',
                width:{
                    md:'40%',
                    xs:'100%'
                }
            }}>
                <label style={{
                    fontWeight:'450',
                    fontSize:'20px'
                }}>
                    Zip Code
                </label>
                <input  type='text' style={{
                    width:'100%',
                    background:'#f6f2ef',
                    outline:'none',
                    padding:'10px',
                    fontSize:'18px',
                    border:'none',
                    borderRadius:'10px',
                    marginBottom:'3%'
                }} required/>
            </Box>
            </Box>
            <Box sx={{
            marginTop:'3%',
            textAlign:'center'
        }}>
            <Typography sx={{
                width:'100%',
                textAlign:'left',
                marginBottom:'2%',
                textDecoration:'underline 2px solid',
                fontSize:'25px',
                fontWeight:'500'
            }}>
                Get UniqueGadget Update
            </Typography>
            <Typography sx={{
                textAlign:'left'
            }}>
                By clicking "Submit & Continue" i agree to share the provided information with UniqueGadget to be 
                with more details about UniqueGadget products. I understand Lorem ipsum dolor, sit amet consectetur
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, repellat accusamus? Nostrum 
                tenetur facere reprehenderit ratione voluptates molestiae aspernatur aliquid et nobis quidem. Quas 
                ab repudiandae eligendi voluptas a quam.
                 adipisicing elit. Est perspiciatis minus incidunt necessitatibus iste nisi repellat a asperiores accusantium aliquid?
            </Typography>
            <input type='submit' value='Submit and Continue' style={{
                padding:'10px  15px',
                // borderRadius:'10px',
                fontSize:'20px',
                outline:'none',
                background:'blue',
                border:'none',
                color:'whitesmoke',
                alignSelf:'center',
                // width:'100%',
                textAlign:'center',
                marginTop:'2%'
            }}/>
        </Box>  
        </form>
        <Box sx={{
            marginTop:'3%'
        }}>
        <Typography sx={{
            textAlign:'left',
            fontWeight:'650',
            fontSize:{
                md:'33px',
                xs:'27px'
            },
            marginBottom:'2%'
        }}>
                FAQ
            </Typography>
            <Box sx={{
                width:'100%',
                textAlign:'center'
            }}>
            {questions.map((question)=>{
                return <Quesstion key={question.id} {...question}/>
            })}
            </Box>
          
        </Box>
           
        </Container>
    </div>
  )
}

export default FormControl
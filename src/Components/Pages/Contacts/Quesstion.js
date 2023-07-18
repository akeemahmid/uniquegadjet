import React, { useState } from 'react'
import { Container, Box, Typography} from '@mui/material'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const Quesstion = ({que, render}) => {
    const [open, setOpen] = useState(false)
  return (
    <div  style={{
        display:'flex',
        alignItems:'center',
        // justifyContent:'space-between',
        flexDirection:'column',
        width:{
            xs:'100%',
            md:'70%'
        },
        border:'1.5px solid #f6f2ef',
        padding:'10px 15px'
    }}>
        <Box sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            width:'100%'
        }}>
       <Typography sx={{
         fontSize:{
            xs:'18px',
            md:'20px'
        },
        fontWeight:'450'
       }}>
       {que}
       </Typography>
       <button style={{
        border:'none',
        fontSize:{
            xs:'30px',
            md:'35px'
        },
        background:'none'
       }} onClick={()=>setOpen(!open)}>
        {open ? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </button>
        </Box>
        {open &&   <Box sx={{
        textAlign:'left',
        fontSize:{
            xs:'18px',
            md:'20px'
        },
        marginTop:'3%'
      }}>
        {render }
      </Box>}

        
    </div>
  )
}

export default Quesstion
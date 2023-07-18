import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Identity = () => {
  return (
    <div>
        <Container>
            <Box sx={{
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between',
                flexWrap:'wrap'
            }}>
                <Typography>
                    Connect with me via all social platforms
                </Typography>
            </Box>
        </Container>
    </div>
  )
}

export default Identity
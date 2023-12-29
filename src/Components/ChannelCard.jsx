import React from 'react'

import { demoProfilePicture } from '../utils/contants'
import { Link } from 'react-router-dom'
import { Box,CardMedia,CardContent,Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
//import Typography from '@mui/material'
function ChannelCard({channelDetail,marginTop}) {
  return (
    <Box
        sx={{
            boxShadow:'none',
            borderRadius:'20px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            marginTop,
        }}
    >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{display:'flex',flexDirection:'column', justifyContent:'center', textAlign:'center',color:'#fff'}}>
            <CardMedia 
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{borderRadius:'50%', height:'180px', width:'180px',
            ml:'50px', mr:'50px'
        }}
            />
        <Typography variant='h6' 
        sx={{mt:'5px'}}
        >
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ml:'5px'}}/>
        </Typography>
            </CardContent>
        
        </Link>  
    </Box>
  )
}

export default ChannelCard;

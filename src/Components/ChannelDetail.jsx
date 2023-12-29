import React from 'react'

import { useState,useEffect} from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom' 
import ChannelCard from './ChannelCard';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import Videos from './Videos';

function ChannelDetail() {
  
  const {id} = useParams();

  const [channelDetail,setChannelDetail] = useState(null);
  const [videos,setVideos] = useState([]);

console.log(videos,channelDetail)

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=> setChannelDetail(data?.items[0]));
  
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items));
    
  }, [id])
  

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: 'linear-gradient(90deg, rgba(229,0,240,1) 0%, rgba(129,5,238,0.936186974789916) 41%, rgba(78,149,233,1) 93%)',
            zIndex:10,
            height:'300px'
          }}
        />
        <ChannelCard channelDetail={channelDetail}
        marginTop='-110px'
       />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr:{sm:'100px'}}} />
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail

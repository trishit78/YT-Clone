import React from 'react' 

import {useState,useEffect} from 'react';
import { Stack,Box,Typography } from '@mui/material';
import Sidebar from './Sidebar';
import '../App.css'
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

function SearchFeed() {

  const [selectedCategory,setSelectedCategory] = useState('New');
  const {searchTerm} = useParams();
  const [videos,setVideos] = useState([]);

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>setVideos(data.items))
  },[selectedCategory])
  
  
  return (
    <Stack 
    sx={{flexDirection:{sx:'column', md:'row'}}}
    >
      <Box sx={{height:{sx:'auto' ,md:'92vh'},
      borderRight:'1px solid #3d3d3d', px:{sx:0 , md:2}
    }}>
      <Sidebar 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Typography className='copyright pb-2'
      variant='body2' sx={{mt:1.5, color:'#fff'}}
      
      
      >
        Copyright @ 2023

      </Typography>
      </Box>

      <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
        <Typography variant='h4'
        frontWeight='bold'  mb={2}  sx={{color:'white'}}
        >
          Searched results for: {' '}<span style={{color:'#F31503'}}>
            {searchTerm}
          </span> videos
        </Typography>
        <Videos videos={videos}/>
      </Box>

      
    </Stack>
  )
}

export default SearchFeed;

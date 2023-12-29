import React from 'react'

import {Stack} from '@mui/material'
import {Link} from 'react-router-dom'
import {logo} from '../utils/contants'
import SearchBar from './SearchBar'



function Navbar() {
  return (
    <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{position:'sticky', background:'#000', top:'0', justifyContent:'space-between'}}
    >
        <Link to='/' style={{idsplay:'flex', alignItems:'center'}}>
            <img src={logo} alt="YTlogo"  className='h-12 ml-6 mt-2 ' />
        
        </Link>
        <SearchBar />
    </Stack>
  )
}

export default Navbar

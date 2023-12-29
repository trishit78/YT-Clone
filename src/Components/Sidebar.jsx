import React from 'react' 
import '../App.css'
import { Stack } from '@mui/material';


const categories = [
    { name: 'New', icon: 'HomeIcon', },
    { name: 'JS Mastery', icon: 'CodeIcon' , },
    { name: 'Coding', icon: 'CodeIcon' , },
    { name: 'ReactJS', icon: 'CodeIcon' , },
    { name: 'NextJS', icon: 'CodeIcon' , },
    { name: 'Music', icon: 'MusicNoteIcon'  },
    { name: 'Education', icon: 'SchoolIcon' , },
    { name: 'Podcast', icon: 'GraphicEqIcon' , },
    { name: 'Movie', icon: 'OndemandVideoIcon' , },
    { name: 'Gaming', icon: 'SportsEsportsIcon' , },
    { name: 'Live', icon: 'LiveTvIcon' , },
    { name: 'Sport', icon: 'FitnessCenterIcon' , },
    { name: 'Fashion', icon: 'CheckroomIcon' , },
    { name: 'Beauty', icon: 'FaceRetouchingNaturalIcon' , },
    { name: 'Comedy', icon: 'TheaterComedyIcon' , },
    { name: 'Gym', icon: 'FitnessCenterIcon' , },
    { name: 'Crypto', icon: 'DeveloperModeIcon' , },
  ];


function Sidebar({selectedCategory,setSelectedCategory}) {

  return (
    <Stack
        direction='row'
        sx={{
            overflowY:'auto',
            height:{ sx:'auto', md:'95%'},
            flexDirection:{md:'column'},
        }}
    >
        {categories.map((category)=>(
            <button className='category-btn'
            onClick={()=>
                setSelectedCategory(category.name)
            }
            key={category.name}
            style={{
                background:category.name === selectedCategory && '#FC1503',
                color:'white'
            }}
            >
                <span className='text-white'>{category.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default Sidebar

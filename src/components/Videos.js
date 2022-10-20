import React,{useState,useEffect} from 'react'
import axios from 'axios'

import {Grid,Typography,Card,CardHeader,CardMedia,CardActions,CardContent,IconButton,Button} from '@mui/material'
import {PlayCircle} from "@mui/icons-material"

const Videos = () => {
    const[videos,setVideos]=useState([])
    useEffect(()=>{
        const getVideos=async ()=>{
            try{
const {data}=await axios.get(`http://localhost:8800/videos`)
setVideos(data)


            }
            catch(error){
                console.error(error)
            }
        }
getVideos()
    },[])

    const Container=(props)=><Grid   container {...props}/>
        const Item=(props)=><Grid item {...props}/>
  return (
    <Container spacing={6}>
    {videos.map((video)=>{
        return <Item xs={12}  sm={3} key={video.id}>
        
  

    <Card  sx={{height:'440px', backgroundColor:"rgb(107, 20, 41)"}}>
<CardHeader
sx={{color:'#ffff', fontFamily:"'Playfair Display SC',sans-serif"}}
title={video.name}
/>
        <CardMedia
        
        component='img'
      image={`http://localhost:8800${video.poster}`}
       alt={video.name}
      />
      <CardContent>
<Typography variant="body2" sx={{fontFamily: '"Lato", sans-serif',color:'#fff'}}>
 {video.description}
</Typography>
      </CardContent>

   <CardActions>
    <IconButton>
       
            <Button sx={{backgroundColor:"rgb(20, 15, 35)"}} startIcon={<PlayCircle/>} href={`player/${video.id}`} variant="contained">Watch Course</Button>

       
    
    </IconButton>

   </CardActions>

   
    </Card>
    

        </Item>
    })}
    </Container>
  )
}

export default Videos
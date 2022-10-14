import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {Grid,Typography,Card,CardHeader,CardMedia,CardActions,CardContent,IconButton,Button} from '@mui/material'
import {PlayCircle} from "@mui/icons-material"

const Home = () => {
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

    const Container=(props)=><Grid container {...props}/>
        const Item=(props)=><Grid item {...props}/>
  return (
    <Container spacing={4}>
    {videos.map((video)=>{
        return <Item xs={12}  sm={6} md={3} key={video.id}>
        
  

    <Card >
<CardHeader
title={video.name}
/>
        <CardMedia 
        component='img'
      image={`http://localhost:8800${video.poster}`}
       alt={video.name}
      />
      <CardContent>
<Typography variant="body2">
    The theory of probability had its origin in gambling and games of chance. It owes 
much to the curiosity of gamblers who pestered their friends in the mathematical 
world with all sorts of questions. Unfortunately, this association with gambling contributed to very slow and sporadic growth of probability theory as a mathematical 
discipline. The mathematicians of the day took little or no interest in the development of any theory but looked only at the combinatorial reasoning involved in each 
problem.
</Typography>
      </CardContent>

   <CardActions>
    <IconButton>
       
            <Button startIcon={<PlayCircle/>} href={`player/${video.id}`} variant="contained">Watch Course</Button>

       
    
    </IconButton>

   </CardActions>

   
    </Card>
    

        </Item>
    })}
    </Container>
  )
}

export default Home
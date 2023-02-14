import React,{useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Grid,Typography,Card,CardHeader,CardMedia,CardActions,CardContent,IconButton,Button} from '@mui/material'
import {PlayCircle} from "@mui/icons-material"

const Videos = ({videos,setVideos,videosDisplay,setVideosDisplay}) => {

    useEffect(()=>{
        const getVideos=async ()=>{
            try{
const {data}=await axios.get(`http://localhost:8000/videos`)

setVideos(data)
setVideosDisplay(data)


            }
            catch(error){
                console.error(error)
            }
        }
getVideos()
    },[setVideos,setVideosDisplay])

    const Container=(props)=><Grid   container {...props}/>
        const Item=(props)=><Grid item {...props}/>
  return (
    <Container   spacing={3}>
    {videosDisplay.map((video)=>{
        return <Item xs={6}  sm={3} key={video.id}>
            
        
  <Typography component={Link}  sx={{textDecoration:'none'}} to={`player/${video.id}`}>

    <Card  sx={{ backgroundColor:"#18465a",textDecoration:'none', height:'200px', marginTop:'5px'}}>

        <CardMedia
     height='80%'
        component='img'
      image={` http://localhost:8000${video.poster}`}
       alt={video.name}
      />
      <CardContent sx={{paddingBottom:'5px',marginBottom:'5px'}}>
<Typography variant="p" component="p" sx={{fontFamily: '"Lato", sans-serif',color:'#6bb77b',textDecoration:'none', fontSize:{xs:'12px',sm:"18px"}, paddingBottom:'5px'}}>
 {video.name}
</Typography>
      </CardContent>

   <CardActions>
    <IconButton>
       


       
    
    </IconButton>

   </CardActions>

   
    </Card>
    </Typography>

        </Item>
    })}
    </Container>
  )
}

export default Videos
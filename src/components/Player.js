import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {Stack,Box,Typography} from '@mui/material'

const Video = (props) => {
  const {id}=useParams()
  console.log(id)

    const[videoData,setVideoData]=useState({})
    useEffect(()=>{
      const getVideo=async ()=>{
try{
  const {data}= await axios.get(`http://localhost:8000/video/${id}/data`)
setVideoData(data)

}catch(e){
  console.error(e)
}
      }
getVideo()
    },[id])
  return (
 <Stack spacing={2}>
<Box>
  <video width='100%' height='500' controls >
    <source src={`http://localhost:8000/video/${id}`} type='video/mp4'></source>
 </video>
 
</Box>
<Box sx={{display:'flex',justifyContent:'center'}}>
  <Typography variant='h4'>
 {videoData.name}
  </Typography>

</Box>
<Box sx={{display:'flex',justifyContent:'center'}}>
 <h1>Notes Component goes here</h1>

</Box>
 
 </Stack>
  )
}

export default Video
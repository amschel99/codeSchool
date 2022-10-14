import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Video = (props) => {
  const {id}=useParams()
  console.log(id)

    const[videoData,setVideoData]=useState({})
    useEffect(()=>{
      const getVideo=async ()=>{
try{
  const {data}= await axios.get(`http://localhost:8800/video/${id}/data`)
setVideoData(data)

}catch(e){
  console.error(e)
}
      }
getVideo()
    },[id])
  return (
 <>
 <video controls muted>
    <source src={`http://localhost:8800/video/${id}`} type='video/mp4'></source>
 </video>
 <h1>{videoData?.name}</h1>
 </>
  )
}

export default Video
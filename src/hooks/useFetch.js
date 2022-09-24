import {useEffect,useState} from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [data,setData]=useState(null)

    useEffect(()=>{
        const fetchData= async ()=>{
           const res= await axios.get(url)
           const resData=res.data
           setData(resData)
        }
        fetchData()

    },[url])
    return data
 
}

export default useFetch
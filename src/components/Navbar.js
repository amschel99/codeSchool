import React,{useState,useEffect} from "react"
import {AppBar,Toolbar,Typography,Button,IconButton,Slide,styled,Box,Stack,Modal,Select,OutlinedInput,TextField,ListSubheader,InputAdornment,MenuItem} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import {Person,Search} from "@mui/icons-material"
import Videos from './Videos'
import DrawerComponent from "./Drawer"
import MobileDrawer from './MobileDrawer'
import SignUp from './Signup'
import {Link} from 'react-router-dom'





const Navbar= ({theme})=>{
     const[videos,setVideos]=useState([])//coming from an api
     const searchRef=React.useRef()
     const[searchText,setSearchText]=React.useState("")

        const[videosDisplay,setVideosDisplay]=useState([])

    const [scrolling,setScrolling]=useState(false)
    const [scrollTop, setScrollTop]=useState(0)
    const[value,setValue]=useState(0)
    const[open,setOpen]=useState(false)
        const[openModal,setOpenModal]=useState(false)
    const updateValue=(e,v)=>{
       
        setValue(v)
    }
    

const StyledToolbar=styled(Toolbar)(({theme})=>(
{
display:"flex",
justifyContent:"space-between"
}
))
const StyledBox=styled(Box)(({theme})=>(
{
display:"flex",
justifyContent:"space-evenly",
alignItems:"center"
}
))
const StyledNav=styled(AppBar)(({theme})=>(
{
backgroundColor:theme.palette.deep.main,

'z-index':10
}
))

    useEffect(()=>{
           function handleScroll(e){
        setScrollTop(e.target.documentElement.scrollTop)
        setScrolling(e.target.documentElement.scrollTop>scrollTop)
    }


        window.addEventListener('scroll',handleScroll)
        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }

    },[scrolling,scrollTop])

    useEffect(()=>{
       return  setScrolling((prev)=>prev!==scrolling)
    },[scrolling])



    return (
        <div   >
            <Slide in={!scrolling}>
         <StyledNav >
            <StyledToolbar sx={{flex:4}}>
                <StyledBox>
                <IconButton
               onClick={()=>setOpen((prev)=>!prev)}
                aria-label="Menu"
                sx={{display:{xs:"block",sm:"none"},color:'#9ec1d7'}}
                >
                    <MenuIcon sx={{color:'#6bb77b'}}/>
                </IconButton>
                <Box sx={{display:'flex',flexDirection:'column'}}>
                 
                    <Typography variant='h5' component='h4'  sx={{color:"#6bb77b",fontWeight:'bold', fontStyle:'cursive'}} >
                   levelUpJs
                  
              </Typography>

                </Box>
                
               
                </StyledBox>
                <StyledBox sx={{flex:4,display:{xs:'none',sm:'flex',margin:'2px solid red',justifyContent:'center'}}}>
                 
     <Typography component={Link}  sx={{color:'#6bb77b',textDecoration:'none',marginLeft:'15px', marginRight:'15px'}} variant="h6">
       <span>Learn</span>
        </Typography> 
      

          <Typography component={Link}   sx={{color:'#6bb77b',textDecoration:'none',marginLeft:'15px', marginRight:'15px'}} variant="h6">
   Challenges
        </Typography>  

    
        
          <Typography  component={Link}  sx={{color:'#6bb77b',textDecoration:'none',marginLeft:'15px', marginRight:'15px'}} variant="h6">
CodeBuddies
        </Typography> 
           
                </StyledBox>
                <StyledBox  sx={{justifyContent:'center',flex:1}}>
                    

<Button onClick={()=>setOpenModal(true)} sx={{backgroundColor:'#6bb77b',color:'#18465a'}} variant='contained' >Sign Up</Button>
                </StyledBox>
                
            </StyledToolbar>


         </StyledNav>
          </Slide>
          <Box sx={{marginTop:{xs:'55px',sm:'67px'}}}>
            <Stack direction='row' gap={36}>
<DrawerComponent videosDisplay={videosDisplay} setVideosDisplay={setVideosDisplay}  videos={videos} setVideos={setVideos} />
<Videos videosDisplay={videosDisplay} setVideosDisplay={setVideosDisplay}  videos={videos} setVideos={setVideos}/>
<MobileDrawer  videosDisplay={videosDisplay} setVideosDisplay={setVideosDisplay}   videos={videos} setVideos={setVideos} open={open} setOpen={setOpen} value={value} updateValue={updateValue} />

            </Stack>

          </Box>
          <Modal
  open={openModal}
  onClose={()=>setOpenModal(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
    <SignUp/>
  
</Modal>


        </div>
    )
}
export default Navbar
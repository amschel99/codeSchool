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
                sx={{display:{xs:"block",sm:"none"},color:'rgb(20, 15, 35)'}}
                >
                    <MenuIcon sx={{color:'white'}}/>
                </IconButton>
                <Box sx={{display:'flex',flexDirection:'column'}}>
                 
                    <Typography variant='h5' component='h4'  sx={{color:"#eff1ee",fontWeight:'bold'}} >
                     WebWarrior
                  
              </Typography>

                </Box>
                
               
                </StyledBox>
                <StyledBox sx={{flex:2,display:{xs:'none',sm:'flex'}}}>
                 
     <Typography component={Link}  sx={{color:'#6bb77b',textDecoration:'none'}} variant="h6">
       <span>Dashboard</span>
        </Typography> 
      

          <Typography component={Link}   sx={{color:'#6bb77b',textDecoration:'none'}} variant="h6">
     My Courses
        </Typography>  

    
        
          <Typography  component={Link}  sx={{color:'#6bb77b',textDecoration:'none'}} variant="h6">
Publish
        </Typography> 
           <Typography  component={Link}  sx={{color:'#6bb77b',textDecoration:'none'}} variant="h6">
        <Select
         sx={{width:{xs:'30vw',sm:'30vw'},height:"40px",backgroundColor:'white' ,border:'none',position:{xs:'absolute', sm:"relative"}, right:{xs:'90px',sm:'-50px'}}}
     
         MenuProps={{ autoFocus: false }}
          labelId="search-select-label"
          id="search-select"
          value={searchText}
          label="Search Course"
         
     
         
          input={<OutlinedInput sx={{border:'none'}} label="search course" />}
          onChange={(event)=>{
         searchRef.current.value=event.target.value
          setSearchText(event.target.value)
               
  
          }}
          onClose={()=>{
            setValue('')
          }}
               renderValue={() => searchText}
        >
            <ListSubheader>
           <TextField
            //sx={{width:{xs:'55vw',sm:'30vw'}, position:{xs:'absolute', sm:"relative"}, right:{xs:'90px',sm:'0'}}}
           size="small"
              // Autofocus on textfield
              autoFocus

                  required
                  fullWidth
                  name="course"
                  label="Search course"
                  type="text"
                  id="course"
                 

                   inputRef={searchRef}
           
             InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                )
              }}
             onChange={ (e)=>{
setValue(e.target.value)
             }}
             onKeyDown={(e) => {
                if (e.key !== "Escape") {
                  // Prevents autoselecting item while typing (default Select behaviour)
                  e.stopPropagation();
                }
              }}
                />
                </ListSubheader>
          {videos.map(({name,_id}) => (
            <MenuItem
              key={_id}
              value={name}
              
            >
              {name}
            </MenuItem>
          ))}
        </Select>
                  
</Typography> 
                </StyledBox>
                <StyledBox  sx={{justifyContent:'space-evenly',flex:1}}>
                    

<Button onClick={()=>setOpenModal(true)}  variant='contained' color="calm">Sign Up</Button>
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
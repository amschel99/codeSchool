import React,{useState,useEffect} from "react"
import {AppBar,Toolbar,Typography,Button,IconButton,Slide,styled,Box,Stack,Modal} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import Videos from './Videos'
import DrawerComponent from "./Drawer"
import MobileDrawer from './MobileDrawer'
import SignUp from './Signup'
import {Link} from 'react-router-dom'





const Navbar= ({theme})=>{
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
                    <MenuIcon/>
                </IconButton>
                <Box sx={{display:'flex',flexDirection:'column'}}>
                 
                    <Typography variant='h5' component='h4'  sx={{color:"rgb(107, 20, 41)",fontWeight:'bold'}} >
                     TheCodingNerd
                  
              </Typography>

                </Box>
                
               
                </StyledBox>
                <StyledBox sx={{flex:2,display:{xs:'none',sm:'flex'}}}>
                       <Link >
     <Typography  sx={{color:'#fff',textDecoration:'none'}} variant="h6">
     Blog
        </Typography> 
        </Link>
<Link>
          <Typography  sx={{color:'#fff',textDecoration:'none'}} variant="h6">
        Discord Server
        </Typography>  

        </Link>  
        <Link>
          <Typography  sx={{color:'#fff',textDecoration:'none'}} variant="h6">
Community
        </Typography>  
        
        </Link>            

                </StyledBox>
                <StyledBox  sx={{justifyContent:'space-evenly',flex:1}}>
                    

<Button onClick={()=>setOpenModal(true)}  variant='contained' color="calm">Sign Up</Button>
                </StyledBox>
                
            </StyledToolbar>


         </StyledNav>
          </Slide>
          <Box sx={{marginTop:{xs:'55px',sm:'67px'}}}>
            <Stack direction='row' gap={36}>
<DrawerComponent />
<Videos/>
<MobileDrawer open={open} setOpen={setOpen} value={value} updateValue={updateValue} />

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
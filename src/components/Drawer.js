import React from 'react'

import {ListItem,ListItemIcon,ListItemText,Drawer,List,ListSubheader,Typography,Button} from '@mui/material'
import {Code,GitHub,Javascript, CodeSharp as Reactjs,Html} from "@mui/icons-material"
const DrawerComponent = () => {

    const [items]=React.useState({
      learningPaths:[
        {label:"Frontend",Icon:Reactjs,path:'frontend'},
          {label:"Backend",Icon:Code,path:'backend'},
            {label:"Networking",Icon:Javascript,path:'fullstack'},
              {label:"Ethical Hacking",Icon:GitHub,path:'git'},
           
              {label:"AI and Machine Learning",Icon:GitHub,path:'git'},
              {label:"Blockchain",Icon:GitHub,path:'git'},
              {label:"Cloud(AWS)",Icon:GitHub,path:'git'}
      ],
      PlayGrounds:[
        {label:" Javascript ",Icon:Javascript,path:'jsPlayground'},
          {label:"Node Js",Icon:Html,path:'htmlPlayground'},
            {label:"React JS",Icon:Reactjs,path:'reactPlayground'},
              {label:"React Native",Icon:Code,path:'nodePlayground'},
              {label:"Solidity",Icon:GitHub,path:'git'}


      ],
     
      
      


    })

    const ListItems=({items})=>{
        return <>
        {items.map(({label,Icon},i)=>{
            return <ListItem sx={{width:'20vw',color:'rgb(20, 15, 35)'}} component={Button}  key={i}>

<ListItemIcon>
    <Icon/>
</ListItemIcon>
<ListItemText>{label}</ListItemText>

            </ListItem>
        })}
        </>
    }
  return (
    <Drawer variant='permanent' sx={{'z-index':5, display:{xs:'none',sm:'block'}}} >
<List sx={{marginTop:7}}>
<ListSubheader sx={{color:"rgb(107, 20, 41)"}}>
  <Typography variant="h5">
    Learning Paths
  </Typography>
  </ListSubheader>
<ListItems sx={{color:'rgb(20, 15, 35)'}} items={items.learningPaths}/>
<ListSubheader sx={{color:"rgb(107, 20, 41)"}}>
  <Typography variant="h5">
    Playgrounds
  </Typography>
  </ListSubheader>
<ListItems  sx={{color:'rgb(20, 15, 35)'}} items={items.PlayGrounds}/>

</List>
    </Drawer>
  )
}

export default DrawerComponent
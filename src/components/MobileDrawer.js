import React from 'react'

import {ListItem,ListItemIcon,ListItemText,Drawer,List,ListSubheader,Button,Typography} from '@mui/material'

import {Code,GitHub,Javascript, CodeSharp as Reactjs,Html,NetworkPingSharp,Security,Apps,Cloud} from "@mui/icons-material"

const DrawerComponent = ({open,setOpen,value,updateValue}) => {


    const [items]=React.useState({
     
      
      learningPaths:[
         {label:"HTML and Css",Icon:Html},
        {label:"Javascript",Icon:Javascript},
          {label:"Node JS",Icon:Code},
            {label:"React JS",Icon:Reactjs},
              {label:"Networking",Icon:NetworkPingSharp},
           
       
      ],
      PlayGrounds:[
        {label:" Data Structures and Algorithims ",Icon:Code},
          {label:"Web Security",Icon:Security},
            {label:"Git Version Control",Icon:GitHub},
              {label:"Unit Testing",Icon:Code},
              {label:"Progressive Web Apps",Icon:Apps},
                  {label:"AWS for developers",Icon:Cloud}


      ],

    })
    const ListItems=({items})=>{
        return <>
        {items.map(({label,Icon},i)=>{
            return <ListItem sx={{width:'70vw',color:'rgb(20, 15, 35)'}} component={Button}  key={i}>

<ListItemIcon>
    <Icon/>
</ListItemIcon>
<ListItemText>{label}</ListItemText>

            </ListItem>
        })}
        </>
    }

    
  return (
    <Drawer open={open} 
    PaperProps={{
      sx: {
       
         backgroundColor:'#6bb77b',
         
      
      }
    }}
    onClose={()=>setOpen(false)} variant='temporary' sx={{'z-index':5,display:{xs:'block',sm:'none'} }} >
<List sx={{marginTop:7}}>
<ListSubheader sx={{color:'#18465a', backgroundColor:'#6bb77b'}}>
  <Typography variant="h5">
    Learning Paths
  </Typography>
  </ListSubheader>
<ListItems sx={{color:'#6bb77b"'}} items={items.learningPaths}/>
<ListSubheader sx={{color:'#18465a', backgroundColor:'#6bb77b'}}>
  <Typography variant="h5">
    Playgrounds
  </Typography>
  </ListSubheader>
<ListItems sx={{color:'#6bb77b"'}} items={items.PlayGrounds}/>

</List>
    </Drawer>
  )
}

export default DrawerComponent
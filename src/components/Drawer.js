import React from 'react'

import {ListItem,ListItemIcon,ListItemText,Drawer,List,ListSubheader,Typography,Button} from '@mui/material'
import {Code,GitHub,Javascript, CodeSharp as Reactjs,Html,NetworkPingSharp,Security,Apps,Cloud} from "@mui/icons-material"
const DrawerComponent = () => {

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
Elective course work
  </Typography>
  </ListSubheader>
<ListItems  sx={{color:'rgb(20, 15, 35)'}} items={items.PlayGrounds}/>

</List>
    </Drawer>
  )
}

export default DrawerComponent
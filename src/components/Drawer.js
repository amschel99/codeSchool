import React from 'react'

import {ListItem,ListItemIcon,ListItemText,Drawer,List,ListSubheader,Typography,Button} from '@mui/material'
import {Code,GitHub,Javascript, CodeSharp as Reactjs,Html,NetworkPingSharp,Security,Apps,Cloud} from "@mui/icons-material"
const DrawerComponent = ({videos,setVideos,videosDisplay,setVideosDisplay}) => {
 

    const [items]=React.useState({
      learningPaths:[
         {label:"HTML and Css",Icon:Html,path:'html'},
        {label:"Javascript",Icon:Javascript,path:'Javascript'},
          {label:"Node JS",Icon:Code,path:'node'},
            {label:"React JS",Icon:Reactjs,path:'React'},
              {label:"Networking",Icon:NetworkPingSharp,path:'networking'},
           
       
      ],
      PlayGrounds:[
        {label:" Data Structures and Algorithims ",Icon:Code,path:"dsa"},
          {label:"Web Security",Icon:Security,path:"security"},
            {label:"Git Version Control",Icon:GitHub,path:"security"},
              {label:"Unit Testing",Icon:Code,path:"testing"},
              {label:"Progressive Web Apps",Icon:Apps,path:"pwas"},
                  {label:"AWS for developers",Icon:Cloud, path:'cloud'}


      ],
     
      
      


    })
    const filterVideos=(path)=>{
     const filteredVideos= videos.filter((video)=>video.path===path)
     alert(path);
     setVideosDisplay(filteredVideos)

    }

    const ListItems=({items})=>{
        return <>
        {items.map(({label,Icon,path},i)=>{
            return <ListItem sx={{width:'20vw',color:'rgb(20, 15, 35)'}}
            onClick={

 ()=>filterVideos(path)

            }
            
            component={Button}  key={i}>

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
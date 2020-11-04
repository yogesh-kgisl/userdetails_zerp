import React from "react";
import { animated } from "react-spring";
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid, IconButton } from "@material-ui/core";
import Chip from '@material-ui/core/Chip';
import CloseIcon from '@material-ui/icons/Close';
import { useContext } from "react";
import Questioncontext from "../ContextAPI/Questioncontext";

import Mapcontainer from "./Mapcontainer";
import { SocialIcon } from 'react-social-icons';



const useStyles = makeStyles((theme) => ({
modal:{
    width:'60%',
    background:'white',
    borderRadius:'20px',
    marginLeft:'20%'

},
modalgrid6:{
  padding:'60px 50px'
},
social:{
    justifyContent:'space-between',
    display:'flex'
},
bgcolorcard:{
  background:'linear-gradient(to bottom, #6699ff 0%, #3333ff 100%)',height:'500px'
},
buttonicon:{
  position:'absolute',right:0,top:"2%",color:'white'
},
gridvalue:{
  color:'white',fontWeight:400
},
gridtitle:{
  justifyContent:'left',color:'white',fontWeight:'bold'
}
   
}));
export default function Modalcontent ({ style, closeModal }){
    const classes = useStyles()
    const question = useContext(Questioncontext)
    return(


<animated.div style={style} >

    
<Grid container spacing={3} className = {classes.bgcolorcard} >
    <IconButton  className = {classes.buttonicon} onClick = {closeModal} aria-label="delete" >
          <CloseIcon  fontSize="large" />
        </IconButton>
<Grid container className = {classes.modalgrid6}>
<Grid item xs={6} >
       <Detailsfont value = {question.seleteduserdetails.name} title = {"Name"} />
       <Detailsfont value = {question.seleteduserdetails.username} title = {"User Name"} />
       <Detailsfont value = {question.seleteduserdetails.phone} title = {"Phone No."} />
       <Detailsfont value = {question.seleteduserdetails.website} title = {"Website"} />
       <Detailsfont value = {question.seleteduserdetails.email} title = {"Email"} />
       <Detailsfont value = {question.seleteduserdetails.address.city} title = {"City"} />
       <Detailsfont value = {question.seleteduserdetails.address.zipcode} title = {"zipcode"} />
      
       <Detailsfont value = {question.seleteduserdetails.company.name} title = {"Working Company"} />
       <Detailsfont value = {question.seleteduserdetails.company.bs} title = {"Working Technology"} />
       <Detailsfont value ={  <Chip
        avatar={<Avatar style = {{background:'white'}}>VP</Avatar>}
        label="View Post"
        clickable
        style = {{color:'white',background:'#00ff42'}}
        variant="outlined"
        onClick = {()=>question.dialogueopen()}
      />} title = {"Post"} />

             <Detailsfont value = {<div className = {classes.social}>
     
     <SocialIcon fgColor = "white" className = {classes.iconvalue} url="http://twitter.com/yogesh" />
             <SocialIcon fgColor = "white"  url="http://facebook.com/yogesh" />
             <SocialIcon bgColor = "rgb(240 108 31)" fgColor = "white"  url="http://instagram.com/yogesh" />

     </div>
       } title = {"Social Networks"} />


 </Grid>
        
        <Grid item xs={6} >
     <Mapcontainer latitude = {question.seleteduserdetails.address.geo.lat} longitude = {question.seleteduserdetails.address.geo.lng}
     city = {question.seleteduserdetails.address.city}
     />
   
   
        </Grid>
</Grid>

        </Grid>
  </animated.div>

    )
  
}

export const Detailsfont =(props)=>{
  const classes = useStyles()
return(
    <Grid component="label" container alignItems="center" spacing={3}>
          <Grid item  xs = {6} className = {classes.gridtitle} >{props.title}</Grid>
          <Grid item xs = {6} >
              <span className = {classes.gridvalue}> {props.value}</span>
          
          </Grid>
         </Grid>
)
}


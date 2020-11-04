import { Avatar, Card, IconButton } from '@material-ui/core'
import React, { useContext  } from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Questioncontext from '../ContextAPI/Questioncontext';
import avatar1 from '../Assets/images/avatar1.jpg';
import avatar2 from '../Assets/images/avatar2.jpg';
import avatar3 from '../Assets/images/avatar3.jpg';
import avatar4 from '../Assets/images/avatar4.jpg';
import avatar5 from '../Assets/images/avatar5.jpg';
import avatar6 from '../Assets/images/avatar6.jpg';
import avatar7 from '../Assets/images/avatar7.jpg';
import avatar8 from '../Assets/images/avatar8.jpg';
import avatar9 from '../Assets/images/avatar9.jpg';
import avatar10 from '../Assets/images/avatar10.jpg';
import Modal from '../Animated/Modal';
import Dialogmodule from '../Components/Dialogmodule';



const useStyles = makeStyles((theme) => ({

   Cardinitial:{
display:'flex',
flexFlow:'wrap',
justifyContent:'space-evenly',
borderRadius:'20px',
padding:'10px 100px',
boxShadow:'1px 1px 22px'
   },
   cardopenmodal:{
height:'auto',
boxShadow:'10px 10px 100px'

   },
   details:{
    marginRight:'20px'
   },
   avatarimage:{
    width: "100px",
    height: "100px",
   },
   itemvalue:{
    fontWeight:700,fontSize:'15px'
   }
  }));
  function getimage(value){
      var d = [avatar1,avatar2,avatar3,avatar4,avatar5,avatar6,avatar7,avatar8,avatar9,avatar10]
    return d[value]
  }
export default function Content(){
    const classes = useStyles()
    const question = useContext(Questioncontext)
    const details = question.userdetails.map((item,i)=>{
        return(
            <div className = {classes.details}>
                 <IconButton color="primary" aria-label="upload picture" onClick = {()=>question.handleclickicon(item.id - 1)} component="span">
                    <Avatar id="avatar" src={getimage(i)}
                    className = {classes.avatarimage}
                          
                    />
                </IconButton>
                <br></br>
                <span className ={classes.itemvalue}> {item.name}</span> | <span>{4.2 + i}</span>
               <br></br>
           
            </div>
        )
    })
    return(
    <div>
   <Card className = {question.openmodal?classes.cardopenmodal: classes.Cardinitial} >
         
         {question.openmodal ?
          <Modal 
          openmodal = {question.openmodal}
          />:details}
        
     </Card>
   <Dialogmodule />
     </div>
  
    )
}
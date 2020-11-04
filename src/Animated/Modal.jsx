import React from 'react'
import { useContext } from 'react';
import { useTransition } from "react-spring";
import Questioncontext from '../ContextAPI/Questioncontext';
import Modalcontent from './Modelcontent';
import {Useimage} from '../imagedata/image.js'
import { Avatar, Grid, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  marginavatar:{
    marginTop:'-2%',position:'absolute',zIndex:'1',marginLeft:'-2%',display:'flex'
  },
  avatarimage:{
    width: "80px",
    height: "80px",
   },
}))

export default function Modal() {
    const question = useContext(Questioncontext)
    const classes = useStyles()
    const transitions = useTransition(question.openmodal, null, {
      from: { opacity: 0, transform: "scale(0)" },
      enter: { opacity: 1, transform: "scale(1)" },
      leave: { opacity: 0, transform: "scale(0)" }
    });
  
    return (
      <div >
       
        {transitions.map(
          ({ item, key, props: style }) =>
            item && (
              <div>
                <Grid item xs = {12} className = {classes.marginavatar} >
<Avatar id="avatar" src={Useimage[question.selectedvalue]}
className = {classes.avatarimage}
                           
                    />
          
 </Grid>
               <Modalcontent 
               style={style}
               closeModal={() => question.updateopenmodal(false)}
               key={key}
               />
               </div>
            )
        )}
      </div>
    );
  }
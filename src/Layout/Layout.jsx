import React, { useEffect, useState } from 'react'
import Content from '../Content/Content'
import Header from './Header'
import { makeStyles } from '@material-ui/core/styles';
import {QuestionProvider} from '../ContextAPI/Questioncontext'
import { getdata, getdataforid } from '../API/APicalls';
const useStyles = makeStyles((theme) => ({
    Content: {
      
      width:'80%',
      margin:'auto',
      marginTop:'5%',
   
    },
   
  }));

export default function Layout(){
   
    const classes = useStyles();
    const [userdetails,updateusedetails] = useState([])
    const [seleteduserdetails,updateseleteduserdetails] = useState([])
const [selectedvalue,updateselectedvalue] = useState(null)
    const [openmodal,updateopenmodal] = useState(false)
const [opendialogue,updateopendialogue] = useState(false)
const [titlefor,updatetitlefor] = useState("")
const [bodyfor,updatebodyfor] = useState("")
    useEffect(()=>{
        getdata().then(res=>{
            updateusedetails(res.data)
        })
    },[])
    const handleclickicon = (value)=>{
updateselectedvalue(value)
        updateseleteduserdetails(userdetails[value])
updateopenmodal(true)
    }
    const closedialogue = ()=>{
        updateopendialogue(false)
    }
    const dialogueopen = ()=>{
          
   getdataforid(seleteduserdetails.id).then(res=>{
  updatetitlefor(res.data.title)
  updatebodyfor(res.data.body)
})
        updateopendialogue(true)
    }
    return(
        <div >
            <QuestionProvider value = {{
userdetails,openmodal,handleclickicon,updateopenmodal,
seleteduserdetails,selectedvalue,opendialogue,dialogueopen,closedialogue,
titlefor,bodyfor
            }}>
            <Header />
            <div className = {classes.Content}>
            <Content />
            </div>
          
         </QuestionProvider>
        </div>
    )
}
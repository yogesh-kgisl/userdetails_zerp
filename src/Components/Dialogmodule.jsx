import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Questioncontext from '../ContextAPI/Questioncontext';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
dialogback:{
  background:'linear-gradient(to bottom, #6699ff 0%, #3333ff 100%)'
}
}))
export default function Dialogmodule() {
  const classes = useStyles()
const question = useContext(Questioncontext)



  return (
    <div>
     
      <Dialog
        open={question.opendialogue}
      
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className = {classes.dialogback}>{question.titlefor}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
        {question.bodyfor}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>question.closedialogue()} color="primary">
            OK
          </Button>
      
        </DialogActions>
      </Dialog>
    </div>
  );
}
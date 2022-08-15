import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
const DescriptionMuiModal = (props) => {
    return (
      <div>
        <Dialog
          open={props.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={props.onClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle className="text-success"><h2>Información Nutricional:</h2></DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {props.description}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button className="text-success"
                    onClick={props.onClose}>Cerrar</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  export default DescriptionMuiModal;
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
function Contents({start,message,addbalance,slot1,tabledata}){

    const columns = [
        { field: 'id', headerName: 'ID', width: 100,height:50 },
        {
          field: 'result',
          headerName: 'Result',
          width: 150,
          height:50,
          editable: false,
        },
        
        {
          field: 'time',
          headerName: 'Time',
          width: 150,
          height:50,
          editable: false,
        },
      ];
      
    const rows =[];
    for(let i=0;i<tabledata.length;i++){
        rows[i]=tabledata[i];
    }



    const [open1, setOpen1] = React.useState(false);
    const handleClickOpen1 = () => {
        setOpen1(true);
      };
    
    const handleClose1 = () => {
        setOpen1(false);
      };

    return(
        <div id="content">
            <div id="tableContainer">
                <div style={{ height:500, width:"410px" }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                    />
                </div>
            </div>


            <div id="gameContainer">
                <Button variant="outlined" color="primary" onClick={handleClickOpen1}>Game Start</Button>
                    <Dialog
                        open={open1}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose1}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Click Spin to start the Game !! 
                            Beware !!! Each spin will cost you $2.
                        </DialogContentText>
                        <DialogContentText id="fundmessage">
                            {message}
                        </DialogContentText>
                        <div id="gamebox">
                            <div className="slot" id="slot1">{slot1[0]}</div>
                            <div className="slot" id="slot2">{slot1[1]}</div>
                            <div className="slot" id="slot3">{slot1[2]}</div>
                        </div>
                        <div id="spinButton" onClick={start}>
                            <Button variant="contained" color="primary">Spin</Button>
                        </div>
                        </DialogContent>
                        <DialogActions>
                        <Button  color="default" variant="outlined" onClick={addbalance}>
                            Debug
                        </Button>
                        <Button onClick={handleClose1} color="secondary" variant="outlined">
                            Close
                        </Button>
                        </DialogActions>
                    </Dialog>
            </div>
        </div>

    );
}

export default Contents;
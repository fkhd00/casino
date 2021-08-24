import React from "react";
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function UserInfo(){

    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    return(
        <ul id="userInfo">
            <li>
                <AccountCircleIcon color="primary" fontSize="large" id="accIcon"></AccountCircleIcon>
            </li>
            <li>
                <Button onClick={handleClickOpen} variant="contained" color="primary" id="sign-in-button">Sign In</Button> 
                <Dialog
                    maxWidth="xs"
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                            >
                    <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        To play the game, please sign in or you can also play as a guest.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        label="Username"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="pass"
                        label="Password"
                        type="password"
                        fullWidth
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Guest
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Sign In
                    </Button>
                    </DialogActions>
                </Dialog>            
            </li>
        </ul>
    );
}
export default UserInfo;
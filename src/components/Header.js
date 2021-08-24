import React from "react";
import Typography from '@material-ui/core/Typography';
import UserInfo from "./UserInfo";

function Header({balance}){
return(
    <div id="head">
        <div id="name">
            <Typography variant="h4" component="h1" gutterBottom>
            Aniket Gedam
            </Typography>    
        </div>

        <div id="infoContainer">
            <Typography variant="subtitle2" id="balance">Balance: $ {balance}</Typography>
            <UserInfo />
        </div>    
    </div>
);

}

export default Header;
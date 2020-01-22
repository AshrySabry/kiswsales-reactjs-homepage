import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography className="text-center" variant="title" color="inherit">
                        SEAHQ Kiswire Web Sales System
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;
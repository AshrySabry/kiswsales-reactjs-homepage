import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './NavBar.css';

const NavBar = () => {
    return(
        <div>
            <AppBar position="static" style={{ background: '#385e7d'}}>
                <Toolbar>
                    <Typography className="text-center" variant="title" color="inherit">
                        SEAHQ Kiswire Sales System
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;
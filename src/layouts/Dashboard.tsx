import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

function Dashboard() {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <IconButton>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    <Typography>Presto Dashboard</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Dashboard;

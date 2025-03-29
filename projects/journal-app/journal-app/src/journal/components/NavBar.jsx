import { LogoutOutlined, MenuOpenOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { startLogout } from "../../store/auth/thunks";
import { clearNotesLogout } from "../../store/journal/journalSlice";


export const NavBar = ( { drawerWidth } ) => {

    const dispatch = useDispatch();

    const onLogout = ( e ) => {
        e.preventDefault();

        dispatch( startLogout() );
    }

    return (
        <AppBar 
            position="fixed"
            sx={{ 
                width: { sm: `calc(100% - ${ drawerWidth }px )` },
                ml: { sm: `${ drawerWidth }px` }
             }} >
                <Toolbar>
                    <IconButton
                        color='inherit'
                        edge='start'
                        sx={{ mr: 2 , display: { sm: 'none' } }}>
                        <MenuOpenOutlined />
                    </IconButton>
                    
                    <Grid container direction='row' justifyContent='space-between' alignItems='center' >
                        <Typography variant="h6" noWrap component='div' >JournalApp</Typography>
                        <IconButton color="error" >
                            <LogoutOutlined 
                                onClick={ onLogout }
                            />
                        </IconButton>

                    </Grid>

                </Toolbar>
        </AppBar>
    )
}

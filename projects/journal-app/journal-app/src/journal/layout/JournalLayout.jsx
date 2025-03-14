import { Box } from "@mui/material"

const drawerWidth = 240;

export const JournalLayout = ( { children } ) => {
    return (
        <Box sx={{ display: 'flex' }}>

            {/* nav */}

            {/* sidebar */}

            <Box 
                component='main'
                sx={{ flexGrow: 1 , p: 3}}
            >  
                {/* ToolBar */}

                { children }

            </Box>

        </Box>
    )
}

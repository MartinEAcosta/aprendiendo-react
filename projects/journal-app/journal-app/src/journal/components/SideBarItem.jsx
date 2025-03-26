import { TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useMemo } from "react";
import { selectNote } from "../../store/journal/thunks";
import { useDispatch } from "react-redux";

export const SideBarItem = ( { id , title , body } ) => {

    const dispatch = useDispatch();

    const newTitle = useMemo( () => {
        return title.length > 17 
                ? title.substring(0,17) + '...'
                : title 
        ;
        
    }, [ title ]);

    const onSelectNote = ( ) => {
        dispatch( selectNote( id ) );
    }



  return (
    <>
      <ListItem onClick={ onSelectNote } key={ id } disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <TurnedInNot />
          </ListItemIcon>
          <Grid container>
            <ListItemText primary={ newTitle } />
            <ListItemText 
                
                secondary={ body } />
          </Grid>
        </ListItemButton>
      </ListItem>
    </>
  );
}

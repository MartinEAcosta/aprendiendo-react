import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SideBarItem = ( { id , title , body , imageUrls = [] , date } ) => {

    const { active } = useSelector( (state) => state.journal );
    const dispatch = useDispatch();

    const newTitle = useMemo( () => {
        return title.length > 17 
                ? title.substring(0,17) + '...'
                : title 
        ;
        
    }, [ title ]);

    const onSelectNote = ( ) => {
        dispatch( setActiveNote( { id , title , body , imageUrls , date } ) );
    }



  return (
    <>
      <ListItem 
        onClick={ onSelectNote } 
        key={ id } disablePadding
        selected={ active?.id  == id } 
        >
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

import { IconButton, Typography } from "@mui/material";
import { AddOutlined, MailOutline } from '@mui/icons-material';
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";
import { useMemo } from "react";

export const JournalPage = () => {

    const { isSaving , active } = useSelector( ( state ) => state.journal );
    const dispatch = useDispatch();

    const isSavingNewNote = useMemo( () => isSaving === true , [isSaving] );
    
    const onClickNewNote = ( e ) => {
        e.preventDefault();

        dispatch( startNewNote() );
        
    }

    return (
        <> 
            <JournalLayout>

                {
                (!!active) 
                ?
                <NoteView />
                :
                <NothingSelectedView />
                }

                <IconButton
                    disabled={ isSavingNewNote }
                    onClick={ onClickNewNote }
                    size="large"
                    sx={{ color: "white",
                          backgroundColor: 'error.main',
                          ':hover': { backgroundColor: 'error.main', opacity: 0.9},
                          position: 'fixed',
                          right: 50,
                          bottom: 50,
                     }}>
                        <AddOutlined sx={{ fontSize: 30 }} />
                </IconButton>

            </JournalLayout>
        </>
    );
}

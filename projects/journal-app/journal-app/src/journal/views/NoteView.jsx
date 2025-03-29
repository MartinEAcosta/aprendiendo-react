import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { SaveOutlined, UploadFileOutlined } from "@mui/icons-material";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

import { setActiveNote, startUpdatingNote, startUploadingFiles } from "../../store";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";

export const NoteView = ( ) => {

    const { active:note , messageSaved , isSaving } = useSelector( (state) => state.journal );
    const dispatch = useDispatch();
    const {  id , title , body , date , imageUrls , formState , onInputChange } = useForm( note );

    const dateString = useMemo(() => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [ date ])

    const fileInputRef = useRef();

    useEffect(() => {
        dispatch( setActiveNote( formState ) );
    }, [ formState ]);
    
    useEffect(() => {
        if( messageSaved.length > 0 ){
            Swal.fire('Nota actualizada' , messageSaved, 'success');
        }
    }, [ messageSaved ])
    

    const onUpdateNote = (  ) => {
        dispatch( startUpdatingNote( ) );
    }

    const onFileInputChange = ( { target } ) => {
        if( target.files === 0 ) return;

        dispatch( startUploadingFiles( target.files ) );
    }

    return (
        <Grid 
            className="animate__animated animate__fadeIn animate__faster"
            container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb:1 }}>
            <Grid item>
                <Typography fontSize={ 39 } fontWeight='light' > { dateString }</Typography>
            </Grid>

            <Grid item>

                <input 
                    type="file"
                    multiple
                    ref={ fileInputRef }
                    onChange={ onFileInputChange }
                    style={{ display: 'none' }}
                />
                    <IconButton
                        color="primary"
                        disabled={isSaving}
                        onClick={ () => fileInputRef.current.click() }
                    >
                        <UploadFileOutlined />
                    </IconButton>

                <Button 
                    disabled={ isSaving }
                    onClick={ onUpdateNote }
                    color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30 , mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField 
                    type="text"
                    variant="filled"
                    onChange={ onInputChange } 
                    name="title"
                    value={title}
                    fullWidth
                    placeholder="Ingrese un titulo"
                    label="Titulo"
                    sx= {{ border: 'none' , mb: 1 }}
                />
                
                <TextField 
                    type="text"
                    variant="filled"
                    name="body"
                    value={ body }
                    onChange={ onInputChange }
                    fullWidth
                    multiline
                    placeholder="¿Que sucedio en el dia de hoy?"
                    minRows={ 5 }
                />

            </Grid>

            {/* Imagenes de galeria */}

            <ImageGallery images={ note.imageUrls } />

        </Grid>
    )
}

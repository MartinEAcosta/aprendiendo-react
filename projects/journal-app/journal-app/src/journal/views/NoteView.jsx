import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { updatingNote } from "../../store";
import { useMemo } from "react";

export const NoteView = ( ) => {

    const { active:note } = useSelector( (state) => state.journal );
    const dispatch = useDispatch();
    const {  id , title , body , date , imageUrls , formState , onInputChange } = useForm( note );

    const dateString = useMemo(() => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [ date ])

    const onUpdateNote = (  ) => {
        dispatch( updatingNote(  {id , title , body , date , imageUrls}  ) );
    }

    return (
        <Grid 
            className="animate__animated animate__fadeIn animate__faster"
            container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb:1 }}>
            <Grid item>
                <Typography fontSize={ 39 } fontWeight='light' > { dateString }</Typography>
            </Grid>

            <Grid item>
                <Button 
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

            <ImageGallery />

        </Grid>
    )
}

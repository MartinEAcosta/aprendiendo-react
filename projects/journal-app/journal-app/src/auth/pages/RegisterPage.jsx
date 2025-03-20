import { Link as RouterLink } from 'react-router-dom';

import { Google } from "@mui/icons-material";
import { Link, Grid, Typography, TextField , Button} from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';

const formData = {
  email : '',
  password : '',
  displayName : '',
}

const formValidations = {
  email: [ (value) => value.includes('@') , 'El correo debe contener un "@".'],
  password: [ (value) => value.length >= 6 , 'El password debe contener al menos 6 caracteres.'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.']
}

export const RegisterPage = () => {

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { 
    email, password , displayName , 
    onInputChange ,
    isFormValid , displayNameValid, emailValid, passwordValid
  } = useForm(formData , formValidations);

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);
    if(isFormValid){
      console.log(isFormValid);
    }
  }

    return (
      <AuthLayout title="Crear cuenta">
        <form action="" onSubmit={ onSubmit } >
          <Grid container>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Nombre completo"
                type="text"
                name='displayName'
                value={ displayName }
                onChange={ onInputChange }
                placeholder="Martin Acosta"
                fullWidth
                required
                error= { displayNameValid && formSubmitted}
                helperText={ displayNameValid }
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                name='email'
                value={ email }
                onChange={ onInputChange }
                placeholder="example@google.com"
                fullWidth
                required
                error= { emailValid && formSubmitted}
                helperText= { emailValid }
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                name='password'
                value={ password }
                onChange={ onInputChange }
                placeholder="Contraseña"
                fullWidth
                required
                error= { passwordValid && formSubmitted }
                helperText= { passwordValid }
              />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} >
                <Button variant="contained" fullWidth type='submit'>
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
                <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                <Link component={RouterLink} color="inherit" to="/auth/login">
                    Ingresar
                </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    );
}

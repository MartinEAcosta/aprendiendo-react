import { Link as RouterLink } from 'react-router-dom';

import { Google } from "@mui/icons-material";
import { Link, Grid, Typography, TextField , Button} from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';

const formData = {
  email : 'acostta@google.com',
  password : 'algundia',
  displayName : 'jrdev',
}

export const RegisterPage = () => {

  const { email, password , displayName , onInputChange , formState } = useForm(formData);

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log( formState );
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

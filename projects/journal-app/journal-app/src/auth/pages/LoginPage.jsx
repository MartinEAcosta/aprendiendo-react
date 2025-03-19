import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material";
import { Link, Grid, Typography, TextField , Button} from "@mui/material"

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { checkingAuthentication, startGoogleSignIn } from '../../store';
import { useMemo } from 'react';

export const LoginPage = () => {

  const { status , uid } = useSelector( ( state ) => state.auth );
  const dispatch = useDispatch();

  const isAuthenticating = useMemo( () => status === 'checking' , [ status ]);


  const { email, password , onInputChange } = useForm({
    email : 'martin@gmail.com',
    password : '123456',

  });

  const onSumbit = ( e ) => {
    e.preventDefault();

    console.log( email , password , status , uid);

    dispatch( checkingAuthentication() );
  }

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() );
    console.log('On google sign in');

  }

    return (
      <AuthLayout title="Login">
        <form onSubmit={ onSumbit }>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="example@google.com"
                name='email'
                value={ email }
                onChange={ onInputChange }
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                name='password'
                value={ password }
                onChange={ onInputChange }
                fullWidth
              />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <Button 
                  disabled={ isAuthenticating }
                  variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button 
                  disabled={ isAuthenticating }
                  type='sumbit' 
                  variant="contained" 
                  fullWidth 
                  onClick={ onGoogleSignIn }>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid>
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    );
}

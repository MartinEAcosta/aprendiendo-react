import { useEffect } from 'react';
import { useForm } from '../../hooks';
import { useAuthStore } from '../../hooks/useAuthStore';
import './AuthPage.css';
import Swal from 'sweetalert2';

const loginFormFields = {
    loginEmail : '',
    loginPassword : '',
}


const registerFormFields = {
    registerName : '',
    registerEmail : '',
    registerPassword : '',
    registerPassword2 : '',
}

export const AuthPage = () => {

    const { startLogin , startRegister , errorMessage } = useAuthStore( );

  const { loginEmail , loginPassword , formState:loginState , onInputChange:onLoginInputChange } = useForm( loginFormFields );
  const { registerEmail , registerName , registerPassword , registerPassword2 , formState:registerState , onInputChange:onRegisterInputChange } = useForm( registerFormFields );
 

  const loginSubmit = ( event ) => {
    event.preventDefault();

    startLogin( { email:loginEmail , password:loginPassword });
    
    console.log(loginState);
  }

  const registerSubmit = ( event ) => {
    event.preventDefault();
  
    if( registerName.length >= 2 && registerEmail && registerPassword && registerPassword2 ){
        if( registerPassword !== registerPassword2 ){
            Swal.fire("Error en el registro" , "Las contraseñas no coinciden." ,'error');
            return;
        }

        startRegister( { name:registerName , email:registerEmail , password:registerPassword } );
    }


    console.log(registerState);
  }

  useEffect(() => {
    if( errorMessage !== undefined){
        Swal.fire('Error en la autenticación' ,  errorMessage , 'error');
    }
  }, [errorMessage])
  


    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={ loginSubmit }>
                        <div className="form-group mb-2">
                            <input 
                                type="text"
                                className="form-control"
                                name='loginEmail'
                                onChange={ onLoginInputChange }
                                value={ loginEmail }
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                name='loginPassword'
                                onChange={ onLoginInputChange }
                                value={ loginPassword }
                                placeholder="Contraseña"
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={ registerSubmit }>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                onChange={ onRegisterInputChange }
                                value={ registerName }
                                name='registerName'
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                value={ registerEmail }
                                onChange={ onRegisterInputChange }
                                name='registerEmail'
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                value={ registerPassword }
                                onChange={ onRegisterInputChange }
                                name='registerPassword'
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                                value={ registerPassword2 }
                                onChange={ onRegisterInputChange }
                                name='registerPassword2'
                            />
                        </div>

                        <div className="d-grid gap-2">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta"
                                 />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
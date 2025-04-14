import { useForm } from '../../hooks';
import './AuthPage.css';

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

  const { loginEmail , loginPassword , formState:loginState , onInputChange:onLoginInputChange } = useForm( loginFormFields );
  const { registerEmail , registerName , registerPassword , registerPassword2 , formState:registerState , onInputChange:onRegisterInputChange } = useForm( registerFormFields );
 

  const loginSubmit = ( event ) => {
    event.preventDefault();

    console.log(loginState);
  }

  const registerSubmit = ( event ) => {
    event.preventDefault();

    console.log(registerState);
  }

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
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
import { checkingCredentials, login, logout } from "."
import { checkingIfAccountExists, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";

export const checkingAuthentication = ( email , password ) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const res = await checkingIfAccountExists( email );
        
        if( res.ok ) return dispatch( logout() );
    }
}

export const startGoogleSignIn = ( ) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );
        
        const result = await signInWithGoogle();

        if( !result.ok ) return dispatch( logout( result.errorMessage ) );

        return dispatch( login( result ) );
    }
}

export const startCreatingUserWithEmailPassword = ( { email , password , displayName } ) => {
    return async( dispatch ) => {

        dispatch( checkingAuthentication() );
        
        const resp = await registerUserWithEmailPassword( { email , password , displayName} );
        
        console.log(resp);
    }
}
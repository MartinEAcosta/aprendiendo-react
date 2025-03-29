import { checkingCredentials, login, logout } from "."
import { logoutFirebase, registerUserWithEmailPassword, signInWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { clearNotesLogout } from "../journal/journalSlice";

export const checkingAuthentication = ( email , password ) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        // const res = await checkingIfAccountExists( email );
        
        // console.log(res);

        // if( res.ok ) return dispatch( logout() );
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
        
        const { ok , uid , photoURL, errorMessage } = await registerUserWithEmailPassword( { email , password , displayName} );

        if( !ok ) return dispatch( logout( errorMessage ) );

        return dispatch( login( { uid , displayName , email , photoURL} ) );
        
    }
}

export const startSignInWithEmailPassword = ( { email , password } ) => {
    return async( dispatch ) => {

        dispatch( checkingAuthentication() );

        const { ok , displayName , uid , photoURL , errorMessage , errorCode} = await signInWithEmailPassword( { email , password } );

        console.log( ok , displayName , uid , photoURL , errorMessage, errorCode );

        if( !ok ) return dispatch( logout( errorMessage ) );

        return dispatch( login( { uid, displayName , email , photoURL } ) );
    }
}

export const startLogout = () => {
    return async( dispatch ) => {
        
        await logoutFirebase();

        dispatch( clearNotesLogout() );
        dispatch( logout() );
    }
}
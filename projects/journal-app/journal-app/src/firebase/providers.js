import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async( ) => {
    try{
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        // console.log({credentials});

        const { displayName , email , photoURL , uid } = result.user;

        return {
            ok: true,
            displayName , email , photoURL , uid
        }
    }
    catch (error) {

        return {
            ok: false,
            errorCode: error.code,
            errorMessage: error.message,
        }
    }
}

export const registerUserWithEmailPassword = async( { email , password, displayName } ) => {
    try{

        const newAccount = await createUserWithEmailAndPassword( FirebaseAuth , email ,password );

        console.log(newAccount);

        return{
            ok: true,
            email,
            password,
            displayName,
        }

    }
    catch(error){
        return {
            ok: false,
            errorCode: error.code,
            errorMessage: error.message,
        }
    }
}

export const checkingIfAccountExists = async( email ) => {
    try{
        const res = await fetchSignInMethodsForEmail( FirebaseAuth , email );

        if(!res.ok) return;

        return {
            ok: true,
        }
    }
    catch(error){
        return{
            ok: false,
            errorCode: error.code,
            errorMessage: error.message,
        }
    }
}
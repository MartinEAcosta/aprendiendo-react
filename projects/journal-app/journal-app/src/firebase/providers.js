import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
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

        const result = await createUserWithEmailAndPassword( FirebaseAuth , email ,password );

        const { uid , photoURL } = result.user;

        await updateProfile( FirebaseAuth.currentUser , { displayName });

        return{
            ok: true,
            email,
            password,
            displayName,
            uid,
            photoURL,
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

// export const checkingIfAccountExists = async( email ) => {
//     try{
//         // const res = await fetchSignInMethodsForEmail( FirebaseAuth , email );

//         // if( res.length === 0 ) return {
//         //     ok: false,
//         // };

//         // return {
//         //     ok: true,
//         // }
//     }
//     catch(error){
//         return{
//             ok: false,
//             errorCode: error.code,
//             errorMessage: error.message,
//         }
//     }
// }

export const signInWithEmailPassword = async( { email , password } ) => {
    try{

        const result = await signInWithEmailAndPassword( FirebaseAuth , email , password );

        const { displayName , uid , photoURL } = result.user;

        return{
            ok: true,
            email,
            password,
            displayName,
            uid,
            photoURL,
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

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}
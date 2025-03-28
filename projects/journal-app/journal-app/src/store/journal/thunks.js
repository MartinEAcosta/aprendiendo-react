import { collection, doc, getDoc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from "./journalSlice";
import { loadNotes } from "../../helpers";

export const startNewNote = ( ) => {
    return async( dispatch , getState ) => {

        dispatch( savingNewNote( ) );

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseDB , `${ uid }/journal/notes` ) );
        const setDocResp = await setDoc( newDoc , newNote );

        newNote.id = newDoc.id;

        dispatch( addNewEmptyNote( newNote ) );

        dispatch( setActiveNote( newNote ) );

    }
}

export const startLoadingNotes = () => {
    return async( dispatch , getState ) => {

        const { uid } = getState().auth;

        if( !uid ) throw new Error('El UID del usuario no existe');

        const res = await loadNotes( uid );
        dispatch( setNotes( res ) );
    }
}

export const startUpdatingNote = (  ) => {
    return async( dispatch , getState ) => {

        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active:note } = getState().journal;
        
        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        const noteRef =  doc( FirebaseDB ,`${ uid }/journal/notes/${ note.id }`);
        await setDoc( noteRef , noteToFirestore , { merge : true } );

        dispatch( updateNote( note ) );

    }
}
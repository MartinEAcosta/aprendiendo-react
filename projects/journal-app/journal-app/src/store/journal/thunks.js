import { collection, deleteDoc, doc, getDoc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes , setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";

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

export const startUploadingFiles = ( files = [ ] ) => {
    return async( dispatch ) => {

        dispatch( setSaving() );

        // await fileUpload( files[0] );

        const fileUploadPromises = [ ];

        for (const file of files) {
            fileUploadPromises.push( fileUpload( file ) );
        }

        const photosUrls = await Promise.all( fileUploadPromises );

        dispatch( setPhotosToActiveNote( photosUrls ) );
    }
}

export const startDeletingNote = ( ) => {
    return async( dispatch , getState ) => {

        const { active:note } = getState().journal;
        const { uid } = getState().auth;

        const noteRef = doc( FirebaseDB , `${ uid }/journal/notes/${ note.id }`);
        await deleteDoc( noteRef );

        dispatch( deleteNoteById( note.id ) );
    }
}
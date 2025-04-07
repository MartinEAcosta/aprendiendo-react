import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteActiveEvent, onSetActiveEvent, onUpdateActiveEvent } from "../store";


export const useCalendarStore = () => {

    const { events , activeEvent } = useSelector( (state) => state.calendar );
    const dispatch = useDispatch();

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ));
    }

    // Al utilizar start refiere a que comenzará el proceso de grabación
    // Por lo tanto se trata de una función que tranquilamente podria ir
    // En un thunk. Es decir, es asincrona.
    const startSavingEvent = async( calendarEvent ) => {
        // TODO: llegar al backend
        console.log(calendarEvent);
        if( calendarEvent._id ){
            console.log(calendarEvent._id);
            //updating 
            dispatch( onUpdateActiveEvent( { ...calendarEvent } ) );
        }else{
            //creating
            dispatch( onAddNewEvent( { ...calendarEvent  , _id: new Date().getTime() } ) );
        }
    }

    const startDeletingEvent = async( calendarEvent ) => {
        dispatch( onDeleteActiveEvent( { ...calendarEvent } ));
    }

    return {
        events, activeEvent,

        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
    }
}
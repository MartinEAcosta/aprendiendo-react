import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteActiveEvent, onSetActiveEvent, onUpdateActiveEvent } from "../store";
import calendarApi from "../api/calendarApi";


export const useCalendarStore = () => {

    const { events , activeEvent } = useSelector( (state) => state.calendar );
    const { user } = useSelector( (state) => state.auth );

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
        }
        else{
            //creating
            const { data } = await calendarApi.post('/events' , calendarEvent ); 
            console.log(data);
            dispatch( onAddNewEvent( { ...calendarEvent  , id: data.savedEvent.id , user } ) );
        }
    }

    const startDeletingEvent = async(  ) => {
        dispatch( onDeleteActiveEvent( ));
    }

    return {
        events, activeEvent, hasEventSelected: !!activeEvent,

        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
    }
}
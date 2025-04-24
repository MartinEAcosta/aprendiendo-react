import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteActiveEvent, onSetActiveEvent, onSetEvents, onUpdateActiveEvent } from "../store";
import calendarApi from "../api/calendarApi";
import { convertEventsToDateEvents } from "../helpers";


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
        if( calendarEvent.id ){
            if( !!activeEvent ){
                if( activeEvent.user._id  === user.uid ){
                    
                    await calendarApi.put(`/events/${ activeEvent.id }`, calendarEvent);

                    dispatch( onUpdateActiveEvent(  calendarEvent  ) );
                }
            }
        }
        else{
            //creating
            const { data } = await calendarApi.post('/events' , calendarEvent ); 
            console.log(data);
            dispatch( onAddNewEvent( { ...calendarEvent  , id: data.savedEvent.id , user } ) );
        }
    }

    const startDeletingEvent = async(  ) => {
        try{
            
            if( !!activeEvent ){
                
                if( activeEvent.user._id  === user.uid ){
                    await calendarApi.delete(`/events/${activeEvent.id}`);
                    dispatch( onDeleteActiveEvent( ) );
                }
                else{
                    throw new Error('El evento que intentas eliminar no es de tu pertenencia.');
                }
            }
        }
        catch(error){
            console.log(error);
        }
    }

    const startLoadingEvents = async( ) => {
        try{

            const { data } = await calendarApi.get('/events');
            const events = convertEventsToDateEvents( data.events );
            dispatch( onSetEvents( events ) );
        }
        catch(error){
            console.log(error);
        }
    }

    return {
        events, activeEvent, hasEventSelected: !!activeEvent,

        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
        startLoadingEvents,
    }
}
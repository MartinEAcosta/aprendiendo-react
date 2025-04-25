import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteActiveEvent, onSetActiveEvent, onSetEvents, onUpdateActiveEvent } from "../store";
import calendarApi from "../api/calendarApi";
import { convertEventsToDateEvents } from "../helpers";
import Swal from "sweetalert2";


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

        try{
            if( calendarEvent.id ){
                if( !!activeEvent ){
                    await calendarApi.put(`/events/${ activeEvent.id }`, calendarEvent);
                    
                    dispatch( onUpdateActiveEvent(  {...calendarEvent , user}  ) );
                }
                return;
            }   
            else{
                const { data } = await calendarApi.post('/events' , calendarEvent ); 
                dispatch( onAddNewEvent( { ...calendarEvent  , id: data.savedEvent.id , user } ) );
            }
        }
        catch(error){
            Swal.fire('Error al guardar.' , error.response.data.msg , 'error');
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
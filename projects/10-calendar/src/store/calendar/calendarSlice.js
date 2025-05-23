
import { createSlice } from '@reduxjs/toolkit';

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        isLoadingEvents : true,
        events: [ 

         ],
        activeEvent: null,
    },
    reducers: {
        onSetActiveEvent: ( state , { payload } ) => {
          state.activeEvent = payload;
        },
        onAddNewEvent: ( state , { payload } ) => {
          state.events.push( payload );
          state.activeEvent = null;
        },
        onUpdateActiveEvent: ( state , { payload } ) => {
          state.activeEvent = null;
          state.events = state.events.map( ( eventToUpdate ) => {
            return (eventToUpdate.id == payload.id) ? payload : eventToUpdate;
          }); 
        },
        onDeleteActiveEvent: ( state ) => {
          state.events = state.events.filter( (event) => event.id != state.activeEvent.id  );
          state.activeEvent = null;
        },
        onSetEvents : ( state , { payload = [] } ) => {
          state.isLoadingEvents = false;
          payload.forEach( event => {
            const exists = state.events.some( dbEvent => dbEvent._id === event.id );
            if( !exists ){
              state.events.push(event);
            }
          });
          state.activeEvent = null;
        },
        onLogoutCalendar: ( state ) => {
          state.isLoadingEvents = true;
          state.events = [];
          state.activeEvent = null;
        }
    }
});


// Action creators are generated for each case reducer function
export const { onSetActiveEvent , onAddNewEvent , onUpdateActiveEvent , onDeleteActiveEvent , onSetEvents , onLogoutCalendar } = calendarSlice.actions;
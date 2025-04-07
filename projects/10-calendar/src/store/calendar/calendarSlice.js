
import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
  _id: new Date().getTime(),
  title: 'Consigo un trabajo',
  notes: 'Lo hago antes de fin de año',
  start: new Date(),
  end: addHours( new Date() , 2),
  bgColort: '#fafafa',
  user: {
    _id: '123',
    name: 'Martin'
  }
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [ tempEvent ],
        activeEvent: null,
    },
    reducers: {
        onSetActiveEvent: ( state , { payload }) => {
          state.activeEvent = payload;
        },
        onAddNewEvent: ( state , { payload } ) => {
          state.events.push( payload );
          state.activeEvent = null;
        },
        onUpdateActiveEvent: ( state , { payload } ) => {
          state.activeEvent = null;
          state.events = state.events.map( ( eventToUpdate ) => {
            const res = (eventToUpdate._id === payload._id) ? payload : eventToUpdate;
            return res;
          }); 
        },
        onDeleteActiveEvent: ( state , { payload } ) => {
          console.log(payload)
          state.events = state.events.map( (note) => {
            if( note._id != payload._id) return;
            
            return note;
          });
          state.activeEvent = null;
        },
    }
});


// Action creators are generated for each case reducer function
export const { onSetActiveEvent , onAddNewEvent , onUpdateActiveEvent , onDeleteActiveEvent } = calendarSlice.actions;
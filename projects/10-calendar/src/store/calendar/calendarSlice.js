
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
        onUpdateActiveEvent: ( state , { payload }) => {
          state.activeEvent = null;
          state.notes = state.notes.find( ( noteToUpdate ) => {
            if( noteToUpdate != payload._id ) return noteToUpdate;

            return payload;
          })
        }
    }
});


// Action creators are generated for each case reducer function
export const { onSetActiveEvent } = calendarSlice.actions;
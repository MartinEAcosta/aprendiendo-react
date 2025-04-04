
import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
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
        increment: (state, /* action */ ) => {
            state.counter += 1;
        },
    }
});


// Action creators are generated for each case reducer function
export const { increment } = calendarSlice.actions;
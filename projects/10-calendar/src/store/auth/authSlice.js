import { createSlice } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
    name: 'Auth ',
    initialState: {
        status: 'checking',
        user: {},
        errorMessage: undefined,
    },
    reducers: {

        onChecking: (state, /* action */ ) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined;
        },

        onLogin: ( state , { payload } ) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },

        onLogout: ( state ) => {
            state.status = 'not-authenticated';
            state.user = { };
            state.errorMessage = undefined;
        },
    
    }
});


// Action creators are generated for each case reducer function
export const { onChecking , onLogin , onLogout } = AuthSlice.actions;
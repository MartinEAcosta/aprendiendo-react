import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthPage } from '../auth';
import { CalendarPage } from '../calendar';

export const AppRouter = () => {

    const authStatus = 'authenticated';

    return (
        <Routes>
            {
                ( authStatus === 'not-authenticated')
                ?
                <Route path='/auth/*' element={ <AuthPage /> } />
                :
                <Route path='/*' element={ <CalendarPage /> } />
            }

            <Route path='/*' element={ <Navigate to='/auth/login' /> } />
        </Routes>
    )
}

import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthPage } from '../auth';
import { CalendarPage } from '../calendar';
import { useAuthStore } from '../hooks/useAuthStore';

export const AppRouter = () => {

    const { status , checkAuthToken } = useAuthStore();

    // const authStatus = 'not-authenticated';

    useEffect(() => {
        checkAuthToken();
    }, [])
    

    if( status === 'checking' ) {
        return(
            <h3>Cargando...</h3>
        )
    }

    return (
        <Routes>
            {
                ( status === 'not-authenticated')
                ? (
                    <>
                        <Route path='/auth/*' element={ <AuthPage /> } />        
                        <Route path='/*' element={ <CalendarPage /> } />    
                    </>
                )
                : (
                    <>
                        <Route path='/' element={ <CalendarPage /> } />
                        <Route path="/*" element={ <Navigate to="/" /> } />

                    </>
                )   
            }

            <Route path='/*' element={ <Navigate to='/auth/login' /> } />
        </Routes>
    )
}

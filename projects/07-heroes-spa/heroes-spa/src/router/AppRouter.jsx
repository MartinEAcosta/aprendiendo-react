import { Route, Routes } from "react-router-dom"


import { LoginPage } from "../auth"
import { HeroesRoutes , PrivateRoute } from "../heroes/"

export const AppRouter = () => {

    
    return (
        <>

            <Routes>
                
                <Route 
                    path="login" 
                    element={ <LoginPage /> } />
       
                <Route
                    path="/*" element={ 
                        <PrivateRoute >
                            <HeroesRoutes />
                        </PrivateRoute > 
                    } 
                /> 
       
            </Routes>
        </>
    )
}

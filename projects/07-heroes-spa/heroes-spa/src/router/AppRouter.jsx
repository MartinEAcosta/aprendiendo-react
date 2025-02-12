import { Route, Routes } from "react-router-dom"


import { LoginPage } from "../auth"
import { HeroesRoutes , PrivateRoute , PublicRoute } from "../heroes/"

export const AppRouter = () => {

    
    return (
        <>

            <Routes>
                
                <Route
                        path="/login" element={ 
                            <PublicRoute >
                                <LoginPage />
                            </PublicRoute > 
                        } 
                    /> 
       
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

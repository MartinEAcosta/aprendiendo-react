import { Navigate, Route, Routes } from "react-router-dom"

import { Navbar } from "../ui"
import { LoginPage } from "../auth/pages/LoginPage"
import { DcPage } from "../heroes/pages/DcPage"
import { MarvelPage } from "../heroes/pages/MarvelPage"

export const AppRouter = () => {
    return (
        <>
            <Navbar />

            <Routes>
                
                <Route path="marvel" element={ <MarvelPage /> } />
                <Route path="dc" element={ <DcPage />} />

                <Route path="login" element={ <LoginPage /> } />
                
                {/* En caso de entrar a una ruta no especificada va marvel */}
                <Route path="/*" element={ <Navigate to='/marvel' /> } />
            </Routes>
        </>
    )
}

import React from "react";
import GlobalStyle from "./Style/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostersPage from "./Pages/PostersPage";
import SessionsPage from "./Pages/SessionsPage";
import SeatsPage from "./Pages/SeatsPage";
import SucessPage from "./Pages/SucessPage";
import AuthProvider from "./Ayth";
import InitialHeader from "./Components/Header";

export default function App() {

    return (
        <BrowserRouter>
                <GlobalStyle />
                <InitialHeader/>
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<PostersPage />}></Route>
                        <Route path="/sessions/:idFilme" element={<SessionsPage />}></Route>
                        <Route path="/seats/:idSessao" element={<SeatsPage />}></Route>
                        <Route path="/sucess/" element={<SucessPage />}></Route>
                    </Routes>
                </AuthProvider>
        </BrowserRouter>
    )
}

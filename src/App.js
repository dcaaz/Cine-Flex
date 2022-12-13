import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostersPage from "./Pages/PostersPage";
import SessionPage from "./Pages/SessionPage";
import SeatsPage from "./Pages/SeatsPage";
import SucessPage from "./Pages/SucessPage";
import Logo from "./Image/Logo.png"

export default function App() {

    return (
        <BrowserRouter>
            <All>
                <GlobalStyle />
                <Header>
                    <img src={Logo}></img>
                </Header>
                <Routes>
                    <Route path="/" element={<PostersPage />}></Route>
                    <Route path="/sessoes/:idFilme" element={<SessionPage />}></Route>
                    <Route path="/assentos/:idSessao" element={<SeatsPage />}></Route>
                    <Route path="/sucess/" element={<SucessPage />}></Route>
                </Routes>
            </All>
        </BrowserRouter>
    )
}

const All = styled.div`
    height: 100vh;
    align-items: center;
`

const Header = styled.div`
    background-color: #AEB3FF;
    height:  80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        margin-top: 10px;
        width: 250px;
        height: 250px;
    }
`
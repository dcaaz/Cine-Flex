import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostersPage from "./PostersPage";
import SessionPage from "./SessionPage";
import SeatsPage from "./SeatsPage";
import SucessPage from "./SucessPage";

export default function App() {

    return (
        <BrowserRouter>
            <All>
                <GlobalStyle />
                <Header>
                    <h1>CINEFLEX</h1>
                </Header>
                <Routes>
                    <Route path="/" element={<PostersPage />}></Route>
                    <Route path="/sessoes/:idFilme" element={<SessionPage />}></Route>
                    <Route path="/assentos/:idSessao" element={<SeatsPage />}></Route>
                    <Route path="/sucess/:idSucess" element={<SucessPage />}></Route>
                </Routes>
            </All>
        </BrowserRouter>
    )
}

const All = styled.div`
    width: 375px;
    height: 100vh;
    align-items: center;
`

const Header = styled.div`
    background-color: #C3CFD9;
    height:  67px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
        color: #E8833A;
        font-style: normal;
        font-size: 34px;
        font-weight: 400;
        line-height: 40px;
    }
`

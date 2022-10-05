import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Posters from "./Posters";

export default function App() {

    return (
        <All>
            <GlobalStyle />
            <Header>
                <h1>CINEFLEX</h1>
            </Header>
            <Choice>
                <h1>Selecione o filme</h1>
            </Choice>
            <Main>
                <Posters />
            </Main>
            {/* <Footer>
            </Footer> */}
        </All>
    )
}

const All = styled.div`
    background-color: #E8833A;
    width: 375px;
    min-height: 100vh;
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

const Choice = styled.div`
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #293845;
    }
`
const Main = styled.div`
    display: flex;
    flex-wrap: wrap
`
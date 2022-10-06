import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import CapaFilme from "./Imagens/CapaFilme.png";

export default function SessionPage() {
    // const [filme, setFilme] = useState({};
    // const {idFilme} = useParams();
    // console.log(idFilme);

    // useEffect(() => {
    //     const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/ID_DO_FILME/showtimes`);
    // })

    return (
        <>
            <Choice>
                <h1>Selecione o horário</h1>
            </Choice>
            <DayOfTheWeek>
                <h1>Quinta-Feira  - 24/06/2021</h1>
                <Buttons>
                    <Link to="/assentos/:idSessao"><button>15:00</button></Link>
                    <Link to="/assentos/:idSessao"><button>19:00</button></Link>
                </Buttons>
            </DayOfTheWeek>

            <DayOfTheWeek>
                <h1>Quinta-Feira  - 24/06/2021</h1>
                <Buttons>
                    <Link to="/assentos/:idSessao"><button>15:00</button></Link>
                    <Link to="/assentos/:idSessao"><button>19:00</button></Link>
                </Buttons>
            </DayOfTheWeek>
            <Footer>
                <img src={CapaFilme} alt="Capa do Filme" />
                <h1>Nome do filme</h1>
            </Footer>
        </>
    )
}

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

const DayOfTheWeek = styled.div`
    margin-left: 24px;
    h1 {
        font-style: regular;
        font-size: 20px;
        margin-bottom: 22px;
    }
`

const Buttons = styled.div`
    display: flex;
    button {
        background-color: #E8833A;
        color: #FFFFFF;
        width: 83px;
        height: 43px;
        margin-bottom: 23px;
        margin-right: 8px;
        border-radius: 3px;
        border-style: none;
    }
`

const Footer = styled.div`
    width: 375px;
    height: 117px;
    background-color: #DFE6ED;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0px;
    img{
        width: 48px;
        height: 72px;
        margin-left: 18px;
        border: 1px solid #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    }
    h1{
        font-style: regular;
        font-size: 26px;
        line-height: 30p;
        line-height: 100%;
        margin-left: 14px;
    }
`

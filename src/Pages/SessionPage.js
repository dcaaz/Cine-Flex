import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";

export default function SessionPage() {
    const { idFilme } = useParams();

    const [filme, setFilme] = useState({});
    const [days, setDays] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);

        promise.then((resp) => {
            let filme = resp.data;
            setFilme(filme);
            setDays(filme.days);
        })

        promise.catch((err) => {
            console.log("erro", err.response.data);
        })
    }, []);


    return (
        <>
            <Choice>
                <h1>Selecione o horário</h1>
            </Choice>
            {days.map((d) =>
                <DayOfTheWeek key={d.id} data-identifier="session-date">
                    <h1>{d.weekday} - {d.date}</h1>

                    <Buttons data-identifier="hour-minute-btn">
                        {d.showtimes.map((hour, i) =>

                            <Link key={i} to={`/assentos/${hour.id}`}><button>{hour.name}</button></Link>
                        )}
                    </Buttons>

                </DayOfTheWeek>
            )}
            <Footer>
                <Data>
                    <img src={filme.posterURL} alt="Capa do Filme" data-identifier="movie-img-preview" />
                    <h1 data-identifier="movie-and-session-infos-preview">{filme.title}</h1>
                </Data>
                <FaHome onClick={() => {
                    navigate("/");
                }} />
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
        color: #7068FF;
    }
`

const DayOfTheWeek = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-size: 20px;
        margin-bottom: 22px;
    }
`

const Buttons = styled.div`
    display: flex;
    flex-wrap: nowrap;  
    button {
        background-color: #FFCC6F;
        color: #000000;
        width: 83px;
        height: 43px;
        margin-bottom: 23px;
        margin-right: 8px;
        border-radius: 3px;
        border-style: none;
    }
`

const Footer = styled.div`
    width: 100%;
    height: 117px;
    background-color: #AEB3FF;
    display: flex;
    justify-content: space-between;
    position: fixed;
    align-items: center;
    bottom: 0px;
    svg {
    margin-right: 20px;
    color: #000000;
    width: 40px;
    height: 40px;
    }
`

const Data = styled.div`
    display: flex;
    align-items: center;
    img{
        margin-left: 20px;
        width: 48px;
        height: 72px;
        border: 1px solid #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    }
    h1{
        font-size: 26px;
        line-height: 30p;
        line-height: 100%;
        margin-left: 14px;
    }
`
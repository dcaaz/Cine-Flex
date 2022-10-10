import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export default function SessionPage() {
    const { idFilme } = useParams();
    console.log("idFilme", idFilme);

    const [filme, setFilme] = useState({});
    const [days, setDays] = useState([]);

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
                <img src={filme.posterURL} alt="Capa do Filme" data-identifier="movie-img-preview" />
                <h1 data-identifier="movie-and-session-infos-preview">{filme.title}</h1>
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
        font-size: 20px;
        margin-bottom: 22px;
    }
`

const Buttons = styled.div`
    display: flex;
    flex-wrap: nowrap;  
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
    position: fixed;
    align-items: center;
    bottom: 0px;
    img{
        width: 48px;
        height: 72px;
        margin-left: 18px;
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
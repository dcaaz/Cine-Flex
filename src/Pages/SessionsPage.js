import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { DayOfTheWeek,  PageTitle, Buttons,Scroll, FontTitle } from "../Style/Style";
import { AuthContext } from "../Ayth";
import { FooterFilm } from "../Components/Footer";

export default function SessionPage() {
    const { idFilme } = useParams();

    const [days, setDays] = useState([]);

    const { setFooter } = useContext(AuthContext);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);

        promise.then((resp) => {
            let film = resp.data;
            setDays(film.days);
            setFooter(film);
        })

        promise.catch((err) => {
            console.log("erro sessionPage", err.response.data);
        })
    }, [idFilme, setFooter]);


    return (
        <>
            < PageTitle>
                <FontTitle>Select the time</FontTitle>
            </ PageTitle>
            <Scroll>
            {days.map((d) =>
                <DayOfTheWeek key={d.id}>
                    <h1>{d.weekday} - {d.date}</h1>

                    <Buttons>
                        {d.showtimes.map((hour, i) =>
                            <Link key={i} to={`/seats/${hour.id}`}>
                                <button>{hour.name}</button>
                            </Link>
                        )}
                    </Buttons>
                </DayOfTheWeek>
            )}
          </Scroll>
        <FooterFilm/>
        </>
    )
}
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Inputs from "../Components/SeatsInput";
import {  PageTitle, Seats, Seat, Instructions, Info, Button1, Button2, Button3, FontTitle, Loading } from "../Style/Style";
import { FooterFilm } from "../Components/Footer";

export default function SeatsPage() {
    const { idSessao } = useParams();

    const [place, setPlace] = useState({});
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [selectedSeatsIds, setSelectedSeatsIds] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`);

        promise.then((res) => {
            let resp = res.data;

            setPlace(resp);
            setSeats(resp.seats);
        })

        promise.catch((err) => {
            console.log("erro SeatsPage", err.response.data);
        })
    }, [idSessao]);

    function clickedSeat(seat, i) {
        const newSeat = seat;
        const newSeats = seats;

        newSeat.selected = !seat.selected;
        newSeats[i] = newSeat;

        setSeats([...newSeats]);

        const newSelectedSeats = newSeats.filter((seat) => seat.selected);

        setSelectedSeats(newSelectedSeats.map((seat) => seat.name));
        setSelectedSeatsIds(newSelectedSeats.map((seat) => seat.id))
    }

    if (place.length === 0) {
        return <Loading>CARREGANDO...</Loading>
    }

    return (
        <>
            <PageTitle>
                <FontTitle>Select the seats</FontTitle>
            </PageTitle>
            <Seats>
                {seats.map((s, i) =>
                    <Seat
                        key={i}
                        back={s.isAvailable ? s.selected ? '#1AAE9E' : '#C3CFD9' : '#FBE192'}
                        border={s.isAvailable ? s.selected ? '#0E7D71' : '#808F9D' : '#F7C52B'}>
                        <button
                            key={i}
                            onClick={s.isAvailable ? () => clickedSeat(s, i) : () => alert("This seat is not available :(")}
                        >
                            <h1>{s.name}</h1>
                        </button>
                    </Seat>
                )}
            </Seats>
            <Instructions>
                <Info >
                    <Button1></Button1>
                    <h1>Selected</h1>
                </Info>
                <Info>
                    <Button2></Button2>
                    <h1>Available</h1>
                </Info>
                <Info>
                    <Button3></Button3>
                    <h1>Unavailable</h1>
                </Info>
            </Instructions>

            <Inputs
                selectedSeats={selectedSeats}
                selectedSeatsIds={selectedSeatsIds}
                hour={place} />

            <FooterFilm/>
        </>
    )
}
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Inputs from "./SeatsInput";

export default function SeatsPage() {
    const { idSessao } = useParams();

    const [place, setPlace] = useState({});
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`);

        promise.then((resp) => {
            let respData = resp.data;

            console.log("resposta da promise", respData);
            setPlace(respData);
            setSeats(respData.seats);
        })

        promise.catch((err) => {
            console.log("erro", err.response.data);
        })
    }, []);

    function clickedSeat(seat, i) {
        let newSeat = seat;
        let newSeats = seats;

        newSeat.selected = !seat.selected;
        newSeats[i] = newSeat;

        setSeats([...newSeats]);

        let newSelectedSeats = newSeats.filter((seat) => seat.selected).map((seat) => seat.name);
        setSelectedSeats(newSelectedSeats);
    }

    return (
        <>
            <Choice>
                <h1>Selecione o(s) assento(s)</h1>
            </Choice>
            <Seats>
                {seats.map((seat, i) => <Seat
                key={i} 
                back={seat.isAvailable ? seat.selected ? '#1AAE9E' : '#C3CFD9' : '#FBE192'} 
                border={seat.isAvailable ? seat.selected ? '#0E7D71' : '#808F9D' : '#F7C52B'}>
                    <button
                        key={i}
                        onClick={seat.isAvailable ? () => clickedSeat(seat, i) : null}
                    >
                        <h1>{seat.name}</h1>
                    </button>
                </Seat>
                )}
            </Seats>
            <Instructions>
                <Info>
                    <Button1></Button1>
                    <h1>Selecionado</h1>
                </Info>
                <Info>
                    <Button2></Button2>
                    <h1>Disponível</h1>
                </Info>
                <Info>
                    <Button3></Button3>
                    <h1>Indisponível</h1>
                </Info>
            </Instructions>

            <Inputs />
        </>
    )
}

const Seat = styled.div`
            button {
            background-color: ${props => props.back};
            border-color: ${props => props.border};
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

const Seats = styled.div`
            display: flex;
            flex-wrap: wrap;
            margin-left: 24px;
            margin-right: 24px;
            button {
            width: 26px;
            height: 26px;
            margin-left: 8px;
            margin-bottom: 18px;
            border-radius: 12px;
            border-style: solid;
    }
            h1{
            font-style: regular;
            font-size: 11px;
            line-height: 13px;
            align-items: center;
    }
`

const Instructions = styled.div`
            display: flex;
            align-items: center;
            justify-content: center;
             & button:first-child {
            background-color: orange;
            }
            & button:nth-child(2) {
            background-color: #FF922E;
            }
            & button:last-child {
            background-color: #2FBE34;
            }
`

const Info = styled.div` 
        display: flex;
        flex-direction: column;
        align-items: center;
            h1 {
            font-style: regular;
            font-size: 13px;
            line-height: 15px;
            align-items: center;
            margin: 0px 25px;
    }
`

const Button1 = styled.div`
    width: 26px;
    height: 26px;
    margin: 0px 40px;
    margin-top: 16px;
    margin-bottom: 1px;
    border-radius: 12px;
    background-color: #1AAE9E;
    border-style: solid;
`

const Button2 = styled(Button1)`
    background-color: #C3CFD9;
`

const Button3 = styled(Button1)`
    background-color: #FBE192;
`
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Inputs from "../Components/SeatsInput";

export default function SeatsPage() {
    const { idSessao } = useParams();

    const [place, setPlace] = useState({});
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [selectedSeatsIds, setSelectedSeatsIds] = useState([]);
    const [footer, setFooter] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`);

        promise.then((resp) => {
            let respData = resp.data;

            setPlace(respData);
            setSeats(respData.seats);
            setFooter(respData.movie);
        })

        promise.catch((err) => {
            console.log("erro", err.response.data);
        })
    }, []);

    function clickedSeat(seat, i) {
        const newSeat = seat;
        const newSeats = seats;
        
        newSeat.selected = !seat.selected;
        newSeats[i] = newSeat;

        setSeats([...newSeats]);

        const newSelectedSeats = newSeats.filter((seat) => seat.selected);

        setSelectedSeats(newSelectedSeats.map((seat) => seat.name));
        setSelectedSeatsIds(newSelectedSeats.map((seat) => seat.id));

        console.log(newSelectedSeats.map((seat) => seat.name));
        console.log(newSelectedSeats.map((seat) => seat.id));

    }

    if (place.length === 0) {
        return <Carregando>CARREGANDO...</Carregando>
    }

    return (
        <>
            <Choice>
                <h1>Selecione o(s) assento(s)</h1>
            </Choice>
            <Seats data-identifier="seat">
                {seats.map((seat, i) =>
                    <Seat
                        key={i}
                        back={seat.isAvailable ? seat.selected ? '#1AAE9E' : '#C3CFD9' : '#FBE192'}
                        border={seat.isAvailable ? seat.selected ? '#0E7D71' : '#808F9D' : '#F7C52B'}>
                        <button
                            key={i}
                            onClick={seat.isAvailable ? () => clickedSeat(seat, i) : () => alert("Esse assento não está disponível :(")}
                        >
                            <h1>{seat.name}</h1>
                        </button>
                    </Seat>
                )}
            </Seats>
            <Instructions>
                <Info data-identifier="seat-selected-subtitle">
                    <Button1></Button1>
                    <h1>Selecionado</h1>
                </Info>
                <Info data-identifier="seat-available-subtitle">
                    <Button2></Button2>
                    <h1>Disponível</h1>
                </Info>
                <Info data-identifier="seat-unavailable-subtitle">
                    <Button3></Button3>
                    <h1>Indisponível</h1>
                </Info>
            </Instructions>

            <Inputs 
                
                selectedSeats={selectedSeats}
                selectedSeatsIds={selectedSeatsIds}
                movie={footer.title}
                hour={place} />

            <Footer>
                <img src={footer.posterURL} alt="Capa do Filme" />
                <h1>{footer.title}</h1>
            </Footer>
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
            color: #7068FF;
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

const Footer = styled.div`
    width: 100%;
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

const Carregando = styled.div`
    font-size: 20px;
    margin: 10px;
`
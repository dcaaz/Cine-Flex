import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Inputs from "./SeatsInput";

export default function SeatsPage() {

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

    function clickedSeat(num, i) {
        console.log(num, i);
    }

    return (
        <>
            <Choice>
                <h1>Selecione o(s) assento(s)</h1>
            </Choice>
            <Seats>
                {numeros.map((num, i) =>
                    <button
                        key={i}
                        onClick={() => clickedSeat(num, i)}
                    >
                        <h1>{num}</h1>
                    </button>
                )}
            </Seats>
            <Instructions>
                <Info>
                    <button></button>
                    <h1>Selecionado</h1>
                </Info>
                <Info>
                    <button></button>
                    <h1>Disponível</h1>
                </Info>
                <Info>
                    <button></button>
                    <h1>Indisponível</h1>
                </Info>
            </Instructions>
            
            <Inputs />

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
            background-color: #C3CFD9;
            border-radius: 12px;
            border-color: #808F9D;
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
`

const Info = styled.div` 
        display: flex;
        flex-direction: column;
        align-items: center;
        button {
                width: 26px;
            height: 26px;
            margin: 0px 40px;
            margin-top: 16px;
            margin-bottom: 1px;
            border-radius: 12px;
            border-color: #808F9D;
            border-style: solid;
            } 
            h1 {
            font-style: regular;
            font-size: 13px;
            line-height: 15px;
            align-items: center;
            margin: 0px 25px;
    }
            /* & button:first-child {
            background-color: orange;
            }
            & button:nth-child(2) {
            background-color: #FF922E;
            }
            & button:last-child {
            background-color: #2FBE34;
            } */
`

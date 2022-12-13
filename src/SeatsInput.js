import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Inputs({ selectedSeats, selectedSeatsIds, movie, hour }) {

    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const navigate = useNavigate();

    function reserve(event) {
        event.preventDefault(); //para não apagar o que estiver escrito no campo do input

        const URL = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";

        const body = {
            ids: selectedSeatsIds,
            name: name,
            cpf: cpf
        }

        const promise = axios.post(URL, body);
        promise.then(() => {
            navigate(`/sucess/`, {
                state: {
                    hour: hour,
                    movie: movie,
                    ids: selectedSeatsIds,
                    number: selectedSeats,
                    name: name,
                    cpf: cpf
                }
            });
        })

        promise.catch((err) => {
            console.log("erro", err.response.data.mensagem);
            alert(err.response.data.mensagem);
        })
    }

    return (
        <>
            <form onSubmit={reserve}>
                <AllInputs>
                    <Input data-identifier="buyer-name-input">
                        <label htmlFor="name">Nome do Comprador:</label>
                        <input
                            id="name"
                            placeholder="   Digite seu nome..."
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                        />
                    </Input>

                    <Input data-identifier="buyer-cpf-input">
                        <label htmlFor="cpf">CPF do Comprador:</label>
                        <input
                            id="cpf"
                            placeholder="   Digite seu CPF..."
                            onChange={(e) => setCpf(e.target.value)}
                            value={cpf}
                            required
                        />
                    </Input>
                </AllInputs>
                <Reserve>
                    <button type="submit" data-identifier="reservation-btn">
                        <h1>Reservar assento(s)</h1>
                    </button>
                </Reserve>
            </form>
        </>
    )
}

const AllInputs = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 42px;
    margin-bottom: 50px;
    margin-right: 24px;
    margin-left: 24px;
`
const Input = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 7px;
    label {
        font-style: Regular;
        font-size: 18px;
        line-height: 21px;
    }
    input {
        width: 327px;
        height: 51px;  
        border-radius: 3px;
        border-color: #D4D4D4;
        border-style: solid;
    }
    input::placeholder{
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
    }
`
const Reserve = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    button{
        width: 225px;
        height: 42px;
        border-radius: 3px;
        border-style: solid;
        border-color:#E8833A;
        background-color: #E8833A;
    }
    h1 {
        font-style: regular;
        font-size: 18px;
        line-height: 21px;
        line-height: 100%;
        font-weight: 400;
        color: #FFFFFF;
    }
`
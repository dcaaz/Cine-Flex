import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AllInputs, DefaultButton, FontMain, Input } from "../Style/Style";

export default function Inputs({ selectedSeats, selectedSeatsIds, movie, hour }) {

    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const navigate = useNavigate();

    function reserve(event) {
        event.preventDefault(); //para não apagar o que estiver escrito no campo do input


        if(cpf.length < 11 || cpf.length > 11){
            alert("Enter a valid 11-digit CPF :)")
        } else if(selectedSeats.length === 0){
            alert("Oops, can you select a seat so we can proceed? :)")
        } else {
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
                alert(err.response.data.mensagem);
            })
        }
    }

    return (
        <>
            <form onSubmit={reserve}>
                <AllInputs>
                    <Input>
                        <label>Buyer's Name:</label>
                        <input
                            id="name"
                            type="text"
                            autocomplete="off"
                            placeholder="   Type your name..."
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                        />
                    </Input>

                    <Input>
                        <label>Buyer CPF:</label>
                        <input
                            id="cpf"
                            type="number"
                            autocomplete= "off"
                            placeholder="   Enter your CPF..."
                            onChange={(e) => setCpf(e.target.value)}
                            value={cpf}
                            required
                        />
                    </Input>
                </AllInputs>
                <DefaultButton>
                    <button>
                        <FontMain>Reserve seat</FontMain>
                    </button>
                </DefaultButton>
            </form>
        </>
    )
}
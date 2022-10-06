import styled from "styled-components";

export default function Inputs() {
    
    function confirmReservation(){
        alert("Reservado");
    }

    return (
        <>
            <AllInputs>
                <Input>
                    <h1>Nome do Comprador:</h1>
                    <input
                        placeholder="Digite seu nome..."
                    // onChange={(event) => setInput(event.target.value)}
                    // value={input}
                    />
                </Input>

                <Input>
                    <h1>CPF do Comprador:</h1>
                    <input
                        placeholder="Digite seu CPF..."
                    // onChange={(event) => setInput(event.target.value)}
                    // value={input}
                    />
                </Input>
            </AllInputs>
            <Reserve>
            <button onClick={confirmReservation}><h1>Reservar assento(s)</h1></button>
            </Reserve>
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
    button{
        width: 225px;
        height: 42px;
        border-radius: 3px;
        border-style: solid;
        border-color:#E8833A;
        background-color: #E8833A;
    }
`
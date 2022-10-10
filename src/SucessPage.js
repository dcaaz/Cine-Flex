import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export default function SucessPage() {
    const location = useLocation();
    console.log("location", location);

    return (
        <>
            <Choice>
                <h1>Pedido feito com sucesso!</h1>
            </Choice>

            <Confirm>

                <Top>
                    <h1>FIlme e sessão</h1>
                </Top>
                <Dice>
                    <h1>{location.state.movie}</h1>
                    <h1>{location.state.hour.day.date} {location.state.hour.name}</h1>
                </Dice>

                <Top>
                    <h1>Ingressos</h1>
                </Top>
                <Dice>
                    {location.state.number.map((i, indice) =>
                        <h1 key={indice}>
                            Assento {i}
                        </h1>)}
                </Dice>

                <Top>
                    <h1>Comprador</h1>
                </Top>
                <Dice>
                    <h1>Nome: {location.state.name}</h1>
                    <h1>Cpf: {location.state.cpf}</h1>
                </Dice>

            </Confirm>

            <Home>
                <Link to="/">
                    <button>
                        <h1>Voltar pra home </h1>
                    </button>
                </Link>
            </Home>
        </>
    )
}

const Choice = styled.div`
            height: 110px;
            display: flex;
            align-items: center;
            justify-content: center;
            h1{
            width: 150px;
            font-style: bold;
            font-weight: 700;
            font-size: 24px;
            line-height: 28px;
            line-height: 100%;
            color:#247A6B;
    }
`

const Confirm = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 62px;
    margin-left: 69px;
`

const Top = styled.div`
        font-style: bold;
        font-size: 24px;
        line-height: 28px;
        line-height: 100%;
        font-weight: 700;
        margin-top: 16px;
`

const Dice = styled.div`
        h1 {
            font-size: 22px;
            line-height: 26px;
            line-height: 100%;
            font-weight: 400;
            color: #293845;
        }
`

const Home = styled.div`
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
    h1 {
        font-size: 18px;
        line-height: 21px;
        line-height: 100%;
        font-weight: 400;
        color: #FFFFFF;
    }
`
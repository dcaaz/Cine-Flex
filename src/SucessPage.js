import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SucessPage() {
    return (
        <>
            <Choice>
                <h1>Pedido feito com sucesso!</h1>
            </Choice>
            <Confirm>
                <Top>
                    <h1>FIlme e sessão</h1>
                </Top>
                <h1>{body.name}</h1>
                <h1>Data e hora</h1>
            </Confirm>
            <Confirm>
                <Top>
                    <h1>Ingresso</h1>
                </Top>
                <h1>Assento</h1>
                <h1>Assento</h1>
            </Confirm>
            <Confirm>
                <Top>
                    <h1>Comprador</h1>
                </Top>
                <h1>Nome:</h1>
                <h1>Cpf:</h1>
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
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    h1 {
        font-size: 22px;
        line-height: 26px;
        line-height: 100%;
        font-weight: 400;
        color: #293845;
    }
`

const Top = styled.div`
        font-style: bold;
        font-size: 24px;
        line-height: 28px;
        line-height: 100%;
        font-weight: 700;
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
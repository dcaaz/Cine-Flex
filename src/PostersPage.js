import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function PostersPage() {

    const [image, setImage] = useState([]);

    useEffect(() => {
        const url = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
        const promise = axios.get(url);

        promise.then((resp) => {
            setImage(resp.data);
        })

        promise.catch((erro) => {
            console.log(erro.response.data);
        })
    }, [])

    // RETORNO ANTECIPACIDO:

    if (image.length === 0) {
        return <Carregando>CARREGANDO...</Carregando>
    }


    return (
        <>
            <Choice>
                <h1>Selecione o filme</h1>
            </Choice>
            <Main>
                {image.map((img) =>
                    <Poster key={img.id} data-identifier="movie-outdoor">
                        <Link to={`/sessoes/${img.id}`}>
                            <img src={img.posterURL} alt="Capa do Filme" />
                        </Link>
                    </Poster>
                )}
            </Main>
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

const Main = styled.div`
    display: flex;
    flex-wrap: wrap
`

const Poster = styled.div`
    margin: 11px 28px;
    img{
        width: 129px;
        height: 193px;
        border: 1px solid #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    }
`

const Carregando = styled.div`
    font-size: 20px;
    margin: 10px;
`
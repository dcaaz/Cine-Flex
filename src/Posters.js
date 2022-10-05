import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Posters() {

    const [image, setImage] = useState([]);

    useEffect(() => {
        const url = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
        const promise = axios.get(url);

        promise.then((resp) => {
            console.log(resp.data);
            setImage(resp.data);
        })

        promise.catch((erro) => {
            console.log(erro.response.data);
        })
    }, [])

    if (image.length === 0){
        return <Carregando>CARREGANDO...</Carregando>
    }


    return (
        <>
            {image.map((img) =>
                <Poster  key={img.id}>
                    <img src={img.posterURL} alt="Capa do Filme" />
                </Poster>
            )}
        </>
    )
}

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
`
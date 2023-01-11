import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {  PageTitle, Main, Poster, Loading, FontH1 } from "../Style/Style";

export default function PostersPage() {

    const [image, setImage] = useState([]);

    useEffect(() => {
        const url = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
        const promise = axios.get(url);

        promise.then((res) => {
            setImage(res.data);
        })

        promise.catch((err) => {
            console.log("err PostersPage", err.response.data);
        })
    }, [])

    if (image.length === 0) {
        return <Loading>Loading...</Loading>
    }


    return (
        <>
            < PageTitle>
                <FontH1>Select the movie</FontH1>
            </ PageTitle>
            <Main>
                {image.map((i) =>
                    <Poster key={i.id}>
                        <Link to={`/sessions/${i.id}`}>
                            <img src={i.posterURL} alt="Capa do Filme" />
                        </Link>
                    </Poster>
                )}
            </Main>
        </>
    )
}
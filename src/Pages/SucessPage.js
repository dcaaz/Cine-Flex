import { Link, useLocation } from "react-router-dom";
import { FooterFilm } from "../Components/Footer";
import { Dice, Top, PageTitle, Confirm, DefaultButton, FontMain, FontTitle } from "../Style/Style";

export default function SucessPage() {

    const location = useLocation();

    return (
        <>
            <PageTitle>
                <FontTitle>Order placed successfully!</FontTitle>
            </PageTitle>

            <Confirm>
                <Top>
                    <h1>Film and session</h1>
                </Top>
                <Dice>
                    <FontMain>{location.state.movie}</FontMain>
                    <FontMain>{location.state.hour.day.date} {location.state.hour.name}</FontMain>
                </Dice>

                <Top>
                    <h1>Tickets</h1>
                </Top>
                <Dice>
                    {location.state.number.map((i, indice) =>
                        <FontMain key={indice}>
                            Seat {i}
                        </FontMain>)}
                </Dice>

                <Top>
                    <h1>Buyer</h1>
                </Top>
                <Dice>
                    <FontMain>Name: {location.state.name}</FontMain>
                    <FontMain>Cpf: {location.state.cpf}</FontMain>
                </Dice>

            </Confirm>

            <DefaultButton>
                <Link to="/">
                    <button>
                        <FontMain>Go back to home</FontMain>
                    </button>
                </Link>
            </DefaultButton>
            <FooterFilm/>
        </>
    )
}
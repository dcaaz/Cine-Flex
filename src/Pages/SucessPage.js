import { Link, useLocation } from "react-router-dom";
import { FooterFilm } from "../Components/Footer";
import { Dice, Top, PageTitle, Confirm, DefaultButton, FontH1 } from "../Style/Style";

export default function SucessPage() {

    const location = useLocation();

    return (
        <>
            <PageTitle>
                <FontH1>Order placed successfully!</FontH1>
            </PageTitle>

            <Confirm>
                <Top>
                    <h1>Film and session</h1>
                </Top>
                <Dice>
                    <FontH1>{location.state.movie}</FontH1>
                    <FontH1>{location.state.hour.day.date} {location.state.hour.name}</FontH1>
                </Dice>

                <Top>
                    <h1>Tickets</h1>
                </Top>
                <Dice>
                    {location.state.number.map((i, indice) =>
                        <FontH1 key={indice}>
                            Seat {i}
                        </FontH1>)}
                </Dice>

                <Top>
                    <h1>Buyer</h1>
                </Top>
                <Dice>
                    <FontH1>Name: {location.state.name}</FontH1>
                    <FontH1>Cpf: {location.state.cpf}</FontH1>
                </Dice>

            </Confirm>

            <DefaultButton>
                <Link to="/">
                    <button>
                        <FontH1>Go back to home</FontH1>
                    </button>
                </Link>
            </DefaultButton>
            <FooterFilm/>
        </>
    )
}
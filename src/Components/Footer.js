import { AuthContext } from "../Ayth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Footer, Data, FontH1 } from "../Style/Style";
import { FaHome } from "react-icons/fa";

export function FooterFilm() {

    const { footer } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <Footer>
            <Data>
                <img src={footer.posterURL} alt="Capa do Filme" />
                <FontH1>{footer.title}</FontH1>
            </Data>
            <FaHome
                onClick={() => { navigate("/") }} />
        </Footer>
    )

}
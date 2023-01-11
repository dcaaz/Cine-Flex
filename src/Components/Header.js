import Logo from "../Image/Logo.png";
import { Header } from "../Style/Style";

export default function InitialHeader() {
    return (
        <Header>
            <img src={Logo} alt="Logotipo"></img>
        </Header>
    )
}
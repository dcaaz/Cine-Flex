import styled from "styled-components";
import COLORS from "./Constant/Colors";

export const Header = styled.div`
    width: 100vw;
    height:  9%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${COLORS.base};
    img {
        margin-top: 10px;
        width: 300px;
        height: 300px;
    }
`
export const Footer = styled.div`
    width: 100vw;
    height: 9%;
    display: flex;
    justify-content: space-between;
    position: fixed;
    align-items: center;
    bottom: 0px;
    background-color:${COLORS.base};
    svg {
    margin-right: 20px;
    color: #000000;
    width: 40px;
    height: 40px;
    }
`
export const  PageTitle = styled.div`
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLORS.base};
`
export const Scroll = styled.div`
    padding-bottom: 100px;
`
export const FontH1 = styled.h1`
    font-family: "Roboto";
    font-size: 25px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0.04em;
    margin-bottom: 2px;
`
export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
export const Poster = styled.div`
    img{
        width: 129px;
        height: 193px;
        margin: 10px;
        border: 1px solid #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    }
`
export const Loading = styled.div`
    font-size: 20px;
    margin: 10px;
`
export const DayOfTheWeek = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    h1 {
        font-size: 20px;
        margin-bottom: 22px;
    }
`
export const Buttons = styled.div`
    display: flex;
    flex-wrap: nowrap;  
    button {
        width: 83px;
        height: 43px;
        margin-bottom: 23px;
        margin-right: 8px;
        border-radius: 3px;
        border-style: none;
        background-color: ${COLORS.backHour};
        color: #000000;
    }
`
export const Data = styled.div`
    display: flex;
    align-items: center;
    img{
        margin-left: 20px;
        margin-right: 10px;
        width: 48px;
        height: 72px;
        border: 1px solid #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    }
`
export const Seat = styled.div`
            button {
            background-color: ${props => props.back};
            border-color: ${props => props.border};
    }
`
export const Seats = styled.div`
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            button {
            width: 26px;
            height: 26px;
            margin-left: 8px;
            margin-bottom: 18px;
            border-radius: 12px;
            border-style: solid;
            }
            h1 {
            font-size: 11px;
            display: flex;
            align-items: center;
            justify-content: center;
            }
`
export const Instructions = styled.div`
            display: flex;
            align-items: center;
            justify-content: center;
             & button:first-child {
            background-color: orange;
            }
            & button:nth-child(2) {
            background-color: #FF922E;
            }
            & button:last-child {
            background-color: #2FBE34;
            }
`
export const Info = styled.div` 
        display: flex;
        flex-direction: column;
        align-items: center;
            h1 {
            font-size: 13px;
            line-height: 15px;
            align-items: center;
            margin: 0px 25px;
    }
`
export const Button1 = styled.div`
    width: 26px;
    height: 26px;
    margin: 0px 40px;
    margin-top: 16px;
    margin-bottom: 1px;
    border-radius: 12px;
    background-color: #1AAE9E;
    border-style: solid;
`
export const Button2 = styled(Button1)`
    background-color: #C3CFD9;
`
export const Button3 = styled(Button1)`
    background-color: #FBE192;
`
export const AllInputs = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 42px;
    margin-bottom: 50px;
`
export const Input = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 7px;
    label {
        font-family: "Roboto";
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
    }
    input {
        width: 20vw;
        height: 51px;  
        border-radius: 3px;
        border-color: #D4D4D4;
        border-style: solid;
    }
    input::placeholder{
        font-family: "Roboto";
        font-size: 18px;
        font-style: italic;
        font-weight: 400;
        line-height: 21px;

    }
`
export const DefaultButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    button{
        width: 20vw;
        height: 42px;
        border-radius: 10px;
        border-style: none;
        background-color: ${COLORS.button};
        margin-bottom: 200px;
    }
`
export const Confirm = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 62px
`
export const Top = styled.div`
    h1{
        font-family: "Roboto";
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        margin-top: 16px;
        margin-bottom: 10px;
    }
`
export const Dice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
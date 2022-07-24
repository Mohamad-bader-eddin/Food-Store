import styled from "styled-components";
import { device } from "../../Style/Device";
import { altColor, mainColor, mainTransition } from "../../Style/Variable";

export const PopupOverlay = styled.div `
    position: fixed;
    background-color: rgba(0, 0, 0, .7);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
`

export const PopupBox = styled.div `
    position: fixed;
    left: 50%;
    top: 50%;
    width: 90%;
    transform: translate(-50%, -50%);
    background-color: #2e2c28c4;
    border: 1px solid #ccc;
    padding: 20px;
    z-index: 1001;

    @media ${device.mobileS}{
        padding: 0;
        width: 100%;
    }
`

export const CloseButton = styled.div `
    position: absolute;
    top: -15px;
    right: -15px;
    background-color: ${mainColor};
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    color: white;
    cursor: pointer;
    font-weight: bold;
    border-radius: 50%;

    @media ${device.mobileS}{
        right: 5px;
    }
`

export const CardForm = styled.form `
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 20px 0;

    & input{
        background: rgba(0,0,0,.8);
        border-radius: 8px;
        padding: 10px;
        color: white;
        caret-color: ${mainColor};
        border: 3px solid ${altColor};
    }

    & input:focus{
        outline: none;
        border: 3px solid ${mainColor};
    }

    @media ${device.laptop}{
        flex-direction: column;

        & input{
            width: 80%;
            margin: 10px 0;
        }
    }
`

export const Button = styled.button `
    display: block;
    margin: 30px auto;
    padding: 15px 30px;
    background-color: ${ mainColor };
    color: white;
    border: 2px solid ${altColor};
    font-size: 22px;
    font-weight: bold;
    border-radius: 20px;
    text-align: center;
    width: 50%;
    cursor: pointer;
    transition: ${mainTransition};

    &:hover{
        background-color: ${altColor};
        color: white;
    }

    &:disabled , &:hover:disabled{
        background-color: #ff8c006e;
        color: white;
        cursor: inherit;
    }

    @media ${device.tablet}{
        width: 90%;
    }
`

export const Tippy = styled.div `
    position: absolute;
    color: red;
    bottom: -20px;
`
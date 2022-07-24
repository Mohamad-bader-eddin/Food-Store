import styled from "styled-components";
import { device } from "../../Style/Device";
import { altColor, mainColor } from "../../Style/Variable";

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
    position: absolute;
    left: 50%;
    top: 50%;
    width: 75%;
    transform: translate(-50%, -50%);
    background-color: #1b1b1beb;
    border: 1px solid #ccc;
    padding: 20px;
    z-index: 1001;

    @media ${device.laptop}{
        width: 85%;
    }

    @media ${device.mobileL}{
        top: 70%;
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

export const Content = styled.div `
    display: flex;
    justify-content: space-between;

    @media ${device.tablet}{
        flex-direction: column;
    }
`

export const PickUp = styled.div `
    flex-basis: 48%;
    & h2{
        font-size: 30px;
        font-weight: bold;
        color: ${mainColor};
    }
`

export const OrderSummary = styled.div `
    flex-basis: 48%;

    & h2{
        font-size: 30px;
        font-weight: bold;
        color: ${mainColor};
    }
`
export const ListItem = styled.li `
    padding: 10px;
    border: 2px solid ${mainColor};
    border-radius: 12px;
    background-color: rgba(0,0,0,0.6);
    margin-bottom: 10px;

    & p{
        color: #aaa;
        margin: 0;
    }
`

export const Item = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;

    & h3{
        font-size: 18px;
        color: ${altColor};
        margin: 0;
    }

    & h5{
        font-size: 14px;
        color: white;
        margin: 0;
    }

    & span{
        font-size: 20px;
        color: ${mainColor};
    }
`

export const PopupBoxInfo = styled.div `
    flex-basis: 48%;

    & div{
        margin: 0 0 20px;
        color: white;
    }

    & span{
        text-transform: capitalize;
        font-weight: bold;
        color: ${altColor};
        font-size: 18px;
        margin: 0 10px;
    }
`
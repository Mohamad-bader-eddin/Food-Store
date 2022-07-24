import styled from 'styled-components'
import { mainPaddingBottom, mainPaddingTop, mainColor, mainTransition } from '../../Style/Variable'
import { device } from '../../Style/Device'

export const ListContent = styled.div `
    padding-top: ${mainPaddingTop};
    padding-bottom: ${mainPaddingBottom};
    background: url('/images/bg.png');
    background-size: cover;
`

export const Shuffle = styled.ul `
    display: flex;
    justify-content: center;

    & li{
        padding: 20px 40px;
        margin-right: 20px;
        color: ${mainColor};
        font-weight: bold;
        background-color: #eee;
        border-radius: 12px;
        border: 2px solid ${mainColor};
        text-transform: uppercase;
        cursor: pointer;
        position: relative;
        transition: ${mainTransition};
    }

    & li.active , & li:hover{
        background-color: ${mainColor};
        color: white;
    }

    & li::before{
        content: '';
        position: absolute;
        bottom: -18px;
        left: 50%;
        transform: translateX(-50%);
        border-width: 8px;
        border-style: solid;
        border-color: ${mainColor} transparent transparent transparent;
    }

    @media ${device.tablet}{
        flex-direction: column;

        & li{
            margin: 20px;
        }
    }
`

export const Content = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 50px;
    position: relative;
`

export const Box = styled.div `
    flex-basis: 45%;
    background-color: #eee;
    padding: 10px;
    border-radius: 6px;
    box-shadow: 0 2px 15px rgb(0 0 0 / 10%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin: 20px 0;
    transition: ${mainTransition};

    &:hover{
        transform: translateY(-10px);
    }

    &::before{
        content: "";
        left: 50%;
        transform: translateX(-50%);
        height: 3px;
        top: -3px;
        background-color: ${mainColor};
        position: absolute;
        width: 0;
        transition: ${mainTransition};
    }

    &:hover::before{
        width: 100%;
    }

    & img{
        width: 110px;
        height: 110px;
        margin-right: 20px;
        border-radius: 12px;
        flex-basis: 30%;
    }

    & h1{
        font-weight: bold;
        margin-bottom: 10px;
        color: #1d1d1d;
        text-transform: uppercase;
        font-size: 20px;
    }

    & p{
        line-height: 1.2;
        color: #777;
    }

    & span{
            padding: 10px 20px;
            text-align: center;
            background-color: ${mainColor};
            color: white;
            border-radius: 6px;
            flex-basis: 30%;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
        }
        
    @media ${device.tablet}{
        flex-basis: 90%;
    }

    @media ${device.mobileL}{
        flex-direction: column;

        & h1{
            text-align: center;
        }

        & p{
            text-align: center;
        }
    }
`

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
    width: 75%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 1px solid #ccc;
    padding: 20px;
    z-index: 1001;

    @media ${device.laptop}{
        width: 85%;
    }
`

export const PopupBoxContent = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;


    @media ${device.tablet}{
        flex-direction: column;
    }
`

export const PopupBoxImage = styled.div `
    flex-basis: 48%;

    & img{
        max-width: 100%;
    }

    @media ${device.tablet}{
        & img{
            margin-bottom: 20px;
        }
    }
`

export const PopupBoxInfo = styled.div `
    flex-basis: 48%;

    & div{
        margin: 0 0 20px;
    }

    & span{
        text-transform: capitalize;
        font-weight: bold;
        color: ${mainColor};
        font-size: 18px;
    }

    & input{
        margin-left: 5px;
        border: none;
        caret-color: ${mainColor};
        width: 100px;
    }

    & input:focus{
        outline-color: ${mainColor};
    }

    & button {
        display: block;
        border: 2px solid ${mainColor};
        padding: 10px 30px;
        margin: auto;
        color: ${mainColor};
        background-color: white;
        font-weight: bold;
        cursor: pointer;
        transition: ${mainTransition};
    }

    & button:hover{
        background-color: ${mainColor};
        color: white;
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
`
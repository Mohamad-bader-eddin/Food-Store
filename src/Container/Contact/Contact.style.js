import styled, { keyframes } from "styled-components";
import { altColor, labelColor, mainTransition, sectionBackground } from '../../Style/Variable'
import { device } from '../../Style/Device'


const flashing = keyframes `
    0%,
    40% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        width: 200%;
        height: 200%;
    }
`

export const Contacts = styled.div `
    display: flex;
    flex-wrap: wrap;

    @media ${device.tablet}{
        flex-direction: column;
    }
`

export const Image = styled.div `
    flex-basis: 50%;
    position: relative;
    overflow: hidden;
    background-image: url('/images/contact.jpg');
    background-size: cover;

    &::before{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgb(255 255 255 / 20%);
        width: 0;
        height: 0;
        opacity: 0;
        z-index: 2;
    }

    &:hover::before{
        animation: ${flashing} ${mainTransition};
    }

    & h2{
        text-align: center;
        color: #fdf886;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(0,0,0,0.8);
        width: 100%;
        padding: 10px;
    }
`

export const FormContent = styled.div `
    flex-basis: 50%;
    background-color: ${sectionBackground};
    padding: 15px;
    border: 2px solid ${altColor};
`

export const Button = styled.button `
    display: block;
    margin: 5px auto;
    width: 60%;
    padding: 10px 0;
    background-color: ${labelColor};
    color: white;
    border: 1px solid ${labelColor};
    border-radius: 10px;
    cursor: pointer;
    transition: ${mainTransition};

    &:hover{
        background-color: #333;
        color: ${altColor};
    }

    &:disabled{
        opacity: 0.7;
        &:hover{
            background-color: ${labelColor};
            color: white;
        }
    }
`
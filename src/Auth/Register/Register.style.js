import styled from 'styled-components'
import { altColor, labelColor, mainTransition } from '../../Style/Variable'
import { device } from '../../Style/Device'

export const Background = styled.div `
    min-height: 100vh;
    position: relative;
    background-image: url('/images/signin.jpg');
    background-size: cover;
    padding: 150px 0 100px;
`

export const Title = styled.h1 `
    margin: 0;
    padding: 50px 0;
    text-transform: uppercase;
    color: ${altColor};
    font-size: 40px;
    text-shadow: 1px 1px 1px #000;
    letter-spacing: 2px;
    text-align: center;

    @media ${device.tablet}{
        font-size: 26px;
    }

    @media ${device.mobileL}{
        padding: 20px 0;
        font-size: 15px;
    }
`

export const Content = styled.div `
    padding: 1em 4em;
    background: rgba(0, 0, 0, 0.4);
    margin: 0 auto;
    box-shadow: 12px 12px rgba(0, 0, 0, 0.6);
    width: 80%;

    @media ${device.tablet}{
        padding: 1em 1em;
    }
`

export const FormContent = styled.div `
    display: flex;
    justify-content: space-between;

    @media ${device.tablet}{
        flex-direction: column;
    }
`

export const Left = styled.div `
    flex-basis: 48%;
`

export const Right = styled.div `
    flex-basis: 48%;
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
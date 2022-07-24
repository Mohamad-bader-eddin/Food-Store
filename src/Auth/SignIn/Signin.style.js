import styled from 'styled-components'
import { altColor, labelColor, mainColor, mainTransition } from '../../Style/Variable'
import { device } from '../../Style/Device'
import { Link } from 'react-router-dom'

export const Background = styled.div `
    min-height: 100vh;
    position: relative;
    background-image: url('/images/signin.jpg');
    background-size: cover;
    padding: 130px 0 20px;
`

export const Content = styled.div `
    padding: 3em 4em;
    background: rgba(0, 0, 0, 0.4);
    margin: 0 auto;
    box-shadow: 12px 12px rgba(0, 0, 0, 0.6);
    width: 55%;

    @media ${device.tablet}{
        padding: 3em 1em;
        width: 80%;
    }
`

export const Title = styled.h1 `
    margin: 0;
    padding: 20px 0;
    text-transform: uppercase;
    color: ${altColor};
    font-size: 3.5em;
    text-shadow: 1px 1px 1px #000;
    letter-spacing: 2px;
    text-align: center;

    @media ${device.tablet}{
        font-size: 2.5em;
    }
`

export const Button = styled.button `
    width: 100%;
    color: white;
    background-color: ${labelColor};
    border: 1px solid ${labelColor};
    border-radius: 10px;
    padding: 10px;
    font-weight: bold;
    text-transform: uppercase;
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

export const Choice = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;

    @media ${device.tablet} {
        align-items: flex-start;
        flex-direction: column;

    }
`

export const Checkbox = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & input{
        width: 20px;
        height: 20px;
    }

    & label{
        color: white;
        font-size: 14px;
    }

    & input + label{
        margin-left: 10px;
    }

    @media ${device.tablet}{
        margin: 10px 0;
    }
`

export const Account = styled.div `
    color: white;
    margin: 20px 0;
`

export const Here = styled(Link)
`
    color: ${mainColor};
    text-decoration: underline;
`
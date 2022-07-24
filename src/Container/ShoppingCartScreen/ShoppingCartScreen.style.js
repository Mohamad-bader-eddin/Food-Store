import styled from 'styled-components'
import { device } from '../../Style/Device'
import { altColor, mainColor, mainPaddingBottom, mainPaddingTop, mainTransition } from '../../Style/Variable'

export const ShoppingCart = styled.div `
    padding-top: ${mainPaddingTop};
    padding-bottom: ${mainPaddingBottom};
    background-image: url('/images/bg.png');
    background-size: cover;
`

export const Box = styled.div `
    padding: 10px;
    margin: 20px 0;
    min-height: 234px;
    background-color: #eee;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgb(0 0 0 / 10%);

    & h2{
        text-transform: uppercase;
        flex-basis: 25%;
    }

    @media ${device.tablet}{
        flex-direction: column;

        & h2{
            font-size: 34px;
            margin: 20px 0;
        }
    }
`

export const Image = styled.div `
    flex-basis: 25%;

    & img{
        max-width: 100%;
        border-radius: 10px;
    }

    @media ${device.tablet}{
        text-align: center;
        & img{
            max-width: 50%;
        }
    }
`

export const Count = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

    & h3{
        padding: 10px;
    }

    & h3 span{
        color: ${mainColor};
    }

    & button{
        padding: 4px 12px;
        margin: 0 5px;
        width: 30px;
        border: none;
        background-color: #008cff;
        color: white;
        border-radius: 6px;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    @media ${device.tablet}{
        margin-bottom: 20px;
        & h3{
            margin: 0;
            font-size: 22px;
        }   

        & button{
            padding: 10p;
            width: 40px;
        }
    }
`

export const Remove = styled.button `
    padding: 10px 20px;
    background-color: #ee2c20;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
`

export const Total = styled.div `
    padding: 20px;
    margin: 20px 0;
    background-color: #00000073;
    border: 2px solid ${altColor};
    border-radius: 10px;
    box-shadow: 0 2px 15px rgb(0 0 0 / 10%);
`

export const SummaryBox = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${device.laptop}{
        flex-direction: column;
    }
`

export const Coupon = styled.div `
    flex-basis: 50%;

    & label{
        padding: 10px 20px;
        color: white;
        background-color: ${mainColor};
        border-radius: 6px;
        text-align: center;
    }

    & input{
        padding: 10px;
        border-radius: 6px;
        border: none;
        margin: 0 10px;
        background-color: #ffffff36;
        color: white;
        caret-color: ${mainColor};
    }

    & input:focus{
        outline: none;
    }

    @media ${device.laptop}{
        margin: 20px 0;
        width: 65%;
    }

    @media ${device.tablet}{
        & label{
            display: block;
            margin: 20px auto;
            width: 40%;
        }

        & input {
            display: block;
            width: 100%;
            margin: 0;
        }
    }

    @media ${device.mobileL}{
        & label{
            width: 100%;
        }
    }
`

export const Button = styled.button `
        padding: 10px;
        background-color: transparent;
        color: ${props => props.typebtn === 'applay' ? '#00abfa' : '#ff493d' };
        border: 2px solid ${props => props.typebtn === 'applay' ? '#00abfa' : '#ff493d' };;
        border-radius: 6px;
        cursor: pointer;

        &:hover{
            background-color: ${props => props.typebtn === 'applay' ? '#00abfa' : '#ff493d' };;
            color: white;
        }

        @media ${device.tablet}{
            display: block;
            margin: 20px auto;
            width: 100%;
        }
`

export const Summary = styled.div `
    flex-basis: 50%;
    padding: 10px;
    border: 2px solid #777;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & h3{
        color: ${altColor};
    }

    @media ${device.laptop}{
        margin: 20px 0;
        width: 100%;
    }
`

export const SummaryButton = styled.button `
    display: block;
    margin: 20px auto;
    padding: 15px 30px;
    background-color: transparent;
    color: ${altColor};
    border: 2px solid ${altColor};
    font-size: 24px;
    font-weight: bold;
    border-radius: 20px;
    text-align: center;
    width: 50%;
    cursor: pointer;
    transition: ${mainTransition};

    &:hover{
        color: ${mainColor};
        border-color: ${mainColor};
    }

    @media ${device.tablet}{
        width: 100%;
    }
`
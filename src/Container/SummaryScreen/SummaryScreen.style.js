import styled from 'styled-components'
import { device } from '../../Style/Device'
import { altColor, mainColor, mainPaddingBottom, mainPaddingTop, mainTransition } from '../../Style/Variable'

export const Summary = styled.div `
    padding-top: ${mainPaddingTop};
    padding-bottom: ${mainPaddingBottom};
    background-image: url('/images/bg.png');
    background-size: cover;
`

export const Background = styled.div `
    padding: 20px;
    background: rgba(255, 255, 255, 0.1);
    margin: 0 auto;
    box-shadow: 12px 12px rgba(0, 0, 0, 0.6);
    width: 80%;
    border: 2px solid ${altColor};
    border-radius: 6px;

    @media  ${device.tablet}{
        width: 90%;
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
    }
`

export const Item = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;

    & h3{
        font-size: 20px;
        color: ${altColor};
    }

    & h5{
        font-size: 16px;
        color: white;
    }

    & span{
        font-size: 20px;
        color: ${mainColor};
    }
`

export const Button = styled.button `
    display: block;
    margin: 20px auto;
    padding: 15px 30px;
    background-color: transparent;
    color: ${altColor};
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
        color: #545454;
    }

    &:disabled , &:hover:disabled{
        background-color: transparent;
        color: #dcca8780;
        cursor: inherit;
    }

    @media ${device.tablet}{
        width: 90%;
    }
`
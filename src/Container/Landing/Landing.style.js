import styled from 'styled-components'
import { mainColor, mainPaddingBottom, mainPaddingTop, mainTransition } from '../../Style/Variable'
import { device } from '../../Style/Device'


export const Landings = styled.div `
    min-height: 100vh;
    background-color: #1f2021;
    background-image: url('/images/landing.jpg');
    background-size: cover;
    position: relative;
    padding-top: ${mainPaddingTop};
    padding-bottom: ${mainPaddingBottom};
    text-align: center;
`

export const Slide = styled.li `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    display: block;
    color: white;
    opacity: 0;
    transition: ${mainTransition};


    &.active{
        opacity: 1;
    }

    @media ${device.tablet}{
        width: 98%;
    }
`

export const SlideInfo = styled.div `

    & h3{
        font-size: 40px;
        letter-spacing: ${props => props.language === 'en' ? '12px' : ''};
        font-weight: bold;
        text-transform: uppercase;
    }

    & h3 span{
        color: ${mainColor};
    }

    & h4{
        font-size: 30px;
        letter-spacing: ${props => props.language === 'en' ? '12px' : ''};
        border: 1px solid white;
        border-left: none;
        border-right: none;
        padding: 10px;
    }

    & p{
        font-size: 20px;
        letter-spacing: ${props => props.language === 'en' ? '7px' : ''};
    }

    @media ${device.laptop}{
        & h3{
            font-size: 32px;
            letter-spacing: ${props => props.language === 'en' ? '6px' : ''};
        }

        & h4{
            font-size: 22px;
            letter-spacing: ${props => props.language === 'en' ? '6px' : ''};
        }

        & p{
            font-size: 16px;
            letter-spacing: ${props => props.language === 'en' ? '3px' : ''};
        }
    }

    @media ${device.tablet}{
        & h3{
            font-size: 24px;
            letter-spacing: 0;
        }

        & h4{
            font-size: 18px;
            letter-spacing: 0;
        }

        & p{
            font-size: 14px;
            letter-spacing: 0;
        }
    }
`

export const Bullets = styled.ul `
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    bottom: 18%;

    & li{
        width: 20px;
        height: 20px;
        background-color : white;
        border: 6px solid rgba(0, 0, 0, 0.91);
        border-radius: 50%;
        margin-right: 10px;
        cursor: pointer;
        transition: ${mainTransition};
    }

    & li.active{
        background-color: ${mainColor};
    }
`
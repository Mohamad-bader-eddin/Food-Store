import styled from 'styled-components'
import { mainColor, mainPaddingBottom, mainPaddingTop } from '../../Style/Variable'
import { device } from '../../Style/Device'

export const Event = styled.div `
    padding-top: ${mainPaddingTop};
    padding-bottom: ${mainPaddingBottom};
    background-image: url('/images/event.jpg');
    background-size: cover;


    & h4{
        text-align: center;
        color: white;
        text-transform: uppercase;
        letter-spacing: ${props => props.language === 'en' ? '3px' : ''};
        font-size: 24px;
        margin-bottom: 30px;
    }

    & h3{
        text-align: center;
        color: white;
        text-transform: uppercase;
        letter-spacing: ${props => props.language === 'en' ? '3px' : ''};
        font-size: 30px;
        margin-bottom: 100px;
    }

    & h3 span{
        color: ${mainColor};
    }
`

export const Time = styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    gap: 15px;
`

export const Unit = styled.div `
    padding: 30px;
    
    & span:first-child{
        display: inline-block;
        font-size: 5em;
        line-height: 0;
        font-weight: 100;
        color: #fff;
    }

    & span:last-child{
        display: inline-block;
        font-size: 18px;
        font-weight: 500;
        margin-left: 8px;
        text-transform: uppercase;
        color: #fff;
    }

    @media ${device.laptop}{
        padding: 18px;

        & span:first-child{
            font-size: 4em;
        }

        & span:last-child{
            font-size: 14px;
        }
    }

    @media ${device.tablet}{

        & span:first-child{
            font-size: 4em;
        }
    }
`
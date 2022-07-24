import styled from 'styled-components'
import { mainColor, mainPaddingBottom, mainPaddingTop, mainTransition, sectionBackground } from '../../Style/Variable'
import { device } from '../../Style/Device'

export const Services = styled.div `
    padding-top: ${mainPaddingTop};
    padding-bottom: ${mainPaddingBottom};
    background-image: url('/images/service.jpg');
    background-size: cover;
    text-align: center;
`

export const Content = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Icon = styled.div `
    width: 120px;
    height: 120px;
    line-height: 180px;
    border-radius: 50%;
    text-align: center;
    background-color: ${sectionBackground};
    margin: auto;
    position: relative;
    transition: ${mainTransition};

    &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius : 50%;
        top: -8px;
        left: -8px;
        padding: 8px;
        opacity: 0;
        box-shadow: 4px 4px white;
        transform: rotate(-90deg);
        transition: ${mainTransition};
    }

    &:hover{
        background-color: ${mainColor};
    }

    &:hover::after{
        opacity: 1;
        transform: rotate(0deg);
    }

    @media ${device.mobileL}{
        width: 90px;
        height: 90px;
        line-height: 145px;
    }
`

export const H4 = styled.h4 `
    color: #fff;
    text-transform: uppercase;
    margin-top: 20px;
    font-size: 24px;
    letter-spacing: ${props => props.language === 'en' ? '2px' : ''};

    @media ${device.mobileL}{
        font-size: 18px;
    }
`
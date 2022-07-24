import styled from 'styled-components'
import { altColor, mainColor, mainPaddingBottom, mainPaddingTop, mainTransition } from '../../Style/Variable'
import { Container as styledContainer } from '../../Style/Container'
import { device } from '../../Style/Device'

export const Chef = styled.div `
    padding-top: ${mainPaddingTop};
    padding-bottom: ${mainPaddingBottom};
    background: url('/images/bg.png');
    background-size: cover;
`

export const Container = styled(styledContainer)
`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 40px;
    overflow: hidden;

    @media ${device.mobileL}{
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 40px;
    }
`

export const Team = styled.div `
    padding: 5px;
    background-color: ${altColor};
    box-shadow: 0px 12px 20px 0px rgb(0 0 0 / 13%), 0px 2px 4px 0px rgb(0 0 0 / 12%);
    position: relative;
    border-radius: 5px;
    overflow: hidden;

    & img{
        width: 100%;
        height: 100%;
    }

    &::before , &::after{
        content: '';
        position: absolute;
        top : 50%;
        left : 25%;
        height: 2px;
        width: 40%;
        background-color: white;
        opacity: 0;
        z-index: 2;
        transition: ${mainTransition};
    }

    &::before{
        transform: rotate3d( 0 , 0 , 1 , 90deg);
    }

    &:hover::before{
        opacity: 1;
        transform: rotate3d( 0 , 0 , 1 , 180deg);
    }

    &:hover::after{
        opacity: 1;
        transform: rotate3d( 0 , 0 , 1 , 90deg);
    }


    & h4{
        position: absolute;
        top : 50%;
        left : 50%;
        transform: translate(-50% , -100%);
        padding: 10px 15px;
        font-size: 28px;
        background-color: rgba(0 , 0 , 0 , 0.6);
        color: ${mainColor};
        opacity: 1;
        transition: ${mainTransition};
    }

    &:hover h4{
        opacity: 0;
    }

    & .twitter{
        position: absolute;
        top : 30%;
        left : 30%;
        transform: translate(-50% , -30%);
        color: #1da1f2;
        font-size: 35px;
        opacity: 0;
        cursor: pointer;
        transition: ${mainTransition};
    }

    & .facebook{
        position: absolute;
        top : 30%;
        left : 60%;
        transform: translate(-50% , -30%);
        font-size: 35px;
        color: #1877f2;
        opacity: 0;
        cursor: pointer;
        transition: ${mainTransition};
    }

    & .instagram{
        position: absolute;
        top : 60%;
        left : 30%;
        transform: translate(-50% , 30%);
        font-size: 35px;
        color: #c13584;
        opacity: 0;
        cursor: pointer;
        transition: ${mainTransition};
    }

    & .youtube{
        position: absolute;
        top : 60%;
        left : 60%;
        transform: translate(-50% , 30%);
        font-size: 35px;
        color: #ff0000;
        opacity: 0;
        cursor: pointer;
        transition: ${mainTransition};
    }

    &:hover .twitter , &:hover .facebook
    , &:hover .youtube , &:hover .instagram{
        opacity: 1;
    }

    & .twitter:hover , & .facebook:hover ,
    & .instagram:hover , & .youtube:hover{
        color: #aab8c2;
    }

    @media ${device.tablet}{
        & h4{
            font-size: 20px;
        }
    }

    @media ${device.mobileL}{
        & h4{
            font-size: 16px;
            padding: 10px;
        }
    }
`

export const Overlay = styled.div `
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.7);

    ${Team}:hover &{
        width: 100%;
        height: 100%;
    }
`
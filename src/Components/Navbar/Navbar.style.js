import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { altColor, mainColor, mainTransition } from '../../Style/Variable'
import { device } from '../../Style/Device'

export const Header = styled.header `
    position: absolute;
    width: 100%;
    z-index: 2;
    left: 0;
`

export const Container = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0,0,0,0.5);
    position: relative;

    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
        background-color: white;
        width: 100%
    }
`

export const Logo = styled(NavLink)
`
    color: white;
    font-size: 40px;
    font-weight: bold;
    padding: 20px;

    & span{
        color: ${mainColor};
    }

    @media ${device.tablet}{
        font-size: 20px;
    }
`

export const Nav = styled.nav `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
`

export const Links = styled.ul `
    display: flex;
    align-items: center;

    @media ${device.laptop}{
        display: ${(props) => props.clicked === 'clicked' ? 'flex' : 'none'};
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        text-align: center;
        background-color: rgba(0, 0 , 0 , 0.7);
    }
`

export const Li = styled.li `
    @media ${device.laptop}{
        width: 100%;
    }
`

export const LinksItem = styled(NavLink)
`
    display: block;
    padding: 30px 20px;
    color: white;
    font-size: 18px;
    position: relative;
    z-index: 5;
    transition: ${mainTransition};

    &::before{
        content: '';
        left: 50%;
        transform: translateX(-50%);
        height: 3px;
        bottom: 0px;
        background-color: ${mainColor};
        position: absolute;
        width: 0;
        transition: ${mainTransition};
    }

    &:hover , &.active{
        color: ${mainColor};
    }

    &:hover::before , &.active::before{
        width: 100%;
    }
    
`

export const Cart = styled.span `
    position: relative;

    &::after{
        content: attr(data-count);
        content: attr(data-count);
        position: absolute;
        width: fit-content;
        color: #ff8c00;
        bottom: -14px;
        right: -14px;
    }
`

export const SignIn = styled(Link)
`
    display: block;
    padding: 5px 20px;
    margin: 0 20px;
    color: white;
    background-color: transparent;
    font-size: 18px;
    border: 1px solid white;
    z-index: 2;
    cursor: pointer;
    transition: ${mainTransition};

    &:hover{
        background-color: ${mainColor};
    }

    @media ${device.laptop}{
        border: none;
        padding: 30px 40px;
    }
`

export const Language = styled.button `
        border: none;
        background: transparent;
        padding: 30px 20px;
        color: white;
        font-size: 25px;
        cursor: pointer;
        position: relative;

        & ul{
            margin: 0px;
            padding: 0px;
            background-color: rgba(0,0,0,0.7);
            position: absolute;
            right: 50%;
            transform: translateX(50%);
            min-width: 200px;
            top: calc(100% + 15px);
            display: ${props => props.clicked === 'clicked' ? 'block' : 'none'};
            z-index: 3;
        }

        & ul::before {
            content: "";
            border-width: 10px;
            border-style: solid;
            border-color: transparent transparent rgba(0,0,0,0.7) transparent;
            position: absolute;
            right: 50%;
            transform: translateX(50%);
            top: -20px;
        }

        & ul li{
            display: flex;
            padding: 15px;
            color: white;
            justify-content: space-between;
        }

        & ul li:hover{
            background-color: ${altColor};
        }

        & ul li span{
            margin-right: 10px;
        }

        & .icon{
            color: ${props => props.clicked === 'clicked' ? mainColor : 'white'};
            transition: ${mainTransition};
        }

        & .icon:hover{
            color: ${mainColor};
        }

        @media ${device.tablet}{
            font-size: 20px;
            padding: 0 10px;
        }

        @media ${device.laptop}{
        padding: 30px 40px;
    }
`

export const ToggleMenu = styled.span `
    display: none;
    color: white;
    font-size: 25px;
    padding: 0 10px;

    @media ${device.laptop} {
        display: block;
        
        &:hover{
            color: ${mainColor};
        }
    }
`

export const UserLogin = styled.div `
    display: flex;
    align-items: center;
    color: white;
    margin-left: 20px;

    @media ${device.laptop}{
        justify-content: space-around;
    }
`

export const Logout = styled.button `
    display: block;
    padding: 5px 20px;
    margin: 0 20px;
    color: white;
    background-color: transparent;
    font-size: 18px;
    border: 1px solid white;
    z-index: 2;
    cursor: pointer;
    transition: ${mainTransition};

    &:hover{
        background-color: ${mainColor};
    }

    @media ${device.laptop}{
        border: none;
        margin: 0;
    }
`
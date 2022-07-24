import styled from 'styled-components'
import { altColor, mainTransition } from '../../Style/Variable'


export const Title = styled.h1 `
    text-align: center;
    font-weight: normal;
    font-size: 40px;
    position: relative;
    margin-bottom: 70px;
    text-transform: uppercase;
    color: ${altColor};
    transition: ${mainTransition};

    &::before{
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        height: 2px;
        background-color: ${altColor};
        bottom: -30px;
        width: 120px;
    }

    &::after{
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: 2px solid ${altColor};
        bottom: -38px;
        background-color: white;
    }
`
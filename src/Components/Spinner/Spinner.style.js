import styled from "styled-components";
import { keyframes } from "styled-components";
import { mainColor } from "../../Style/Variable";

const spin = keyframes `
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`

export const Div = styled.div `
    width: 100px;
    height: 100px;
    background-color: rgb(223, 210, 210);
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -50px;
    margin-left: -50px;
    animation-name:${spin};
    animation-duration: 1s;
    border-radius: 50%;
    border: 5px solid ${mainColor};
    border-left-color: transparent;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`
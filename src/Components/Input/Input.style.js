import styled from 'styled-components'
import { altColor, labelColor, mainColor } from '../../Style/Variable'
import { device } from '../../Style/Device'

export const FormControl = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 25px;
    position: relative;

    & input , & select ,& textarea{
        padding: 10px 20px;
        background-color: rgba(0,0,0,0.6);
        border-radius: 10px;
        border: none;
        color: white;
        caret-color: ${mainColor};
        width: 100%;
    }

    & input:focus{
        outline: none;
        border: 1px solid ${altColor};
    }

    & textarea{
        resize: none;
        height: 100px;
    }

    & textarea:focus{
        outline: none;
        border: 1px solid ${altColor};
    }

    @media ${device.tablet}{
        & input{
            padding: 10px;
        }
    }
`

export const Label = styled.label `
    color: white;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 10px;
    margin: 0 0 8px 0;
    background-color: ${labelColor};
    text-align: center;

    @media ${device.tablet}{
        padding: 5px 10px;
    }
`
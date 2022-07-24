import styled from 'styled-components'

export const InputWrapper = styled.label `
    position: relative;
`

export const Input = styled.input `
    display: none;

    &:checked + span{
        background-color: #1890ff;

        &::before{
            left: calc(100% - 2px);
            transform: translateX(-100%);
        }
    }

    &:focus + span{
        box-shadow: 0 0 0 2px rgb(0,0,0,0.1);
    }

    &:focus:checked + span{
        box-shadow: 0 0 0 2px rgb(24,144,255,0.1);
    }
`

export const Slider = styled.span `
    display: flex;
    cursor: pointer;
    width: 50px;
    height: 25px;
    border-radius: 100px;
    background-color: #bfbfbf;
    position: relative;
    transition: background-color 0.5s;

    &::before{
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 21px;
        height: 21px;
        border-radius: 21px;
        transition: 0.5s;
        background-color: white;
        box-shadow: 0 2px 4px 0 rgba(0 , 35 , 11 , 0.2);
    }

    &:active::before{
        width: 28px;
    }
`
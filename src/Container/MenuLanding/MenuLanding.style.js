import styled from 'styled-components'

export const Menu = styled.div `
    height: 100vh;
    background-image: url('/images/menuLanding.jpg');
    background-size: cover;
    background-position: center;
    position: relative;

    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: rgba(0,0,0,0.5);
    }
`
import styled from 'styled-components'
import { device } from '../../Style/Device'


export const Tippy = styled.div `
    position: absolute;
    background: #8f1313;
    top: 15px;
    left: ${props => props.language === 'en' ? '82%' : '18%'};
    transform: translateX(-50%);
    padding: 2px 10px;
    z-index: 3;
    color: white;

    &::before{
        content: '';
        position: absolute;
        border-width: 10px;
        border-style: solid;
        border-color: #8f1313 transparent transparent transparent;
        bottom: -20px;
        left: 50px;
    }

    @media ${device.tablet}{
        top: 5px;
    }
`
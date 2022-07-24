import styled from 'styled-components'
import { mainColor, mainPaddingTop } from '../../Style/Variable'
import { Container as styledContainer } from '../../Style/Container'
import { device } from '../../Style/Device'


export const Footers = styled.div `
    padding-top: ${mainPaddingTop};
    background-color: #191919;
`

export const Container = styled(styledContainer)
`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 40px;

    @media ${device.mobileS}{
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
`

export const Title = styled.h4 `
        color: white;
        padding: 10px;
        font-weight: 700;
        font-size: 24px;
        text-transform: uppercase;

        & span{
        color : ${mainColor}
    }

    @media ${device.mobileL}{
        text-align: center;
    }
`

export const Contact = styled.div `
    & p{
        color: #EEE;
        line-height: 1.7;
        margin-bottom: 27px;
    }

    & li{
        color: white;
        font-size: 16px;
        margin-bottom: 8px;
    }

    @media ${device.mobileL}{
        & p , & li{
            text-align: center;
        }
    }
`

export const Openning = styled.div `
    color: white;
    & li{
        display: block;
        margin-bottom: 10px;
    }

    & li div{
        float: ${props => props.language === 'en' ? 'right' : 'left'};
    }
`

export const Gallery = styled.div `
    & img{
        width: 100px;
        margin: 1px;
    }

    @media ${device.mobileL}{
        text-align: center;
    }
`

export const Copyright = styled.p `
    padding: 25px 0;
    text-align: center;
    color: white;
    margin: 10px 0 0;
    border-top: 1px solid #444;

    & span{
        color: ${mainColor};
    }
`
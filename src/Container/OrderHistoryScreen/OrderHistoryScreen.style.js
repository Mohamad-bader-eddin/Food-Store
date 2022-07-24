import styled from "styled-components";
import { device } from "../../Style/Device";
import { altColor, mainColor, mainPaddingBottom, mainPaddingTop } from "../../Style/Variable";

export const OrderHistory = styled.div `
    padding-top: ${mainPaddingTop};
    padding-bottom: ${mainPaddingBottom};
    background-image: url('/images/bg.png');
    background-size: cover;
    position: relative;
`

export const Table = styled.table `
    width: 90%;
    border-collapse: collapse;
    margin: 0 auto;

    & th{
        padding-top: 12px;
        padding-bottom: 12px;
        background-color: transparent;
        color: ${altColor};
        text-transform: uppercase;
        font-weight: bold;
    }

    & td{
        color: white;
        padding: 8px;
    }

    & td , & th{
        border: 1px solid #ddd;
        text-align: center;

        @media ${device.mobileS}{
            font-size: 12px;
        }
    }

    & td:last-child{
        color: ${mainColor};
        cursor: pointer;
    }
`

export const Pagination = styled.div `
    margin: 20px auto;
    background-color: transparent;
    color: ${mainColor};
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & button{
        margin: 0 5px;
        border: none;
        color: ${mainColor};
        padding: 10px;
        background-color: transparent;
        cursor: pointer;
    }

    & button:disabled{
        color: #ff8c006b;
        cursor: inherit;
    }

    @media ${device.mobileL}{
        width: 85%;
    }
`
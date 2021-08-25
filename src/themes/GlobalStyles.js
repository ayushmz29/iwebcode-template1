import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        background: #F5F5F5;
        margin: 0;
        padding: 0;
        font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
    }
`;

export const StyledHeading = styled.p`
    font-family: Neue Haas Grotesk Display Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 45.0633px;
    line-height: 52px;
    color: #000000;
`;

export const HorizontalLine = styled.div`
    display: block;
    width: ${({ width }) => width || "auto"};
    height: 2px;
    background-color: #000000;
`;

export default GlobalStyle;

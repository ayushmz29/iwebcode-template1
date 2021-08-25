import styled from "styled-components";

export const MainWrapper = styled.section`
    /* display: flex; */
    /* flex-direction: column; */
    /* position: relative; */
    height: 500px;
    margin: 0px 78px;
    margin-top: 100px;

    .content-para {
        width: 514px;
        margin-top: 50px;
        font-family: Neue Haas Grotesk Display Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 34px;

        color: #000000;
    }

    .yt-snap {
        height: auto;
        width: auto;
        max-width: 150%;
        max-height: 90%;
        margin-top: 50px;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
`;

export const StyledLink = styled.a`
    /* position: absolute; */
    width: 592px;
    height: 31px;
    /* left: 80px; */
    /* top: 2424px; */

    font-family: Neue Haas Grotesk Display Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 34px;
    text-decoration-line: underline;
    cursor: pointer;
    color: #000000;
`;

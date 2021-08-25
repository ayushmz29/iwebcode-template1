import styled from "styled-components";

export const IntroWrapper = styled.section`
    width: auto;
    height: 600px;
    left: 0px;
    top: 0px;
    margin: 80px 50px;
    background: #f5f5f5;

    display: flex;
    /* flex-wrap: wrap; */
    justify-content: flex-start;
    align-items: center;

    /* position: relative; */

    .intro-para {
        position: absolute;
        width: 40%;
        height: 600px;
        left: 79px;
        /* margin: 0 110px; */
        margin-left: 150px;
        /* top: 279px; */

        font-family: Neue Haas Grotesk Display Pro;
        font-style: normal;
        font-weight: normal;
        /* font-size: 5rem; */
        font-size: 70px;
        word-spacing: 5px;
        font-weight: 500;
        line-height: 79px;

        z-index: 5;
        background-color: transparent;
        color: #282828;
    }

    .intro-photo {
        /* position: absolute;
        width: 606px;
        height: 564px;
        left: 701px;
        
        background: #c4c4c4; */
        /* top: 197px; */
        position: absolute;
        left: 850px;
        top: 160px;
        width: auto;
        height: 700px;
    }

    @media (max-width: 1267px) {
        margin-bottom: 805px;

        .intro-photo {
            /* display: static; */
            top: 165px;
            left: 380px;
        }
    }
`;

import styled from "styled-components";

export const MainWrapper = styled.section`
    height: 500px;
    margin: 0px 78px;
    margin-top: 150px;

    @media (max-width: 1267px) {
        margin-top: 400px;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;

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

    .right-div {
        /* margin-right: 50px; */
        margin-top: 50px;
        height: 300px;
        width: 700px;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .right-div_para {
        font-family: Neue Haas Grotesk Display Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        padding: 0px 20px;
        margin-top: 5px;
        /* line-height: 23px; */

        color: #000000;
    }
    .right-div_heading {
        font-family: Neue Haas Grotesk Display Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 34px;

        color: #000000;
    }
`;

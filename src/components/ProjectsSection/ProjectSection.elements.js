import styled from "styled-components";

export const ProjectWrapper = styled.section`
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 5px 78px;
`;

export const ExampleWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    /* padding-right: 25px; */

    .add-btn{
        border: none;
        cursor: pointer;
        height:80px;
        /* position: relative;
        top : 300px; */
    }
`;

export const Image = styled.img``;

export const ExampleBlock = styled.div`
    margin: 5px 5px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

export const ExampleHeading = styled.p`
    font-family: Neue Haas Grotesk Display Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 34px;

    color: #000000;
`;

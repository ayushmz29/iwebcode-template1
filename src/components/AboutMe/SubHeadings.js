import React from "react";
import styled from "styled-components";

const SubHeadingContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    border-bottom: 3px solid black;

    .heading-number {
        height: 30px;
        width: 36px;
        padding-bottom: 35px;
        padding-left: 11px;
        font-family: Neue Haas Grotesk Display Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        color: #000000;

        border: 1px solid black;
        border-radius: 50%;
    }

    .sub-heading {
        font-family: Neue Haas Grotesk Display Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 64px;

        color: #000000;
    }
`;

const SubHeadings = ({ number, text }) => {
    return (
        <>
            <SubHeadingContainer>
                <p className="heading-number">{number}</p>
                <p className="sub-heading">{text}</p>
            </SubHeadingContainer>
        </>
    );
};

export default SubHeadings;

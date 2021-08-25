import React from "react";
import styled from "styled-components";
import arrowLink from "../../assets/Contact/arrowLink.png";


const StyledDiv = styled.div`
    width: 288px;
    height: 186px;
    margin: 40px 60px;

    p {
        font-family: Neue Haas Grotesk Display Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 150%;
        /* or 30px */

        text-align: justify;
    }
`;
const StyledLink = styled.a`
    /* position: absolute; */
    width: 592px;
    height: 31px;
    /* left: 80px; */
    /* top: 2424px; */

    font-family: Neue Haas Grotesk Display Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 34px;
    text-decoration-line: underline;
    cursor: pointer;
    color: #000000;
`;
const Blog = ({ text }) => {
    return (
        <StyledDiv>
            <p>{text}</p>
            <br />
            <p>24.09.21</p>
            <StyledLink >See Now</StyledLink>
            <img src={arrowLink} alt="arrow" />
        </StyledDiv>
    );
};

export default Blog;

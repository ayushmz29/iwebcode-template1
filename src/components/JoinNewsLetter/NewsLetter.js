import React from "react";
import styled from "styled-components";
import { StyledHeading } from "../../themes/GlobalStyles";
import arrowLink from "../../assets/Contact/arrowLink.png";

const MainWrapper = styled.section`
    height: 360px;
    margin: 0px 78px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .para {
        font-family: Neue Haas Grotesk Display Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 150%;
        /* or 30px */

        display: flex;
        align-items: center;
        text-align: center;

        color: #000000;
    }

    .email-input {
        width: 256px;
        height: 45px;
        padding: 0px 10px;
        margin-top: 40px;
        margin-right: 10px;
        font-size: 20px;
        border: 2px solid #4e4e4e;
        box-sizing: border-box;
        caret-color: black;

        ::placeholder {
            font-family: Neue Haas Grotesk Display Pro;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            /* line-height: 23px; */
            color: #9f9f9f;
            /* color: red; */
        }
    }

    .para2 {
        font-family: Neue Haas Grotesk Display Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;


        display: flex;
        align-items: center;
        text-align: center;

        margin-top: 20px;

        /* cool-gray/500 */

        color: #6b7280;
    }
`;

const NewsLetter = () => {
    return (
        <MainWrapper>
            <StyledHeading>Join the Newsletter !</StyledHeading>
            <p className="para">
                You’ll receive an email every once in a while about new
                products, courses, and videos!
            </p>
            <input
                type="text"
                className="email-input"
                placeholder="name@example.com"
            />
            <br />
            <img src={arrowLink} alt="arrow" />
            <p className="para2">
                We’ll never share your details. See our Privacy Policy
            </p>
        </MainWrapper>
    );
};

export default NewsLetter;

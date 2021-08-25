import React from "react";
import styled from "styled-components";
import { StyledHeading, HorizontalLine } from "../../themes/GlobalStyles";
import arrowLeft from "../../assets/Client/arrow-left.png"
import arrowRight from "../../assets/Client/arrow-right.png"

const MainWrapper = styled.section`
    height: 500px;
    margin: 0px 78px;
    margin-top: 100px;
    @media (max-width: 1370px) {
        margin-top: 550px;
    }
    @media (max-width: 600px) {
        margin-top: 720px;
    }
    @media (max-width: 510px) {
        margin-top: 920px;
    }
    @media (max-width: 452px) {
        margin-top: 956px;
    }
    @media (max-width: 305px) {
        margin-top: 2100px;
    }
    

    .content-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 150px 0;
    }

    .para-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 823px;
        margin: 0 80px;
    }
    .para-wrapper p {
        font-family: Neue Haas Grotesk Display Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 30.06px;
        line-height: 34px;
        text-align: center;

        color: #000000;
    }

    .arrow-btn {
        cursor: pointer;
    }    
`;

const ClientReviews = () => {
    return (
        <MainWrapper>
            <StyledHeading>What Clients Say</StyledHeading>
            <HorizontalLine />

            <div className="content-wrapper">
                <img src={arrowLeft} alt="" className="arrow-btn" />

                <div className="para-wrapper">
                    <p>
                        “I rehired Arnau to do some additional design work for
                        my private label brand. Again, he was creative and
                        efficient in bringing my ideas to fruition. Thanks
                        Arnau”
                    </p>
                    <br />
                    <p> -Ronald Weasley</p>
                    <p>CEO</p>
                </div>
                <img src={arrowRight} alt="" className="arrow-btn" />
            </div>
        </MainWrapper>
    );
};

export default ClientReviews;

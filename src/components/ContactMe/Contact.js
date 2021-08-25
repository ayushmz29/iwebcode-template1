import React from "react";
import styled from "styled-components";
import { StyledHeading, HorizontalLine } from "../../themes/GlobalStyles";

const MainWrapper = styled.section`
    height: 500px;
    margin: 0px 78px;
    margin-top: 50px;

    @media (max-width: 1370px) {
        margin-top: 100px;
    }
    @media (max-width: 700px) {
        margin-top: 380px;
    }
    @media (max-width: 586px) {
        margin-top: 580px;
    }
`;
const ContentWrapper = styled.div`
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
        /* line-height: 34px; */

        color: #000000;
    }

    .right-div {
        margin-top: 50px;
        height: 300px;
        width: 700px;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .form-container label {
        font-family: Neue Haas Grotesk Display Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        /* identical to box height */

        color: #000000;
    }
    .form-container input {
        width: 256px;
        height: 45px;
        padding: 0px 10px;
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

    .form-container textarea {
        padding: 10px 10px;
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

    .form-container button {
        width: 106px;
        height: 39px;

        border: 2px solid #4e4e4e;
        box-sizing: border-box;

        cursor: pointer;
    }
`;
const Contact = () => {
    return (
        <MainWrapper>
            <StyledHeading>Say Hello</StyledHeading>
            <HorizontalLine />

            <ContentWrapper>
                <p className="content-para">
                    Looking to start a new project or just want to say hi? Send
                    me an email and I’ll do my best to reply within 24 hrs!
                </p>

                <div className="right-div">
                    <form className="form-container">
                        <label htmlFor="fname">Name * </label> <br />
                        <input
                            type="text"
                            id="fname"
                            name="fname"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            id="lname"
                            name="lname"
                            placeholder="Last Name"
                        />
                        <br />
                        <br />
                        <label htmlFor="inquiry">Inquiry * </label> <br />
                        <input
                            type="text"
                            id="inquiry"
                            name="inquiry"
                            placeholder="Collab/Client"
                        />
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="hello@arnau.design"
                        />
                        <br />
                        <br />
                        <label htmlFor="message">Message *</label>
                        <br />
                        <textarea
                            name="message"
                            id="message"
                            cols="77"
                            rows="10"
                            placeholder="Hello.."
                        ></textarea>
                        <br />
                        <br />
                        <button
                            type="submit"
                            onClick={(event) => event.preventDefault()}
                        >
                            Send
                        </button>
                    </form>
                </div>
            </ContentWrapper>
        </MainWrapper>
    );
};

export default Contact;

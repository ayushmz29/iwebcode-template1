import React from "react";
import styled from "styled-components";
import navIcon from "../../assets/nav-icon.png";
import fbIcon from "../../assets/Footer/facebook.png";
import twitterIcon from "../../assets/Footer/twitter.png";
import dribbleIcon from "../../assets/Footer/dribbble.png";

const FooterWrapper = styled.footer`
    width: 100%;
    height: 110px;
    left: 0px;
    top: 0px;
    padding: 0 20px;
    background: #f5f5f5;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .social-wrapper img{
        padding: 0 20px;
        cursor: pointer;
    }
`;

const Footer = () => {
    return (
        <>
            <FooterWrapper>
                <img src={navIcon} alt="nav-icon" />
                <div className="social-wrapper">
                    <img src={fbIcon} alt="social" />
                    <img src={twitterIcon} alt="social" />
                    <img src={dribbleIcon} alt="social" />
                </div>
            </FooterWrapper>
        </>
    );
};

export default Footer;

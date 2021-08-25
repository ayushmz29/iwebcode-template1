import React from "react";
import { IntroWrapper } from "./IntroSection.elements.js";
import birdPhoto from "../../assets/bird-picture.png";

const IntroSection = () => {
    return (
        <>
            <IntroWrapper>
                <p className="intro-para">
                    I’m Arnau Ros, a graphic designer & content creator based in
                    Barcelona. Available for freelance & collaborations.{" "}
                </p>
                <img src={birdPhoto} alt="bird" className="intro-photo" />
            </IntroWrapper>
        </>
    );
};

export default IntroSection;

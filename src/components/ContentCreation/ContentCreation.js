import React from "react";
import { StyledHeading, HorizontalLine } from "../../themes/GlobalStyles";
import {
    ContentWrapper,
    MainWrapper,
    StyledLink,
} from "./ContentCreation.elements";
import ytSnap from "../../assets/ContentSection/yt-screenshot.png";
import downArrow from "../../assets/ContentSection/down-arrow.png";

const ContentCreation = () => {
    return (
        <MainWrapper>
            <StyledHeading>Content Creation</StyledHeading>
            <HorizontalLine />
            <ContentWrapper>
                <p className="content-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio sunt nemo laudantium, at laboriosam esse voluptatem
                    nostrum culpa a repellat dolor dicta nisi? Accusantium
                    suscipit illo est ex, totam nam?
                </p>

                <img src={ytSnap} alt="yt-snap" className="yt-snap" />
            </ContentWrapper>
            <StyledLink>Get in contact about a sponsorship </StyledLink>
            <StyledLink>
                <img src={downArrow} alt="link-Icon" />
            </StyledLink>
        </MainWrapper>
    );
};

export default ContentCreation;

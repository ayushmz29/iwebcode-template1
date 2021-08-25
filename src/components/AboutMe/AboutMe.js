import React from "react";
import { StyledHeading, HorizontalLine } from "../../themes/GlobalStyles";
import { ContentWrapper, MainWrapper } from "./AboutMe.elements";
import SubHeadings from "./SubHeadings";

export const AboutMe = () => {
    return (
        <MainWrapper>
            <StyledHeading>About Me</StyledHeading>
            <HorizontalLine />

            <ContentWrapper>
                <p className="content-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Arcu nullam augue dolor libero at in. Egestas in elit vitae
                    tincidunt morbi egestas nec massa. Pretium, placerat quis
                    sem gravida vel quam nisl in semper. Platea enim nunc
                    aliquam volutpat, ut sed morbi. Sit leo aliquam at amet, eu
                    dictumst accumsan eu, quis. Nam ac mattis adipiscing euismod
                    arcu ac laoreet vitae at. Nibh etiam dictumst nibh ut. Vitae
                    massa rhoncus, et massa. Diam fermentum malesuada
                    scelerisque orci massa.
                </p>

                <div className="right-div">
                    <p className="right-div_heading">Your one stop shop for:</p>
                    <SubHeadings number="1" text="Branding/Logo" />
                    <p className="right-div_para">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mi sed pulvinar rutrum tempor. Etiam duis massa
                        elementum, etiam cras tristique. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Mi sed pulvinar
                        rutrum tempor. Etiam duis massa elem Starting at € 2,450
                    </p>
                    <SubHeadings number="2" text="Packaging" />
                    <SubHeadings number="3" text="Websites" />
                </div>
            </ContentWrapper>
        </MainWrapper>
    );
};

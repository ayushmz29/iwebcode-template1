import React from "react";
import styled from "styled-components";
import { StyledHeading } from "../../themes/GlobalStyles";
import Blog from "./Blog";

const MainWrapper = styled.section`
    height: 400px;
    margin: 0px 78px;
    margin-top: 150px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .blog-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Vline = styled.div`
    border-left: 3px solid #000000;
    height: 218px;
`;

const RecentBlogs = () => {
    return (
        <MainWrapper>
            <StyledHeading>Recent Blogs</StyledHeading>
            <div className="blog-container">
                <Blog text="Competition: win a N02 Recycle counter chair by Nendo for Fritz Hansen" />
                <Vline />
                <Blog text="The ULTIMATE Figma UI Kit (Tailwind-Figma)" />
                <Vline />
                <Blog text="The Pros and Cons of a Logo without scaling possibilities. " />
            </div>
        </MainWrapper>
    );
};

export default RecentBlogs;

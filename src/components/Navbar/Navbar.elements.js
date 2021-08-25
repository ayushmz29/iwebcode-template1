import styled from "styled-components";

export const NavBarWrapper = styled.nav`
    width: 100%;
    height: 110px;
    left: 0px;
    top: 0px;
    background: #f5f5f5;

    display: flex;
    justify-content: flex-end;
    align-items:center;

    .nav-icon {
        position: absolute;
        left: 49px;
    }
`;

export const StyledLink = styled.a`
    text-decoration: none;
    margin: 40px 27px;
    color: #000000;
    font-size: 26px;
    &:hover {
        border-bottom: #000000 2px solid;
    }
`;
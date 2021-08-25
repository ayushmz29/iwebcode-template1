import React from "react";
import { NavBarWrapper, StyledLink } from "./Navbar.elements.js";
import navIcon from "../../assets/nav-icon.png";

const Navbar = () => {
    return (
        <>
            <NavBarWrapper>
                <img src={navIcon} alt="nav-icon" className="nav-icon" />
                <StyledLink href="#/">Work</StyledLink>
                <StyledLink href="#/">About</StyledLink>
                <StyledLink href="#/">Contact</StyledLink>
                <StyledLink href="#/">Other</StyledLink>
            </NavBarWrapper>
        </>
    );
};

export default Navbar;

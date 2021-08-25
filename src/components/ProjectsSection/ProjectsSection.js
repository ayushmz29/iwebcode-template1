import React from "react";
import { ProjectWrapper, ExampleWrapper } from "./ProjectSection.elements";
import { StyledHeading, HorizontalLine } from "../../themes/GlobalStyles";
import project1 from "../../assets/Projects/project1.png";
import project2 from "../../assets/Projects/project2.png";
import project3 from "../../assets/Projects/project3.png";
import addButton from "../../assets/Projects/add-button.png";

import Example from "./Example";

const ProjectsSection = () => {
    return (
        <ProjectWrapper>
            <StyledHeading>Projects</StyledHeading>

            <HorizontalLine />

            <ExampleWrapper>
                <Example src={project1} text="01 Example" />
                <Example src={project2} text="02 Example" />
                <Example src={project3} text="03 Example" />
                <button className="add-btn">
                    <img src={addButton} alt="" />
                </button>
            </ExampleWrapper>
        </ProjectWrapper>
    );
};

export default ProjectsSection;

import React from "react";
import { ExampleBlock, Image, ExampleHeading } from "./ProjectSection.elements";

const Example = ({ src, text }) => {
    return (
        <ExampleBlock>
            <ExampleHeading>{text}</ExampleHeading>
            <Image src={src} />
        </ExampleBlock>
    );
};

export default Example;

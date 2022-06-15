import { Image } from "@components/image";
import { TemplateButton, Text } from "@templates/designed/47/styles/design47.styles";
import React from "react";


type IntrodiuceContentTypes = {
    image: string;
    title: string;
    text: string;
    buttonText?: string;
    home?: boolean;
}
const IntroduceContent = ({image, title, text, buttonText, home}: IntrodiuceContentTypes) => {
    return(
        <>
        <Image src={image}/>
        <Text variant="h3" style={{margin:'100px 0'}}>{title}</Text>
        <Text variant="body1">{text}</Text>
        <TemplateButton home>CALL TO ACTION</TemplateButton>
        </>
    )
}

export default IntroduceContent;
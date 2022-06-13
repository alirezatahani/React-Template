import { Image } from "@components/image";
import { Typography } from "@components/typography";
import { TemplateButton, Text } from "@templates/designed/47/styles/design47.styles";
import React from "react";


type IntrodiuseContentTypes = {
    image: string;
    title: string;
    text: string;
    buttonText?: string;
    home?: boolean;
}
const IntroduceContent = ({image, title, text, buttonText, home}: IntrodiuseContentTypes) => {
    return(
        <>
        <Image src={image}/>
        <Text variant="h3" style={{margin:'100px 0'}}>{title}</Text>
        <Text variant="body1">{text}</Text>
        {home?
            <TemplateButton style={{margin:'70px 0'}}>{buttonText}</TemplateButton>
            :
            null
        }
        </>
    )
}

export default IntroduceContent;
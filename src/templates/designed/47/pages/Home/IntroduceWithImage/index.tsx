import { Image } from "@components/image";
import { Typography } from "@components/typography";
import { TemplateButton } from "@templates/designed/47/styles/design47.styles";
import React from "react";

const IntroduceWithImage = () => {
    return(
        <>
        <Image src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixid=MnwyMjUyNTN8MHwxfHNlYXJjaHw3fHxraWRzfGVufDB8fHx8MTYyMTg3Nzc0NQ&ixlib=rb-1.2.1&w=1920&h=1326&crop=faces&fit=crop"/>
        <Typography variant="h3" style={{margin:'100px 0'}}>Introduce your idea</Typography>
        <Typography variant="body1">Use this space to elaborate on your headline and connect with your visitors. You can build on the first idea or add your second point. Now that you've got your visitors' attention, let them know what they can expect, and encourage them to explore your site.</Typography>
        <TemplateButton style={{margin:'70px 0'}}>CALL TO ACTION</TemplateButton>
        </>
    )
}

export default IntroduceWithImage;
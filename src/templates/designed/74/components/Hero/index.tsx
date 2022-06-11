import { Col } from "@components/grid";
import { Space } from "@components/space";
import { Typography } from "@components/typography";
import React from "react";
import { HeroTypes, HomeHeroContainer, TemplateButton } from "../../styles/design74.style";

const Hero: React.FC<HeroTypes> = ({src, title, buttonText, color}: HeroTypes) => {
    return(
        <Col xs={12}>
            <HomeHeroContainer image={src}>
                <div>
                    <Typography variant='h1' style={{color:`${color}`, display:'block'}}>{title}</Typography>
                    <Space align='center'><TemplateButton style={{margin:'100px'}}>{buttonText}</TemplateButton></Space>
                </div>
            </HomeHeroContainer>
        </Col>
    )
}

export default Hero;
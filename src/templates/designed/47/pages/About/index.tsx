import { Col, Row } from "@components/grid";
import { Space } from "@components/space";
import { Typography } from "@components/typography";
import React from "react";
import IntroduceWithImage from "../../components/IntroduceWithImage";
import { HeroContainer, Text } from "../../styles/design47.styles";

const About = () => {
    return(
        <>
        <HeroContainer
        image="https://images.unsplash.com/photo-1583468991267-3f068b607ae1?ixid=MnwyMjUyNTN8MHwxfHNlYXJjaHw2fHx0ZWFjaGVyc3xlbnwwfHx8fDE2MjE4ODk5Nzg&ixlib=rb-1.2.1&w=1920&h=1566&crop=faces&fit=crop"
        height="580px"
        >
            <Col xs={12} style={{margin:'100px'}}>
                <Space align="center">
                    <Text variant="h1" style={{margin:'100px'}}>Introduce your idea</Text>
                </Space>
            </Col>
        </HeroContainer>
        <Row style={{backgroundColor:'rgb(199, 191, 232)'}}>
            <div style={{margin: '40px'}}>
                <IntroduceWithImage
                image1="https://images.unsplash.com/photo-1613186420419-868111e7ac07?ixid=MnwyMjUyNTN8MHwxfHNlYXJjaHw5fHxibGFjayUyMHdvbWFuJTIwc21pbGluZ3xlbnwwfHx8fDE2MjE4OTA3ODY&ixlib=rb-1.2.1&w=1920&h=1280&crop=faces&fit=crop"
                image2="https://images.unsplash.com/photo-1601600416038-72c0ea043d3c?ixid=MnwyMjUyNTN8MHwxfHNlYXJjaHw3fHxtYW4lMjBwYWludGVyfGVufDB8fHx8MTYyMTg5MDc0Mg&ixlib=rb-1.2.1&w=1920&h=1280&crop=faces&fit=crop"
                image3="https://images.unsplash.com/photo-1520207588543-1e545b20c19e?ixid=MnwyMjUyNTN8MHwxfHNlYXJjaHwxMnx8YXJ0aXN0fGVufDB8fHx8MTYyMTg5MDY4NA&ixlib=rb-1.2.1&w=1920&h=1279&crop=faces&fit=crop"
                title1="introduce your idea"
                title2="introduce your idea"
                title3="introduce your idea"
                text1="Use this space to elaborate on your headline and connect with your visitors. You can build on the first idea or add your second point. Now that you've got your visitors' attention, let them know what they can expect, and encourage them to explore your site."
                text2="Use this space to elaborate on your headline and connect with your visitors. You can build on the first idea or add your second point. Now that you've got your visitors' attention, let them know what they can expect, and encourage them to explore your site."
                text3="Use this space to elaborate on your headline and connect with your visitors. You can build on the first idea or add your second point. Now that you've got your visitors' attention, let them know what they can expect, and encourage them to explore your site."
                />
            </div>
        </Row>
        </>
    )
}

export default About;
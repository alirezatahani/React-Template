import { Col, Row } from "@components/grid";
import { Space } from "@components/space";
import React from "react";
import { EventButtonSection, EventsHeroTexts, EventsImageContainer, EventsImages, HeroContainer, HeroContent, TemplateButton, Text } from "../../styles/design47.styles";

const Events = () => {
    return(
        <>
        <HeroContainer
        image="https://images.unsplash.com/photo-1558204098-f1a1ebc50a95?ixid=MnwyMjUyNTN8MHwxfHNlYXJjaHwxM3x8bGl0dGxlJTIwYXJ0aXN0fGVufDB8fHx8MTYyMTg4OTM5Ng&ixlib=rb-1.2.1&w=1920&h=1279&crop=faces&fit=crop"
        height="480px"
        backgroundColor
        >
            <Space align="center">
                <HeroContent direction="vertical" align="center">
                    <Text variant="h1">Add Your Title Here</Text>
                    <EventsHeroTexts>
                        <Col xs={12} lg={6}>
                            <Text variant="h3">18 Jan 2022</Text>
                        </Col>
                        <Col xs={12} lg={6}>
                            <Text variant="h3">$30 per entry</Text>
                        </Col>
                    </EventsHeroTexts>
                    <Space align="center">
                        <TemplateButton>CALL TO ACTION</TemplateButton>
                    </Space>
                    
                </HeroContent>
            </Space>
        </HeroContainer>
        <Row style={{backgroundColor:'rgb(199, 191, 232)', padding:'100px 0'}}>
            <Col xs={2}></Col>
            <Col xs={8}>
                <Text variant="h2">Add your list title</Text>
                <Text variant="body1" style={{padding:'30px 0'}}>
                    Use this space to elaborate on your headline and connect with your visitors. 
                    You can build on the first idea or add your second point. 
                    Now that you've got your visitors' attention, let them know what they can expect, 
                    and encourage them to explore your site.
                </Text>
                <ul style={{padding:'30px 0 30px 20px', color:''}}>
                    <Text><li>Use bullet points to list facts or highlight important information</li></Text>
                    <Text><li>Use bullet points to list facts or highlight important information</li></Text>
                    <Text><li>Use bullet points to list facts or highlight important information</li></Text>
                    <Text><li>Use bullet points to list facts or highlight important information</li></Text>
                    <Text><li>Use bullet points to list facts or highlight important information</li></Text>
                </ul>
                <Text variant="body1" style={{padding:'0px 0'}}>
                    Use this space to elaborate on your headline and connect with your visitors. 
                    You can build on the first idea or add your second point. 
                    Now that you've got your visitors' attention, let them know what they can expect, 
                    and encourage them to explore your site.
                </Text>
                <EventButtonSection>
                    <Text variant="h2" style={{padding:'30px 100px 0 0'}}>$30</Text>
                    <div style={{padding:'35px 0'}}>
                        <TemplateButton>CALL TO ACTION</TemplateButton>
                    </div>
                </EventButtonSection>
                <Row>
                    <EventsImageContainer xs={12} lg={6}>
                        <EventsImages src="https://images.unsplash.com/photo-1554343594-1c9d305bd51f?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjE5ODUzNDI&ixlib=rb-1.2.1&w=1920&h=1297&crop=faces&fit=crop"/>
                    </EventsImageContainer>
                    <EventsImageContainer xs={12} lg={6}>
                        <EventsImages src="https://images.unsplash.com/photo-1620398733924-4309f4bfd621?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjE5ODUzNDY&ixlib=rb-1.2.1&w=1920&h=1280&crop=faces&fit=crop"/>
                    </EventsImageContainer>
                </Row>
            </Col>
            <Col xs={2}></Col>
        </Row>
        </>
    )
}

export default Events;
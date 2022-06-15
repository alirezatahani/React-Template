import { Col, Row } from "@components/grid";
import React from "react";
import { HeroContainer, HeroContent, Text } from "../../styles/design47.styles";
import Class from "./Class";

const Classes = () => {
    return(
        <>
        <HeroContainer
        image="https://images.unsplash.com/photo-1586439217787-48ed910fa663?ixid=MnwyMjUyNTN8MHwxfHNlYXJjaHw0NHx8Y3JheW9uc3xlbnwwfHx8fDE2MjE4ODU4Mzc&ixlib=rb-1.2.1&w=1920&h=1280&crop=faces&fit=crop"
        height="340px"
        >
            <Row>
                <Col xs={1}></Col>
                <Col xs={10}>
                    <HeroContent direction="vertical" align="center">
                        <Text variant="h1" style={{textAlign:'center'}}>Add your title</Text>
                        <Text variant="body1" style={{textAlign:'center', padding:'50px'}}>Use this space to elaborate on your headline and connect with your visitors. You can build on the first idea or add your second point. Now that you've got your visitors' attention, let them know what they can expect, and encourage them to explore your site.</Text>
                    </HeroContent>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </HeroContainer>
        <Class 
            background="rgb(249, 160, 32)"
            image="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixid=MnwyMjUyNTN8MHwxfHNlYXJjaHwxMnx8Z2lybCUyMGNhbWVyYXxlbnwwfHx8fDE2MjE4ODg1NDQ&ixlib=rb-1.2.1&w=1920&h=1326&crop=faces&fit=crop"
            title="add your Title"
            text="Tell people more about what you do. Use this space to describe your products or services, and highlight their benefits. Want people to know your company? Share information about you and your team members."
            listItems={[
                "Use bullet points to highlight important information",
                "Use bullet points to highlight important information",
                "Use bullet points to highlight important information",
                "Use bullet points to highlight important information",
                "Use bullet points to highlight important information",
                "Use bullet points to highlight important information"
            ]}
        />
        <Class 
            background="rgb(255, 201, 0)"
            image="https://images.unsplash.com/photo-1544773088-d142e38f5793?ixid=MnwyMjUyNTN8MHwxfHNlYXJjaHwxN3x8ZHJhd2luZ3MlMjBjaGlsZHxlbnwwfHx8fDE2MjE4ODg5NTk&ixlib=rb-1.2.1&w=1920&h=1369&crop=faces&fit=crop"
            title="add your Title"
            text="Tell people more about what you do. Use this space to describe your products or services, and highlight their benefits. Want people to know your company? Share information about you and your team members."
            listItems={[
                "Use bullet points to highlight important information",
                "Use bullet points to highlight important information",
                "Use bullet points to highlight important information",
                "Use bullet points to highlight important information",
                "Use bullet points to highlight important information",
                "Use bullet points to highlight important information"
            ]}
        />
        <Class 
            background="rgb(186, 223, 96)"
            image="https://images.unsplash.com/photo-1485783522162-1dbb8ffcbe5b?ixid=MnwyMjUyNTN8MHwxfHNlYXJjaHwzfHxib3klMjBsZWdvfGVufDB8fHx8MTYyMTg4NzU3Mg&ixlib=rb-1.2.1&w=1920&h=1271&crop=faces&fit=crop"
            title="add your Title"
            text="Tell people more about what you do. Use this space to describe your products or services, and highlight their benefits. Want people to know your company? Share information about you and your team members."
            listItems={[
                "Use bullet points to highlight important information",
                "Use bullet points to highlight important information",
                "Use bullet points to highlight important information",
                "Use bullet points to highlight important information",
                "Use bullet points to highlight important information",
                "Use bullet points to highlight important information"
            ]}
        />
        </>
    )
}

export default Classes;
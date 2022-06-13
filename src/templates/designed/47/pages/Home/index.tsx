import { Col, Row } from "@components/grid";
import { Image } from "@components/image";
import { Space } from "@components/space";
import React from "react";
import IntroduceWithImage from "../../components/IntroduceWithImage";
import { Date, HeroContainer, HeroItems, HeroTitlesSection, HeroTitlestext, Introduce, Poster, RegisterBtnContainer, RegisterCol, Salam, SubTitle, TemplateButton, Text } from "../../styles/design47.styles";


const Home = () => {
    return(
        <>
            <HeroContainer
                image="https://images.unsplash.com/photo-1579018024219-fa9694ca5698?ixid=MnwyMjUyNTN8MHwxfHNlYXJjaHwxfHxraWRzJTIwY3JhZnRzfGVufDB8fHx8MTYyMTg4MjAwNw&ixlib=rb-1.2.1&w=1920&h=1281&crop=faces&fit=crop"
                height="950px"
            >
                <HeroItems xs={12}>
                    <Space align="center">
                    <Text variant="h1" style={{margin:'100px'}}>Introduce your idea</Text>
                    </Space>
                    <Row style={{margin:'40px'}}>
                        <Col xs={12} lg={4} style={{backgroundColor:'rgb(249, 160, 32)', borderRadius:'40px 0 0 40px'}}>
                            <HeroTitlesSection>
                                <Text variant="h3">Add your title</Text>
                            </HeroTitlesSection>
                            <hr style={{width:'85%', margin:'auto', color:'rgba(255, 255, 255, 0.32'}}/>
                            <HeroTitlestext>
                                <Text variant="body1">Tell people more about what you do. </Text>
                            </HeroTitlestext>
                        </Col>
                        <Col xs={12} lg={4} style={{backgroundColor:'rgb(255, 201, 0)'}}>
                            <HeroTitlesSection>
                                <Text variant="h3">Add your title</Text>
                            </HeroTitlesSection>
                            <hr style={{width:'85%', margin:'auto', color:'rgba(255, 255, 255, 0.32'}}/>
                            <HeroTitlestext>
                                <Text variant="body1">Tell people more about what you do. </Text>
                            </HeroTitlestext>
                        </Col>
                        <Col xs={12} lg={4} style={{backgroundColor:'rgb(186, 223, 96)', borderRadius:'0 40px 40px 0'}}>
                            <HeroTitlesSection>
                                <Text variant="h3">Add your title</Text>
                            </HeroTitlesSection>
                            <hr style={{width:'85%', margin:'auto', color:'rgba(255, 255, 255, 0.32)'}}/>
                            <HeroTitlestext>
                                <Text variant="body1">Tell people more about what you do. </Text>
                            </HeroTitlestext>
                        </Col>
                    </Row>
                </HeroItems>
            </HeroContainer>
            <Row style={{backgroundColor:'rgb(199, 191, 232)'}}>
                <div style={{margin:'40px'}}>
                    <SubTitle variant="h2">Add your title</SubTitle>
                    <Col xs={12}>
                        <IntroduceWithImage home
                        image1="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixid=MnwyMjUyNTN8MHwxfHNlYXJjaHw3fHxraWRzfGVufDB8fHx8MTYyMTg3Nzc0NQ&ixlib=rb-1.2.1&w=1920&h=1326&crop=faces&fit=crop"
                        image2="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixid=MnwyMjUyNTN8MHwxfHNlYXJjaHw3fHxraWRzfGVufDB8fHx8MTYyMTg3Nzc0NQ&ixlib=rb-1.2.1&w=1920&h=1326&crop=faces&fit=crop"
                        image3="https://images.unsplash.com/photo-1541692641319-981cc79ee10a?ixid=MnwyMjUyNTN8MHwxfHNlYXJjaHw0NXx8Z2FtZXN8ZW58MHx8fHwxNjE5NzMxMDQw&ixlib=rb-1.2.1&w=1920&h=1280&crop=faces&fit=crop"
                        title1="introduce your idea"
                        title2="introduce your idea"
                        title3="introduce your idea"
                        text1="Use this space to elaborate on your headline and connect with your visitors. You can build on the first idea or add your second point. Now that you've got your visitors' attention, let them know what they can expect, and encourage them to explore your site."
                        text2="Use this space to elaborate on your headline and connect with your visitors. You can build on the first idea or add your second point. Now that you've got your visitors' attention, let them know what they can expect, and encourage them to explore your site."
                        text3="Use this space to elaborate on your headline and connect with your visitors. You can build on the first idea or add your second point. Now that you've got your visitors' attention, let them know what they can expect, and encourage them to explore your site."
                        buttonText1="CALL TO ACTION"
                        buttonText2="CALL TO ACTION"
                        buttonText3="CALL TO ACTION"
                        />
                    </Col>
                </div>
            </Row>
            <Row style={{backgroundColor:'rgb(186, 223, 96)'}}>
                <Col xs={1}></Col>
                <Col xs={10}>
                    <SubTitle variant="h2">Add your title</SubTitle>
                    <Row>
                        <RegisterCol imageContainer xs={12} lg={4}>
                            {/* <Introduce image="https://images.unsplash.com/photo-1554343594-1c9d305bd51f?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjE5ODUzNDI&ixlib=rb-1.2.1&w=1920&h=1297&crop=faces&fit=crop">
                                <Date>
                                    <Text strong style={{fontSize: '60px'}}>18</Text>
                                    <Text>jan</Text>
                                    <Text>2022</Text>
                                </Date>
                            </Introduce> */}
                            <Introduce>
                                <Salam style={{ borderRadius:'25px 0 0 25px'}} xs={12} lg={8} image="https://images.unsplash.com/photo-1554343594-1c9d305bd51f?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjE5ODUzNDI&ixlib=rb-1.2.1&w=1920&h=1297&crop=faces&fit=crop">
                                </Salam>
                                <Col xs={12} lg={4} style={{backgroundColor:'red', borderRadius:'0px 25px 25px 0', height:'auto'}}>
                                </Col>
                            </Introduce>
                        </RegisterCol>
                        <RegisterCol xs={12} lg={4}>
                            <Text variant="h3">Add your title</Text>
                            <Text variant="body1">
                                Tell people more about what you do. Use this space to describe your products or services. Highlight their benefits so they feel compelled to click. 
                            </Text>
                        </RegisterCol>
                        <RegisterCol xs={12} lg={4} style={{textAlign:'center'}}>
                            <RegisterBtnContainer>
                                <Text variant="h3">$30 per person</Text>
                                <TemplateButton style={{margin:'20px'}}>register now</TemplateButton>
                            </RegisterBtnContainer>
                        </RegisterCol>
                    </Row>
                </Col>
                <Col xs={1}></Col>
            </Row>
            <Poster image="https://images.unsplash.com/photo-1560541919-eb5c2da6a5a3?ixid=MnwyMjUyNTN8MHwxfHNlYXJjaHwxOXx8Z3JvdXAlMjBvZiUyMGNoaWxkcmVufGVufDB8fHx8MTYyMTg4NTQ4OQ&ixlib=rb-1.2.1&w=1920&h=1280&crop=faces&fit=crop">
                <div style={{backgroundColor:'rgb(255, 201, 0)',borderRadius:'25px', margin:'100px 200px'}}>
                    <Text variant="h3" style={{fontSize: "12px"}}>
                        "Add testimonial quotes from actual people who use your products. 
                        Their feedback can build trust and help your visitors make up their mind."
                    </Text>
                </div>
            </Poster>
        </>
    )
}

export default Home;
import { Col, Row } from "@components/grid";
import { Image } from "@components/image";
import { Space } from "@components/space";
import { Typography } from "@components/typography";
import React from "react";
import { Date, HeroContainer, HeroItems, HeroTitlesSection, HeroTitlestext, Introduce, Poster, RegisterBtnContainer, RegisterCol, Salam, SubTitle, TemplateButton } from "../../styles/design47.styles";
import IntroduceWithImage from "./IntroduceWithImage";

const Home = () => {
    return(
        <>
            <HeroContainer image="https://images.unsplash.com/photo-1579018024219-fa9694ca5698?ixid=MnwyMjUyNTN8MHwxfHNlYXJjaHwxfHxraWRzJTIwY3JhZnRzfGVufDB8fHx8MTYyMTg4MjAwNw&ixlib=rb-1.2.1&w=1920&h=1281&crop=faces&fit=crop" height="950px">
                <HeroItems xs={12}>
                    <Space align="center">
                    <Typography variant="h1" style={{margin:'100px'}}>Introduce your idea</Typography>
                    </Space>
                    <Row style={{margin:'40px'}}>
                        <Col xs={12} lg={4} style={{backgroundColor:'rgb(249, 160, 32)', borderRadius:'5% 0 0 5%'}}>
                            <HeroTitlesSection>
                                <Typography variant="h3">Add your title</Typography>
                            </HeroTitlesSection>
                            <hr style={{width:'85%', margin:'auto', color:'rgba(255, 255, 255, 0.32'}}/>
                            <HeroTitlestext>
                                <Typography variant="body1">Tell people more about what you do. </Typography>
                            </HeroTitlestext>
                        </Col>
                        <Col xs={12} lg={4} style={{backgroundColor:'rgb(255, 201, 0)'}}>
                            <HeroTitlesSection>
                                <Typography variant="h3">Add your title</Typography>
                            </HeroTitlesSection>
                            <hr style={{width:'85%', margin:'auto', color:'rgba(255, 255, 255, 0.32'}}/>
                            <HeroTitlestext>
                                <Typography variant="body1">Tell people more about what you do. </Typography>
                            </HeroTitlestext>
                        </Col>
                        <Col xs={12} lg={4} style={{backgroundColor:'rgb(186, 223, 96)', borderRadius:'0 5% 5% 0'}}>
                            <HeroTitlesSection>
                                <Typography variant="h3">Add your title</Typography>
                            </HeroTitlesSection>
                            <hr style={{width:'85%', margin:'auto', color:'rgba(255, 255, 255, 0.32)'}}/>
                            <HeroTitlestext>
                                <Typography variant="body1">Tell people more about what you do. </Typography>
                            </HeroTitlestext>
                        </Col>
                    </Row>
                </HeroItems>
            </HeroContainer>
            <Row style={{backgroundColor:'rgb(199, 191, 232)'}}>
                <div style={{margin:'40px'}}>
                    <SubTitle variant="h2">Add your title</SubTitle>
                    <Col xs={12}>
                        <Row>
                            <Col xs={12} lg={4} style={{backgroundColor:'rgb(249, 160, 32)', padding:'30px'}}>
                                <IntroduceWithImage/>
                            </Col>
                            <Col xs={12} lg={4} style={{backgroundColor:'rgb(255, 201, 0)', padding:'30px'}}>
                                <IntroduceWithImage/>
                            </Col>
                            <Col xs={12} lg={4} style={{backgroundColor:'rgb(186, 223, 96)', padding:'30px'}}>
                                <IntroduceWithImage/>
                            </Col>
                        </Row>
                    </Col>
                </div>
            </Row>
            <Row style={{backgroundColor:'rgb(186, 223, 96)'}}>
                <Col lg={1}></Col>
                <Col lg={10}>
                    <SubTitle variant="h2">Add your title</SubTitle>
                    <Row>
                        <RegisterCol imageContainer lg={4}>
                            {/* <Introduce image="https://images.unsplash.com/photo-1554343594-1c9d305bd51f?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjE5ODUzNDI&ixlib=rb-1.2.1&w=1920&h=1297&crop=faces&fit=crop">
                                <Date>
                                    <Typography strong style={{fontSize: '60px'}}>18</Typography>
                                    <Typography>jan</Typography>
                                    <Typography>2022</Typography>
                                </Date>
                            </Introduce> */}
                            <Row style={{display:'flex', height:'100%', borderRadius:'25px'}}>
                                <Col xs={8} style={{backgroundColor:'red', borderRadius:'25px 0 0 25px'}}>
                                </Col>
                                <Salam style={{borderRadius:'0 25px 25px 0'}} xs={4} image="https://images.unsplash.com/photo-1554343594-1c9d305bd51f?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjE5ODUzNDI&ixlib=rb-1.2.1&w=1920&h=1297&crop=faces&fit=crop">
                                </Salam>
                            </Row>
                            {/* <Image width={'90%'} height={'full'} src="https://images.unsplash.com/photo-1554343594-1c9d305bd51f?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjE5ODUzNDI&ixlib=rb-1.2.1&w=1920&h=1297&crop=faces&fit=crop"/> */}
                        </RegisterCol>
                        <RegisterCol lg={4}>
                            <Typography variant="h3">Add your title</Typography>
                            <Typography variant="body1">
                                Tell people more about what you do. Use this space to describe your products or services. Highlight their benefits so they feel compelled to click. 
                            </Typography>
                        </RegisterCol>
                        <RegisterCol lg={4} style={{textAlign:'center'}}>
                            <RegisterBtnContainer>
                                <Typography variant="h3">$30 per person</Typography>
                                <TemplateButton style={{margin:'20px'}}>register now</TemplateButton>
                            </RegisterBtnContainer>
                        </RegisterCol>
                    </Row>
                </Col>
                <Col lg={1}></Col>
            </Row>
            <Poster image="https://images.unsplash.com/photo-1560541919-eb5c2da6a5a3?ixid=MnwyMjUyNTN8MHwxfHNlYXJjaHwxOXx8Z3JvdXAlMjBvZiUyMGNoaWxkcmVufGVufDB8fHx8MTYyMTg4NTQ4OQ&ixlib=rb-1.2.1&w=1920&h=1280&crop=faces&fit=crop">
                <div style={{backgroundColor:'rgb(255, 201, 0)',borderRadius:'25px', margin:'100px 200px', padding:'50px 100px'}}>
                    <Typography variant="h3">
                        "Add testimonial quotes from actual people who use your products. 
                        Their feedback can build trust and help your visitors make up their mind."
                    </Typography>
                </div>
            </Poster>
        </>
    )
}

export default Home;
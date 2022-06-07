import { Col, Footer, Image, Row, Space, Typography } from '../../../../../components';
import * as React from 'react';
import { AddTitleText, HeroContainer } from '../../styles/design51.styles';
import FeedBack from './FeedBack';

const AboutUs: React.FC = () => {
    return(
        <Row>
            <Col xs={12}>
                <HeroContainer image='https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/1ede5857-d0b6-4c36-b39d-8666d1f56d47.png'>
                    <Space align='center'>
                        <Typography variant='h2' strong style={{color:'white'}}>About Us</Typography>
                    </Space>
                </HeroContainer>
            </Col>
            <Row>
                <Col xs={1}></Col>
                <Col xs={10}>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={4}>
                            <AddTitleText  style={{padding:'60px 0 0 10px'}}>ADD YOUR TITLE</AddTitleText>
                            <Typography variant='h2'>ADD YOUR TITLE</Typography>
                            <br/>
                            <Typography variant='body1' strong>
                                Use this space to elaborate on your headline and connect with your visitors. 
                                You can build on the first idea or add your second point. Now that you've got your visitors' attention, let them know what they can expect, 
                                and encourage them to explore your site
                            </Typography>
                            <br/>
                            <Typography variant='body1'>
                                Use this space to elaborate on your headline and connect with your visitors. 
                                You can build on the first idea or add your second point. Now that you've got your visitors' attention, let them know what they can expect, 
                                and encourage them to explore your site.
                            </Typography>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4} style={{padding:'30px'}}>
                            <Image src='https://images.unsplash.com/photo-1608649672403-3609a75eae18?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjIwNTQyNjM&ixlib=rb-1.2.1&w=1281&h=1920&crop=faces&fit=crop'/>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4} style={{padding:'30px'}}>
                            <Image src='https://images.unsplash.com/photo-1537734796389-e1fc293cf856?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjIwNTQxMjM&ixlib=rb-1.2.1&w=1271&h=1920&crop=faces&fit=crop'/>
                        </Col>
                    </Row>
                </Col>
                <Col xs={1}></Col>
            </Row>
            <Row style={{backgroundColor:'rgb(255, 244, 244)'}}>
                <Col lg={1}></Col>
                <Col xs={12} sm={12} md={12} lg={10}>
                    <Row>
                        <Col xs={1}/>
                        <Col xs={10} style={{margin:'30px'}}>
                            <Space align='center'>
                                <AddTitleText>ADD YOUR TITLE</AddTitleText>
                            </Space>
                            <Space align='center'>
                                <Typography variant="h2" strong>INTRODUCE YOUR IDEA</Typography>
                            </Space>
                            <Space align='center'>
                                <Typography variant="body1" style={{margin:'20px'}}>
                                    Use this space to elaborate on your headline and connect with
                                    your visitors. You can build on the first idea or add your
                                    second point. Now that you've got your visitors' attention, let
                                    them know what they can expect, and encourage them to explore
                                    your site.
                                </Typography>
                            </Space>
                        </Col>
                        <Col xs={1}/>
                    </Row>
                </Col>
                <Col lg={1}></Col>
                <Row>
                <Row style={{padding:'0 30px'}}>
                    <Col lg={1}></Col>
                    <FeedBack/>
                    <FeedBack/>
                    <Col lg={1}></Col>
                </Row>
                <Row style={{padding:'0 30px'}}>
                    <Col lg={1}></Col>
                    <FeedBack/>
                    <FeedBack/>
                    <Col lg={1}></Col>
                </Row>
                </Row>
            </Row>
            <Col xs={12}>
                <Footer/>
            </Col>
        </Row>
    )
}

export default AboutUs;
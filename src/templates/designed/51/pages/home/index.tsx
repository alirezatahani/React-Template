import * as React from 'react';
import { Row, Col, Space, Typography, Footer } from '../../../../../components';

import {
    ImageContainer,
    ImagesContainer,
    MainTexts,
    MenuButton,
    PizzaImage,
    PizzaRoundedImage,
    Price,
    CallToActionButton,
    ImagesContainer2,
    AddTitleText,
    HomeHeroContainer,
    HeroContainerImage,
} from '../../styles/design51.styles';

const Home: React.FC = () => {
    return (
        <Row>
            <HomeHeroContainer image='https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/1ede5857-d0b6-4c36-b39d-8666d1f56d47.png'>
                <Col xs={12} sm={12} md={6}>
                    <MainTexts>
                        <Typography variant="h1" strong style={{color:'#fff'}}>ADD YOUR TITLE</Typography>
                        <br />
                        <Typography variant="body1" style={{color:'#fff'}}>
                            Use this space to elaborate on the ideas introduced in the
                            title. Include the information that makes the most sense for
                            your brand.
                        </Typography>
                        <CallToActionButton style={{backgroundColor:'rgb(127, 172, 17)'}}>CALL TO ACTION</CallToActionButton>
                    </MainTexts>
                </Col>
                <Col xs={12} sm={12} md={6}>
                    <HeroContainerImage src="https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/a2f85e28-163a-4a45-8a8b-dd7f0a897507.png" />
                </Col>
            </HomeHeroContainer>
            <ImagesContainer>
                <Col md={1}></Col>
                <Col xs={12} sm={12} md={10}>
                    <Row>
                        <Col md={1}/>
                        <Col xs={12} sm={12} md={10} style={{margin:'30px'}}>
                            <Space align='center'>
                                <AddTitleText>ADD YOUR TITLE</AddTitleText>
                            </Space>
                            <Space align='center'>
                                <Typography variant="h2" strong>INTRODUCE YOUR IDEA</Typography>
                            </Space>
                            <br />
                            <Space align='center'>
                                <Typography variant="body1" style={{margin:'10px'}}>
                                    Use this space to elaborate on your headline and connect with
                                    your visitors. You can build on the first idea or add your
                                    second point. Now that you've got your visitors' attention, let
                                    them know what they can expect, and encourage them to explore
                                    your site.
                                </Typography>
                            </Space>
                        </Col>
                        <Col md={1}/>
                    </Row>
                    <br/>
                    <Row>
                        <Col xs={12} sm={12} md={4}>
                            <div style={{ textAlign: 'center' }}>
                                <PizzaRoundedImage src="https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/28f237fe-2073-4c99-901a-b6149a6ead60.png" />
                            </div>
                            <br />
                            <div style={{ textAlign: 'center' }}>
                                <Typography variant="h4">ADD YOUR TITLE</Typography>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <Price variant="body1">$6.99</Price>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4}>
                            <div style={{ textAlign: 'center' }}>
                                <PizzaRoundedImage src="https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/d2df2e7a-7b12-4967-b511-47dac43ea55c.png" />
                            </div>
                            <br />
                            <div style={{ textAlign: 'center' }}>
                                <Typography variant="h4">ADD YOUR TITLE</Typography>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <Price variant="body1">$9.99</Price>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4}>
                            <div style={{ textAlign: 'center' }}>
                                <PizzaRoundedImage src="https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/310328fa-17c2-458b-86d1-1fbf9dd9020d.png" />
                            </div>
                            <br />
                            <div style={{ textAlign: 'center' }}>
                                <Typography variant="h4">ADD YOUR TITLE</Typography>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <Price variant="body1">$7.99</Price>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs={12} sm={12} md={4}>
                            <div style={{ textAlign: 'center' }}>
                                <PizzaRoundedImage src="https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/28f237fe-2073-4c99-901a-b6149a6ead60.png" />
                            </div>
                            <br />
                            <div style={{ textAlign: 'center' }}>
                                <Typography variant="h4">ADD YOUR TITLE</Typography>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <Price variant="body1">$7.99</Price>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4}>
                            <div style={{ textAlign: 'center' }}>
                                <PizzaRoundedImage src="https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/d2df2e7a-7b12-4967-b511-47dac43ea55c.png" />
                            </div>
                            <br />
                            <div style={{ textAlign: 'center' }}>
                                <Typography variant="h4">ADD YOUR TITLE</Typography>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <Price variant="body1">$9.99</Price>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4}>
                            <div style={{ textAlign: 'center' }}>
                                <PizzaRoundedImage src="https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/d1ef202c-fd23-4606-be56-dd72be51221b.png" />
                            </div>
                            <br />
                            <div style={{ textAlign: 'center' }}>
                                <Typography variant="h4">ADD YOUR TITLE</Typography>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <Price variant="body1">$8.99</Price>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Space align={'center'}>
                        <Typography>
                            Use this space to elaborate on your headline and connect with
                            your visitors.
                        </Typography>
                    </Space>
                    <br />
                    <Space align={'center'}>
                        <MenuButton color="danger">MENU</MenuButton>
                    </Space>
                </Col>
                <Col md={1}></Col>
            </ImagesContainer>
            <ImagesContainer2>
                <Col md={1}></Col>
                <Col xs={12} sm={12} md={10}>
                    <Row>
                        <Col md={1}></Col>
                        <Col xs={12} sm={12} md={10}>
                            <Space align={'center'}>
                                <AddTitleText>ADD YOUR TITLE</AddTitleText>
                            </Space>
                            <Space align={'center'}>
                                <Typography variant="h2" strong>INTRODUCE YOUR IDEA</Typography>
                            </Space>
                            <br />
                            <Space align={'center'}>
                                <Typography variant="body1">
                                    Use this space to elaborate on your headline and connect
                                    with your visitors. You can build on the first idea or add
                                    your second point. Now that you've got your visitors'
                                    attention, let them know what they can expect, and encourage
                                    them to explore your site.
                                </Typography>
                            </Space>
                        </Col>
                        <Col md={1}></Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs={12} sm={12} md={4}>
                            <ImageContainer>
                                <PizzaImage src="https://images.unsplash.com/photo-1571501210331-41105cb1b3e7?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjIwNDYzMzQ&ixlib=rb-1.2.1&w=1280&h=1920&crop=faces&fit=crop" />
                            </ImageContainer>
                        </Col>
                        <Col xs={12} sm={12} md={4}>
                            <ImageContainer>
                                <PizzaImage src="https://images.unsplash.com/photo-1621538997178-8acbbcd64506?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjIwNDYzNDI&ixlib=rb-1.2.1&w=1920&h=1279&crop=faces&fit=crop" />
                            </ImageContainer>
                        </Col>
                        <Col xs={12} sm={12} md={4}>
                            <ImageContainer>
                                <PizzaImage src="https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/310328fa-17c2-458b-86d1-1fbf9dd9020d.png" />
                            </ImageContainer>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs={12} sm={12} md={4}>
                            <ImageContainer>
                                <PizzaImage src="https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjIwNDYzNzE&ixlib=rb-1.2.1&w=1920&h=1280&crop=faces&fit=crop" />
                            </ImageContainer>
                        </Col>
                        <Col xs={12} sm={12} md={4}>
                            <ImageContainer>
                                <PizzaImage src="https://images.unsplash.com/photo-1589187151053-5ec8818e661b?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjIwNDYzODI&ixlib=rb-1.2.1&w=1280&h=1920&crop=faces&fit=crop" />
                            </ImageContainer>
                        </Col>
                        <Col xs={12} sm={12} md={4}>
                            <ImageContainer>
                                <PizzaImage src="https://images.unsplash.com/photo-1621485817388-9ab03c1a56b5?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjIwNDY0MjA&ixlib=rb-1.2.1&w=1440&h=1920&crop=faces&fit=crop" />
                            </ImageContainer>
                        </Col>
                    </Row>
                    <br />
                    <Space align={'center'}>
                        <Typography>
                            Use this space to elaborate on your headline and connect with
                            your visitors.
                        </Typography>
                    </Space>
                    <br />
                    <Space align={'center'}>
                        <MenuButton color="danger">MENU</MenuButton>
                    </Space>
                </Col>
                <Col md={1}></Col>
            </ImagesContainer2>
            <Col xs={12}>
                <Footer/>
            </Col>
        </Row>
    );
};

export default Home;
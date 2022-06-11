import { Container } from '@components/container';
import { Col, Row } from '@components/grid';
import { Space } from '@components/space';
import { Typography } from '@components/typography';
import React from 'react';
import Hero from '../../components/Hero';
import { RoundedImage, Poster, TemplateButton } from '../../styles/design74.style';

const Home = () => {
    return(
    <Row>
        <Hero src='https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/c516748f-ebab-4f41-9514-a8a48acf2f0d.png' 
            title={"ADD YOUR TITLE"} 
            buttonText={"CALL TO ACTION"}
            color={"white"}
        />
        <Col xs={12} style={{padding:'40px'}}>
            <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
                <Row>
                    <Col lg={7}>
                        <Typography variant='h2'>Introduce your idea</Typography>
                        <br/>
                        <Typography>Tell people more about what you do. Use this space to describe your products or services. Highlight their benefits so they feel compelled to click.</Typography>
                    </Col>
                    <Col lg={2}></Col>
                    <Col xs={12} lg={3}  style={{paddingTop:'100px'}}>
                        <Space align='center'>
                        <TemplateButton style={{}}>CALL TO ACTION</TemplateButton>
                        </Space>
                    </Col>
                </Row>
                <Row style={{marginTop:'80px'}}>
                    <Col xs={12} sm={12} md={12} lg={4}>
                        <Typography variant='h2' style={{color:'#297EDDFF'}}>3</Typography>
                        <Typography>bedrooms</Typography>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4}>
                        <Typography variant='h2' style={{color:'#297EDDFF'}}>2</Typography>
                        <Typography>bathrooms</Typography>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4}>
                        <Typography variant='h2' style={{color:'#297EDDFF'}}>1600</Typography>
                        <Typography>sq ft. total interior area</Typography>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={4}>
                        <RoundedImage src='https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjI4ODI4MDE&ixlib=rb-1.2.1&w=1920&h=1280&crop=faces&fit=crop'/>
                        <RoundedImage src='https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjI4ODQwNDM&ixlib=rb-1.2.1&w=1920&h=1280&crop=faces&fit=crop'/>
                        <RoundedImage src='https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixid=MnwyMjUyNTN8MHwxfHNlYXJjaHw0MXx8c3BlY2lhbHR5JTIwdHJhdmVsfGVufDB8fHx8MTYyMDIwMzg5Mg&ixlib=rb-1.2.1&w=1280&h=1920&crop=faces&fit=crop'/>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4}>
                        <RoundedImage src='https://images.unsplash.com/photo-1505577058444-a3dab90d4253?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjI4ODQwMjg&ixlib=rb-1.2.1&w=1280&h=1920&crop=faces&fit=crop'/>
                        <RoundedImage src='https://images.unsplash.com/photo-1498503403619-e39e4ff390fe?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjI4ODI5MTQ&ixlib=rb-1.2.1&w=1920&h=1280&crop=faces&fit=crop'/>
                        <RoundedImage src='https://images.unsplash.com/photo-1606917454663-343e58811bb1?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjI4ODQzMDU&ixlib=rb-1.2.1&w=1440&h=1920&crop=faces&fit=crop'/>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4}>
                        <RoundedImage src='https://images.unsplash.com/photo-1612365228448-4ad44e105dc5?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjI4ODQxOTA&ixlib=rb-1.2.1&w=1920&h=1281&crop=faces&fit=crop'/>
                        <RoundedImage src='https://images.unsplash.com/photo-1607621623501-148e4e7f9d60?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjI4ODQyMDc&ixlib=rb-1.2.1&w=1276&h=1920&crop=faces&fit=crop'/>
                        <RoundedImage src='https://images.unsplash.com/photo-1618370342544-228e30d72b39?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjI4ODQzNDA&ixlib=rb-1.2.1&w=1920&h=1279&crop=faces&fit=crop'/>
                    </Col>
                </Row>
                <Typography variant='h2' style={{paddingLeft:'20px'}}>LOCATION</Typography>
                <Row>
                    <Col md={12} lg={4}>
                        <RoundedImage src='https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixid=MnwyMjUyNTN8MHwxfHNlYXJjaHw0MXx8c3BlY2lhbHR5JTIwdHJhdmVsfGVufDB8fHx8MTYyMDIwMzg5Mg&ixlib=rb-1.2.1&w=1280&h=1920&crop=faces&fit=crop'/>
                    </Col>
                    <Col md={12} lg={8} style={{padding:'50px'}}>
                        <Typography variant='body1'>Tell people more about what you do. Use this space to describe your products or services. Highlight their benefits so they feel compelled to click.</Typography>
                        <div style={{paddingTop:'50px', paddingBottom:'50px'}}>
                            <Typography>Address line 1,</Typography>
                            <Typography>Addressline 2,</Typography>
                            <Typography>City, Country</Typography>
                        </div>
                        <TemplateButton>CALL TO ACTION</TemplateButton>
                    </Col>
                </Row>
            </Col>
            <Col xs={1}>
            </Col>
            </Row>
        </Col>
        <Poster image='https:us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/d797e744-48d2-49d8-8f6d-87ab172237a2.png' md={12}/>
    </Row>
)}

export default Home;

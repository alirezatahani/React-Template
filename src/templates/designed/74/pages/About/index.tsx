import { Col, Row } from "@components/grid";
import { Typography } from "@components/typography";
import React from "react";
import Hero from "../../components/Hero";
import { Poster, RoundedImage, TemplateButton} from "../../styles/design74.style";
import List from "./List";

const About = () => {
    return(
        <Row>
            <Hero src='https://images.unsplash.com/photo-1612365228448-4ad44e105dc5?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjI4ODQxOTA&ixlib=rb-1.2.1&w=1920&h=1281&crop=faces&fit=crop&fm=webp&q=75' 
                title={"ADD YOUR TITLE"} 
                buttonText={"CALL TO ACTION"}
            />
            <Row>
                <Col xs={1} sm={1} md={1} lg={1}></Col>
                <Col xs={10} sm={10} md={10} lg={10}>
                    <div>
                        <Typography variant="h2">ADD YOUR TITLE</Typography>
                        <br/>
                        <Typography variant="body1">Use this space to elaborate on your headline and connect with your visitors. 
                            You can build on the first idea or add your second point. 
                            Now that you've got your visitors' attention, let them know what they can expect, 
                            and encourage them to explore your site.
                        </Typography>
                    </div>
                    <Row>
                        <Col md={6} style={{padding:'40px 40px 40px 0'}}>
                            <Typography variant="body1">
                                Tell people more about what you do. Use this space to describe your products or services. Highlight their benefits so they feel compelled to click.
                            </Typography>
                            <br/>
                            <Typography variant="body1">
                                Use this space to elaborate on your headline and connect with your visitors. You can build on the first idea or add your second point. Now that you've got your visitors' attention, let them know what they can expect, and encourage them to explore your site.
                            </Typography>
                            <br/>
                            <ul style={{padding:'20px'}}>
                                <li>Use bullet points to highlight important information</li>
                                <br/>
                                <li>Use bullet points to highlight important information</li>
                                <br/>
                                <li>Use bullet points to highlight important information</li>
                                <br/>
                                <li>Use bullet points to highlight important information</li>
                                <br/>
                                <li>Use bullet points to highlight important information</li>
                            </ul>
                            <br/>
                            <Typography variant="body1">Tell people more about what you do. Use this space to describe your products or services. Highlight their benefits so they feel compelled to click.</Typography>
                            <div style={{textAlign:'center', marginTop:'40px'}}>
                                <TemplateButton>CALL TO ACTION</TemplateButton>
                            </div>
                        </Col>
                        <Col md={6}>
                            <RoundedImage style={{height:'690px'}} src="https://images.unsplash.com/photo-1602008194020-13ac6665ebdb?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjI4OTMyNTU&ixlib=rb-1.2.1&w=1440&h=1920&crop=faces&fit=crop"/>
                        </Col>
                    </Row>
                    <Typography variant="h2" style={{padding:'40px 0'}}>ADD YOUR TITLE</Typography>
                    <Row>
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
                    <List 
                        image="https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/a418f86e-32b6-4e89-8fda-975b51482038.png"
                        titles= {{
                            title: "bedrooms",
                            subTitle1: "bedroom1",
                            subTitle2: "bedroom2",
                            subTitle3: "bedroom3"}}
                        items={[
                            "List what's included",
                            "List what's included",
                            "List what's included",
                            "List what's included",
                            "List what's included",
                            "List what's included",
                            "List what's included",
                            "List what's included",
                            "List what's included",
                        ]}
                    />
                    <List
                        image="https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/a418f86e-32b6-4e89-8fda-975b51482038.png"
                        titles= {{
                            title: "bedrooms",
                            subTitle1: "bedroom1",
                            subTitle2: "bedroom2",
                            subTitle3: "bedroom3"}}
                        items={[
                            "List what's included",
                            "List what's included",
                            "List what's included",
                            "List what's included",
                            "List what's included",
                            "List what's included",
                            "List what's included",
                            "List what's included",
                            "List what's included",
                        ]}
                    />
                    <List 
                        image="https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/a418f86e-32b6-4e89-8fda-975b51482038.png"
                        titles= {{
                            title: "bedrooms",
                            subTitle1: "bedroom1",
                            subTitle2: "bedroom2",
                            subTitle3: "bedroom3"}}
                        items={[
                            "List what's included",
                            "List what's included",
                            "List what's included",
                            "List what's included",
                            "List what's included",
                            "List what's included",
                            "List what's included",
                            "List what's included",
                            "List what's included",
                        ]}
                    />
                    <List 
                        image="https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/a418f86e-32b6-4e89-8fda-975b51482038.png"
                        titles= {{
                            title: "bedrooms",
                            subTitle1: "bedroom1",
                            subTitle2: "bedroom2",
                            subTitle3: "bedroom3"}}
                        items={[
                            "List what's included",
                            "List what's included",
                            "List what's included",
                            "List what's included",
                            "List what's included",
                            "List what's included",
                            "List what's included",
                            "List what's included",
                            "List what's included",
                        ]}
                    />
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={4}>
                            <RoundedImage src='https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixid=MnwyMjUyNTN8MHwxfHNlYXJjaHw0MXx8c3BlY2lhbHR5JTIwdHJhdmVsfGVufDB8fHx8MTYyMDIwMzg5Mg&ixlib=rb-1.2.1&w=1280&h=1920&crop=faces&fit=crop'/>
                            <RoundedImage src='https://images.unsplash.com/photo-1607621623501-148e4e7f9d60?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjI4ODQyMDc&ixlib=rb-1.2.1&w=1276&h=1920&crop=faces&fit=crop'/>
                            <RoundedImage src='https://images.unsplash.com/photo-1607621623501-148e4e7f9d60?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjI4ODQyMDc&ixlib=rb-1.2.1&w=1276&h=1920&crop=faces&fit=crop'/>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4}>
                            <RoundedImage src='https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjI4ODI4MDE&ixlib=rb-1.2.1&w=1920&h=1280&crop=faces&fit=crop'/>
                            <RoundedImage src='https://images.unsplash.com/photo-1612365228448-4ad44e105dc5?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjI4ODQxOTA&ixlib=rb-1.2.1&w=1920&h=1281&crop=faces&fit=crop'/>
                            <RoundedImage src='https://images.unsplash.com/photo-1498503403619-e39e4ff390fe?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjI4ODI5MTQ&ixlib=rb-1.2.1&w=1920&h=1280&crop=faces&fit=crop'/>
                            <RoundedImage src='https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjI4ODQwNDM&ixlib=rb-1.2.1&w=1920&h=1280&crop=faces&fit=crop'/>
                            <RoundedImage src='https://images.unsplash.com/photo-1618370342544-228e30d72b39?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjI4ODQzNDA&ixlib=rb-1.2.1&w=1920&h=1279&crop=faces&fit=crop'/>
                            <RoundedImage src='https://images.unsplash.com/photo-1564540579594-0930edb6de43?ixid=MnwyMjUyNTN8MHwxfHNlYXJjaHwxMXx8YmF0aHJvb218ZW58MHx8fHwxNjE5NzMyMjY0&ixlib=rb-1.2.1&w=1920&h=1280&crop=faces&fit=crop'/>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4}>
                            <RoundedImage src='https://images.unsplash.com/photo-1505577058444-a3dab90d4253?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjI4ODQwMjg&ixlib=rb-1.2.1&w=1280&h=1920&crop=faces&fit=crop'/>
                            <RoundedImage src='https://images.unsplash.com/photo-1606917454663-343e58811bb1?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjI4ODQzMDU&ixlib=rb-1.2.1&w=1440&h=1920&crop=faces&fit=crop'/>
                            <RoundedImage src='https://images.unsplash.com/photo-1618836883952-457c7ece383d?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjI4OTc3OTg&ixlib=rb-1.2.1&w=1920&h=1536&crop=faces&fit=crop'/>
                            <RoundedImage src='https://images.unsplash.com/photo-1520285774798-2f1616131a68?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjI4ODMxMjY&ixlib=rb-1.2.1&w=1920&h=1280&crop=faces&fit=crop'/>
                        </Col>
                    </Row>
                </Col>
                <Col xs={1} sm={1} md={1} lg={1}></Col>
            </Row>
            <Poster xs={12} sm={12} md={12} lg={12} image='https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/73fc838f-81a7-40ce-b0f7-d12cf890acec.png'/>
        </Row>
    )
}

export default About;
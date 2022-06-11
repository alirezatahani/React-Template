import { Col, Row } from "@components/grid";
import { Typography } from "@components/typography";
import React from "react";
import Hero from "../../components/Hero";
import { Poster, TemplateButton } from "../../styles/design74.style";
import FeedBack from "./Feedback";
import Prices from "./prices";

const Pricing = () => {
    return(
        <Row>
            <Hero src='https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/e20c4290-115c-41f6-8aad-f47a067a4cc1.png' 
                title={"ADD YOUR TITLE"} 
                buttonText={"CALL TO ACTION"}
                color={"white"}
            />
            <Col md={12} lg={12}>
                <Row>
                    <Col xs={1} sm={1} md={1} lg={1}></Col>
                    <Col xs={10} sm={10} md={10} lg={10} style={{padding:'10px'}}>
                        <Typography variant="h2" style={{margin:'60px 20px'}}>ADD YOUR TITLE</Typography>
                        <Prices months="may-sep" time="per week" price="$600000"/>
                        <Prices months="may-sep" time="per mpnth" price="$2000000"/>
                        <Prices months="Jan-Apr-Oct-Dec" time="per week" price="$500000"/>
                        <Prices months="Jan-Apr-Oct-Dec" time="per week" price="$1500000"/>
                        <Row>
                            <Typography style={{padding:'30px', marginTop:'60px'}}>
                            Tell people more about what you do. Use this space to describe your products or services. Highlight their benefits so they feel compelled to click.
                            <br/>
                            <br/>
                            Tell people more about what you do. Use this space to describe your products or services. Highlight their benefits so they feel compelled to click.
                            </Typography>
                            <Col md={12} lg={12} style={{textAlign:'center'}}>
                                <TemplateButton>CALL TO ACTION</TemplateButton>
                            </Col>
                        </Row>
                        <Row>
                        <Typography variant="h2" style={{padding:'30px', marginTop:'60px'}}>What people are saying</Typography>
                        <Row style={{padding:'0 30px'}}>
                            <FeedBack name="Mike Smith" comment="Add testimonial quotes from actual people who use your products. Their feedback can build trust and help your visitors make up their mind."/>
                            <Col md={1} lg={1}></Col>
                            <FeedBack name="Mike Smith" comment="Add testimonial quotes from actual people who use your products. Their feedback can build trust and help your visitors make up their mind."/>
                        </Row>
                        <Row style={{padding:'0 30px'}}>
                            <FeedBack name="Mike Smith" comment="Add testimonial quotes from actual people who use your products. Their feedback can build trust and help your visitors make up their mind."/>
                            <Col md={1} lg={1}></Col>
                            <FeedBack name="Mike Smith" comment="Add testimonial quotes from actual people who use your products. Their feedback can build trust and help your visitors make up their mind."/>
                        </Row>
                    </Row>
                    </Col>
                    <Col xs={1} sm={1} md={1} lg={1}></Col>
                </Row>
            </Col>
            <Poster xs={12} sm={12} md={12} lg={12} image="https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/37756f29-abac-4dd7-918e-2e6d6d4dce45.png"/>
        </Row>
    )
}

export default Pricing;
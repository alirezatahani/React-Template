import { Col, Row } from "@components/grid";
import React from "react";
import IntroduceContent from "./IntroduceContenct";

 export type IntrodiuceTypes = {
    image1: string;
    image2: string;
    image3: string;
    title1: string;
    title2: string;
    title3: string;
    text1: string;
    text2: string;
    text3: string;
    buttonText1?: string;
    buttonText2?: string;
    buttonText3?: string;
    home?: boolean;
}

const IntroduceWithImage = ({image1, image2, image3, title1, title2, title3, text1, text2, text3,buttonText1, buttonText2, buttonText3}: IntrodiuceTypes) => {
    return(
        <Col xs={12}>
            <Row>
                <Col xs={12} lg={4} style={{backgroundColor:'rgb(249, 160, 32)', padding:'30px', borderRadius:'40px 0 0 40px'}}>
                    <IntroduceContent
                        image={image1}
                        title={title1}
                        text={text1}
                        buttonText={buttonText1}
                    />
                </Col>
                <Col xs={12} lg={4} style={{backgroundColor:'rgb(255, 201, 0)', padding:'30px'}}>
                    <IntroduceContent
                        image={image2}
                        title={title2}
                        text={text2}
                        buttonText={buttonText2}
                    />
                </Col>
                <Col xs={12} lg={4} style={{backgroundColor:'rgb(186, 223, 96)', padding:'30px', borderRadius:'0 40px 40px 0'}}>
                    <IntroduceContent
                        image={image3}
                        title={title3}
                        text={text3}
                        buttonText={buttonText3}
                    />
                </Col>
            </Row>
        </Col>
    )
}

export default IntroduceWithImage;
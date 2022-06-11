import { Col, Row } from "@components/grid";
import { Image } from "@components/image";
import { Typography } from "@components/typography";
import { VerticalLineContainer } from "@templates/designed/74/styles/design74.style";
import React from "react";

const List: React.FC<any> = ({title, image, items}: any) => {
    
    const firstSeperatedArray = items.splice(3);
    const firstColumn = items.map((item: string, index:number)=> 
        <ul>
            <li key={index}>{item}</li>
        </ul>
    )

    const secoundSeperatedArray = firstSeperatedArray.splice(3);
    const secoundColumn = firstSeperatedArray.map((item: string, index:number)=>
        <ul>
            <li key={index}>{item}</li>
        </ul>
    )

    const thirdColumn = secoundSeperatedArray.map((item: string, index:number)=> 
        <ul>
            <li key={index}>{item}</li>
        </ul>
    )

    return(
        <div style={{padding:'50px 0'}}>
            <Row>
                <Col md={12} lg={1}>
                    <Image src={image} width={"40px"} height={"40px"}/>
                </Col> 
                <Col md={12} lg={11}>{title}</Col>
            </Row>
            <br/>
            <Row>
                <Col xs={12} sm={12} md={12} lg={3}>
                    <Typography variant='h3'>Bedroom #1</Typography>
                    <br/>
                    {firstColumn}
                </Col>
                <Col lg={1}><VerticalLineContainer/></Col>
                <Col xs={12} sm={12} md={12} lg={3}>
                    <Typography variant='h3'>Bedroom #1</Typography>
                    <br/>
                    {secoundColumn}
                </Col>
                <Col lg={1}><VerticalLineContainer/></Col>
                <Col xs={12} sm={12} md={12} lg={3}>
                    <Typography variant='h3'>Bedroom #1</Typography>
                    <br/>
                    {thirdColumn}
                </Col>
            </Row>
        </div>
    )
}

export default List;
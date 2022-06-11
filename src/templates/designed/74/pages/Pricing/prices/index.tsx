import { Col, Row } from "@components/grid";
import { Typography } from "@components/typography";
import { PriceTypes } from "@templates/designed/74/styles/design74.style";
import React from "react";

const Prices: React.FC<PriceTypes> = ({months, time, price}: PriceTypes) => {
    return(
        <Row style={{borderBottom:'2px solid #FFDE00FF'}}>
            <Col xs={12} sm={12} md={12} lg={2} style={{padding:'25px'}}>
                <Typography>{months}</Typography>
            </Col>
            <Col xs={12} sm={12} md={12} lg={8} style={{padding:'25px'}}>
                <Typography>{time}</Typography>
            </Col>
            <Col xs={12} sm={12} md={12} lg={2} style={{textAlign:'right'}}>
                <Typography variant="h3" style={{color:'#297EDDFF'}}>{price}</Typography>
            </Col>
        </Row>
    )
}

export default Prices;
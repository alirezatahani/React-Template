import { Col, Row } from '../../../../../../../components/grid';
import { Space } from '../../../../../../../components/space';
import { Typography } from '../../../../../../../components/typography';
import { MenuItemContainer, MenuItemProps, PizzaRoundedImage } from '../../../../styles/design51.styles';
import * as React from 'react';

const MenuItem: React.FC<MenuItemProps> = ({src, title, text, price}: MenuItemProps) => {
    return(
        <Row> 
            <Col md={1}></Col>
            <Col md={10}>
                <MenuItemContainer>
                    <Col xs={12} sm={12} md={12} lg={3}>
                        <PizzaRoundedImage src={src}/>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={7} style={{padding:'20px 40px'}}>
                        <Typography variant='h4'>{title}</Typography>
                        <br/>
                        <Typography variant='body1'>{text}</Typography>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={2} style={{padding:'20px 40px'}}>
                        <Space>
                            <Typography variant='h3' strong style={{color:'#EC1212FF'}}>{price}</Typography>
                        </Space>
                    </Col>
                </MenuItemContainer>
            </Col>
            <Col md={1}></Col>
        </Row>
    )
}

export default MenuItem;
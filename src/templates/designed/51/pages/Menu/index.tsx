import { Col, Container, Image, Row, Space, Typography } from '../../../../../components';
import * as React from 'react';
import {BottomRow, CallToActionButton, HeroContainer, MenuItemContainer, PizzaRoundedImage} from '../../styles/design51.styles';
import MenuItem from './components/MenuItem';

const Menu: React.FC = () => {
    return(
        <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
                <HeroContainer image='https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/1ede5857-d0b6-4c36-b39d-8666d1f56d47.png'>
                    <Space align='center'>
                        <Typography variant='h2' strong style={{color:'white'}}>Menu</Typography>
                    </Space>
                </HeroContainer>
            </Col>
            <Row>
                <MenuItem 
                    src='https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/28f237fe-2073-4c99-901a-b6149a6ead60.png' 
                    title='ADD YOUR TITLE' 
                    text="Use this space to elaborate on your headline and connect with your visitors. You can build on the first idea or add your second point. Now that you've got your visitors' attention, let them know what they can expect, and encourage them to explore your site."
                    price='$6.99'
                />
                <MenuItem src='https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/d2df2e7a-7b12-4967-b511-47dac43ea55c.png'
                    title='ADD YOUR TITLE' 
                    text="Use this space to elaborate on your headline and connect with your visitors. You can build on the first idea or add your second point. Now that you've got your visitors' attention, let them know what they can expect, and encourage them to explore your site."
                    price='$9.99'
                />
                <MenuItem src='https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/310328fa-17c2-458b-86d1-1fbf9dd9020d.png'
                    title='ADD YOUR TITLE' 
                    text="Use this space to elaborate on your headline and connect with your visitors. You can build on the first idea or add your second point. Now that you've got your visitors' attention, let them know what they can expect, and encourage them to explore your site."
                    price='$7.99'
                />
                <MenuItem src='https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/ae28724c-df81-4f5f-b685-ca17bee27a73.png'
                    title='ADD YOUR TITLE' 
                    text="Use this space to elaborate on your headline and connect with your visitors. You can build on the first idea or add your second point. Now that you've got your visitors' attention, let them know what they can expect, and encourage them to explore your site."
                    price='$7.99'
                />
                <MenuItem src='https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/f73af83c-a49e-47a1-90d8-2797a3d51961.png'
                    title='ADD YOUR TITLE' 
                    text="Use this space to elaborate on your headline and connect with your visitors. You can build on the first idea or add your second point. Now that you've got your visitors' attention, let them know what they can expect, and encourage them to explore your site."
                    price='$9.99'
                />
                <MenuItem src='https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/d1ef202c-fd23-4606-be56-dd72be51221b.png'
                    title='ADD YOUR TITLE' 
                    text="Use this space to elaborate on your headline and connect with your visitors. You can build on the first idea or add your second point. Now that you've got your visitors' attention, let them know what they can expect, and encourage them to explore your site."
                    price='$8.99'
                />
            </Row>
            <Col xs={12} sm={12} md={12} style={{padding:0}}>
                <BottomRow image='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjIwNTE0NzM&ixlib=rb-1.2.1&w=1588&h=1920&crop=faces&fit=crop&fm=webp&q=75'>
                    <Col style={{padding:'100px 0'}}>
                    <Space align='center'>
                        <Space align='center'>
                            <Typography variant='h2' strong style={{color:'white'}}>INTRODUCE YOUR IDEA</Typography>
                        </Space>
                    </Space>
                    <br/>
                    <Space align='center'>
                        <CallToActionButton style={{backgroundColor:'rgb(236, 18, 18)', marginTop:'10px'}}>CALL TO ACTION</CallToActionButton>
                    </Space>
                    </Col>
                </BottomRow>
            </Col>
        </Row>
    )
}

export default Menu;
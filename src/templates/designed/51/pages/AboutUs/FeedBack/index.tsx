import { Col } from '../../../../../../components';
import { Typography } from '../../../../../../components';
import * as React from 'react';

const FeedBack: React.FC = () => {
    return(
        <Col lg={5} style={{padding:'50px'}}>
            <Typography>
                "Add testimonial quotes from actual people who use your products. Their feedback can build trust and help your visitors make up their mind."
            </Typography>
            <br/>
            <Typography>
                Mike Smith
            </Typography>
        </Col>
    )
}

export default FeedBack;
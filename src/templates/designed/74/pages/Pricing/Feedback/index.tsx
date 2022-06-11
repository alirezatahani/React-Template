import { Col } from '../../../../../../components';
import { Typography } from '../../../../../../components';
import * as React from 'react';
import { FeedbackTypes } from '@templates/designed/74/styles/design74.style';

const FeedBack: React.FC<FeedbackTypes> = ({name, comment}: FeedbackTypes) => {
    return(
        <Col lg={5} style={{padding:'50px'}}>
            <Typography>
                {comment}
            </Typography>
            <br/>
            <Typography strong>
                {name}
            </Typography>
        </Col>
    )
}

export default FeedBack;
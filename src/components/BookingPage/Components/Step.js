import Steps from "rc-steps";
import React from "react";
import Fade from 'react-reveal';
import 'rc-steps/assets/index.css';

const Step = ({ current = 0 }) => {

    return (
        <Fade left>
            <div style={{ margin: '20px' }} >
                <Steps
                    current={current}
                    items={[
                        { title: 'Get Started' },
                        { title: 'Booking Details', },
                        { title: 'Payment Details', },
                    ]}
                />
            </div>
        </Fade>
    )
}

export default Step;

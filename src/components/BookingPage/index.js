import { useEffect, useState } from "react";
import './index.css';
import BookingCard from "./Components/BookingCard";
import BookingDetails from "./Components/BookingDetails";
import { Col, Row } from "reactstrap";
import BookingPayment from "./Components/BookingPayment";
import Step from "./Components/Step";
import { PaymentMode } from "res/constants";
import Swal from "sweetalert2";
import BookingAPI from "res/apis/booking";

const BookingPage = () => {

    const [index, setIndex] = useState(0);

    const [travelInfo, setTravelInfo] = useState({
        pickupLocation: '',
        destLocation: '',
        startAt: new Date(),
        payment_mode: PaymentMode.ONE_WAY
    })

    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    })

    const [paymentInfo, setPaymentInfo] = useState({
        paymentMethodID: ''
    })

    const handleNext = () => {
        if (index < 2)
            setIndex(prev => prev + 1);
    }

    useEffect(() => {
        if (paymentInfo?.paymentMethodID) {
            const data = { travelInfo, userInfo, paymentInfo };
            BookingAPI.bookOneTime(data).then(result => {
                Swal.fire({
                    icon: 'success',
                    title: 'Booking Success!',
                    text: 'A New Booking is successfully created!'
                }).then((result) => {
                });
                console.log('Booking Result: ', result);
            }).catch(e => { console.log(e) })
        }
    }, [paymentInfo?.paymentMethodID])

    const handlePrev = () => {
        setIndex(prev => prev - 1);
    }

    return (
        <div style={{ marginTop: '30px' }}>
            <Row>
                <Col>
                    <Step current={index} />
                </Col>
                {index == 0 && <Col>
                    <BookingCard
                        onClick={handleNext}
                        travelInfo={travelInfo}
                        setTravelInfo={setTravelInfo}
                    />
                </Col>}
                {index == 1 && <Col>
                    <BookingDetails
                        onClick={handleNext}
                        onPrev={handlePrev}
                        travelInfo={travelInfo}
                        setTravelInfo={setTravelInfo}
                        userInfo={userInfo}
                        setUserInfo={setUserInfo}
                    />
                </Col>}
                {index == 2 && <Col>
                    <BookingPayment
                        onClick={handleNext}
                        onPrev={handlePrev}
                        paymentInfo={paymentInfo}
                        setPaymentInfo={setPaymentInfo}
                    />
                </Col>}
            </Row>
        </div>
    )
}

export default BookingPage;
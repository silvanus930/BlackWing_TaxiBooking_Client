import { useState } from "react";
import './index.css';
import BookingCard from "./Components/BookingCard";
import BookingDetails from "./Components/BookingDetails";
import { Col, Row } from "reactstrap";
import BookingPayment from "./Components/BookingPayment";

const BookingPage = () => {

    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex(prev => prev + 1);
    }

    const handlePrev = () => {
        setIndex(prev => prev - 1);
    }

    return (
        <div>
            <Row>
                <Col>
                    <BookingCard onClick={handleNext} />
                </Col>
                {index >= 1 && <Col>
                    <BookingDetails onClick={handleNext} onPrev={handlePrev} />
                </Col>}
                {index >= 2 && <Col>
                    <BookingPayment onClick={handleNext} onPrev={handlePrev} />
                </Col>}
            </Row>
        </div>
    )
}

export default BookingPage;
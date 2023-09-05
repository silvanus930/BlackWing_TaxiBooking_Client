import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";;

const BookingPayment = ({ onClick, onPrev }) => {

    const stripe = useStripe();
    const elements = useElements();

    const createSubscription = async () => {
        try {

            const paymentMethod = await stripe?.createPaymentMethod({
                type: "card",
                card: elements?.getElement(CardElement),
                billing_details: {},
            });

            console.log('PaymentMethod: ', paymentMethod);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="cart_container m-3">
            <h3 className="justify-content-center d-flex">YOUR BILLING DETAILS</h3>
            <div>
                <div className="form-floating mt-3 mb-3">
                    <input type="text" class="form-control" id="firstname" name="firstname" />
                    <label>Company Name</label>
                </div>
                <div className="form-floating mt-3 mb-3">
                    <input type="text" class="form-control" id="lastname" name="lastname" />
                    <label>Billing Address</label>
                </div>
                <div className="form-floating mt-3 mb-3">
                    <input type="text" class="form-control" id="lastname" name="lastname" />
                    <label>City</label>
                </div>
                <div className="form-floating mt-3 mb-3">
                    <input type="text" class="form-control" id="lastname" name="lastname" />
                    <label>Post/Zip Code</label>
                </div>
                <div className="form-floating mt-3 mb-3">
                    <input type="text" class="form-control" id="lastname" name="lastname" />
                    <label>Country</label>
                </div>
            </div>

            <div className="stripe-image mb-4" />
            <div className="form-control mb-4" style={{ height: '30px' }}>
                <CardElement />
            </div>

            <button type="button" class="btn btn-primary" onClick={createSubscription}>
                <label>CONFIRM BOOKING</label>
                <i class="fas fa-arrow-right ml-5" />
            </button>
            <button type="button" class="btn btn-secondary mt-3" onClick={onPrev}>
                <i class="fas fa-arrow-left mr-5" />
                <label>PREVIOUS STEP</label>
            </button>
        </div>
    );
}

export default BookingPayment;
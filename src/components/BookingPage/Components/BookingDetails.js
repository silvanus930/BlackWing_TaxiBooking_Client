import { useState } from "react";
import DatePicker from "react-datepicker";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const BookingDetails = ({ onClick, onPrev }) => {

    const [startDate, setStartDate] = useState(new Date());
    const [value, setValue] = useState()
    const handleClick = () => {

    }

    const hourValues = ['Number of Passengers', 1, 2, 3];

    return (
        <div className="cart_container m-3">
            <h3 className="justify-content-center d-flex">BOOKING DETAILS</h3>
            <button type="button" class="btn btn-primary mb-3" onClick={handleClick}>
                <i class="fas fa-calendar-alt mr-5" />
                <label>CHOOSE TIME</label>
            </button>
            <div style={{ gap: '10px', display: 'flex' }}>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="form-control date-picker d-flex" />
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="form-control date-picker d-flex" />
            </div>
            <div>
                <div className="form-floating mt-3 mb-3">
                    <input type="text" class="form-control" id="firstname" name="firstname" />
                    <label>First Name <span style={{ color: 'red' }}>*</span></label>
                </div>
                <div className="form-floating mt-3 mb-3">
                    <input type="text" class="form-control" id="lastname" name="lastname" />
                    <label>Last Name <span style={{ color: 'red' }}>*</span></label>
                </div>
                <div>
                    <label className="ml-1" style={{ color: '#777' }}>Phone Number <span style={{ color: 'red' }}>*</span></label>
                    <PhoneInput
                        className="form-control mb-3"
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue} />
                </div>

                <div className="form-floating mt-3 mb-3">
                    <input type="text" class="form-control" id="lastname" name="lastname" />
                    <label>Email <span style={{ color: 'red' }}>*</span></label>
                </div>
                <select className="form-select mb-3">
                    {hourValues.map(value => <option id={`select_${value}`}>{value}</option>)}
                </select>
            </div>

            <button type="button" class="btn btn-primary" onClick={onClick}>
                <label>Go To Payment</label>
                <i class="fas fa-arrow-right ml-5" />
            </button>
            <button type="button" class="btn btn-secondary mt-3" onClick={onPrev}>
                <i class="fas fa-arrow-left mr-5" />
                <label>Go Back</label>
            </button>
        </div>
    );
}

export default BookingDetails;
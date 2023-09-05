import { useState } from "react";

const BookingCard = ({ onClick }) => {

    const [isOneWay, setOneWay] = useState(true);

    const handleChangeMode = () => {
        setOneWay(!isOneWay);
    }

    const hourValues = ['Hire Duration', '3 hours', '4 hours', '5 hours', '6 hours', '7 hours', '8 hours', '9 hours', '10 hours', '11 hours', '12 hours', '13 hours'];

    return (
        <div className="cart_container m-3">
            <h3 className="justify-content-center d-flex">GET A PRICE & BOOK</h3>
            <div className="btn-group">
                <button type="button" class={`btn_top ${isOneWay ? 'btn_active' : 'btn_inActvie'}`} onClick={handleChangeMode}>One Way</button>
                <button type="button" class={`btn_top ${!isOneWay ? 'btn_active' : 'btn_inActvie'}`} onClick={handleChangeMode}>By The Hour</button>
            </div>

            {isOneWay &&
                <div>
                    <div className="form-floating mt-3 mb-3">
                        <input type="text" class="form-control" id="desc" placeholder="Enter Destination Address" name="desc" />
                        <label for="pwd">Where From: </label>
                    </div>
                    <div class="form-floating mt-3 mb-3">
                        <input type="text" class="form-control" id="desc" placeholder="Enter Destination Address" name="desc" />
                        <label for="pwd">Where To:</label>
                    </div>
                </div>}

            {!isOneWay &&
                <div>
                    <div className="form-floating mt-3 mb-3">
                        <input type="text" class="form-control" id="desc" placeholder="Enter Destination Address" name="desc" />
                        <label for="pwd">Where From: </label>
                    </div>
                    <select className="form-select mb-3">
                        {hourValues.map(value => <option id={`select_${value}`}>{value}</option>)}
                    </select>
                </div>}

            <button type="button" class="btn btn-primary" onClick={onClick}>
                <label>Continue Book</label>
                <i class="fas fa-arrow-right ml-5" />
            </button>
        </div>
    );
}

export default BookingCard;
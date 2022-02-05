import React from 'react';
import FieldWithLabel from "../../components/inputs/field-with-label";
import apple from "../../../images/apay.jpg";
import visa from "../../../images/visa.png";
import paypal from "../../../images/paypal.png";


function payment() {
    return (
        <div className="p-md-2 px-md-0">
            <h3>Payment:</h3>
            <div className="p-md-2">
                <input type="checkbox"/>
                <label>Apple Pay</label>
                <span className="float-end">
                    <img className="" width="67px" height="35px" alt="Apple logo" src={apple} />
                </span>
            </div>
            <hr/>
            <div className="p-md-2">
                <input type="checkbox"/>
                <label>Pay Pal</label>
                <span className="float-end">
                    <img className="" width="100px" height="30px" alt="paypal logo" src={paypal}/>
                </span>
            </div>
            <hr/>
            <div className="p-md-2">
                <input type="checkbox"/>
                <label>Credit or debit card</label>
                <span className="float-end">
                    <img className="" width="130px" height="30px" alt="visa logo" src={visa}/>
                </span>
            </div>

            <div className="d-md-flex">
                <FieldWithLabel type="tel" pattern="[0-9]{16}" label="Card number" id=""/>
                <FieldWithLabel type="text" label="Expiration date" id=""/>
                <FieldWithLabel type="text" label="CVV code" id=""/>
            </div>


        </div>
    )
}

export default payment

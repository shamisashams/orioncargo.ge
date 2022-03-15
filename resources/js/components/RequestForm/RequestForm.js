import React from "react";
import Calendar from "/img/icons/form/calendar.svg";
import Mail from "/img/icons/form/mail.svg";
import Pin from "/img/icons/form/pin.svg";
import Tel from "/img/icons/form/tel.svg";
import { MainButton } from "../MainButton/MainButton";
import "./RequestForm.css";

const RequestForm = () => {
    const inputs = [
        {
            placeholder: __("from"),
            icon: Pin,
            type: "text",
        },
        {
            placeholder: __("to"),
            icon: Pin,
            type: "text",
        },
        {
            placeholder: __("Date"),
            icon: Calendar,
            type: "date",
        },
        {
            placeholder: __("your_email"),
            icon: Mail,
            type: "text",
        },
        {
            placeholder: __("your_phone"),
            icon: Tel,
            type: "tel",
        },
    ];
    return (
        <div className="request_form">
            <h6 className="bold">{__("get_a_quote")}</h6>
            <p>{__("on_time_deliver")}</p>
            {inputs.map((item) => {
                return (
                    <div className="input">
                        <img src={item.icon} alt="" />
                        <input
                            type={item.type}
                            placeholder={item.placeholder}
                        />
                    </div>
                );
            })}
            <MainButton link="/" text={__("send_request")} />
        </div>
    );
};

export default RequestForm;

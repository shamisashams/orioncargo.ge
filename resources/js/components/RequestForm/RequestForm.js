import React from "react";
import Calendar from "/img/icons/form/calendar.svg";
import Mail from "/img/icons/form/mail.svg";
import Pin from "/img/icons/form/pin.svg";
import { MainButton } from "../MainButton/MainButton";
import "./RequestForm.css";

const RequestForm = () => {
  const inputs = [
    {
      placeholder: "From",
      icon: Pin,
      type: "text",
    },
    {
      placeholder: "To",
      icon: Pin,
      type: "text",
    },
    {
      placeholder: "Date",
      icon: Calendar,
      type: "date",
    },
    {
      placeholder: "Your email",
      icon: Mail,
      type: "text",
    },
  ];
  return (
    <div className="request_form">
      <h6 className="bold">Get a quote</h6>
      <p>We deliever your package in no time</p>
      {inputs.map((item) => {
        return (
          <div className="input">
            <img src={item.icon} alt="" />
            <input type={item.type} placeholder={item.placeholder} />
          </div>
        );
      })}
      <MainButton link="/" text="send request" />
    </div>
  );
};

export default RequestForm;

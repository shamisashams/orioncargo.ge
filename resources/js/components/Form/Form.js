import React from "react";
import { MainButton } from "../MainButton/MainButton";
import "./Form.css";

const Form = () => {
  const inputs = [
    {
      placeholder: __("name_surname"),
      type: "text",
    },
    {
      placeholder: __("phone_number"),
      type: "tel",
    },
    {
      placeholder: __("email_address"),
      type: "text",
    },
  ];
  return (
    <div className="form">
      <div className="gil30">
          {__("more_questions")}<br />
          {__("get_in_touch")}
      </div>
      {inputs.map((item) => {
        return <input type={item.type} placeholder={item.placeholder} />;
      })}
      <textarea placeholder={__("your_message_here")}></textarea>
      <MainButton text={__("send_message")} link="/" />
    </div>
  );
};

export default Form;

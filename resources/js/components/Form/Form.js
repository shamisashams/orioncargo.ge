import React from "react";
import { MainButton } from "../MainButton/MainButton";
import "./Form.css";

const Form = () => {
  const inputs = [
    {
      placeholder: "Enter your name and surname here",
      type: "text",
    },
    {
      placeholder: "Your phone number is",
      type: "tel",
    },
    {
      placeholder: "Tell us your email address",
      type: "text",
    },
  ];
  return (
    <div className="form">
      <div className="gil30">
        Have Some More Questions? <br />
        Get In Touch!
      </div>
      {inputs.map((item) => {
        return <input type={item.type} placeholder={item.placeholder} />;
      })}
      <textarea placeholder="You can leave your message here"></textarea>
      <MainButton text="send message" link="/" />
    </div>
  );
};

export default Form;

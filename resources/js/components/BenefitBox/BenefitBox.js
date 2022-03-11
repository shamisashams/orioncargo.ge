import React from "react";
import "./BenefitBox.css";

export const BenefitBox = (props) => {
  return (
    <div className="benefit_box">
      <div className="title">
        <img src={props.icon} alt="" />
        <div className="gilroy">{props.title}</div>
      </div>
      <p>{props.para}</p>
      <img className="abs_icon" src={props.icon} alt="" />
    </div>
  );
};

import React from "react";
import "./ContactInfo.css";

export const ContactInfo = () => {
  const info = [
    {
      title: "working hours",
      p1: "Monday - friday",
      p2: "09:00 - 19:00",
    },
    {
      title: "Address",
      p1: "street name #",
      p2: "Tbilisi, Georgia",
    },
    {
      title: "phone",
      p1: "+995 0322 14 15 16",
      p2: "+995 0322 14 15 16",
    },
  ];
  return (
    <div className="contact_info flex">
      {info.map((item) => {
        return (
          <div className="column">
            <h6>{item.title}</h6>
            <p className="bold">{item.p1}</p>
            <p className="bold">{item.p2}</p>
          </div>
        );
      })}
    </div>
  );
};

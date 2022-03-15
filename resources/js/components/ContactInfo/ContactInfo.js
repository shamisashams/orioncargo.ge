import React from "react";
import "./ContactInfo.css";

export const ContactInfo = () => {
    const info = [
        {
            title: __("working_hours"),
            p1: __("days"),
            p2: __("hours"),
        },
        {
            title: __("address"),
            p1: __("street_name"),
            p2: __("country"),
        },
        {
            title: __("phone"),
            p1: "+995 558 677 991",
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

import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { CircledArrow } from "../Icons/Icons";
import "./ServiceBox.css";

export const ServiceBox = (props) => {
  return (
    <Link href={props.link}>
      <div className={props.bg ? "service_box bg" : "service_box"}>
        <div className="icon">{props.icon}</div>
        <div className="gilroy">{props.title}</div>
        <p>{props.para}</p>
        <CircledArrow color="#202387" link="/" degree="-90" />
      </div>
    </Link>
  );
};

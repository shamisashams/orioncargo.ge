import React from "react";
import { Link } from "@inertiajs/inertia-react";
import "./ProjectBox.css";
import Plus from "/img/icons/other/plus.svg";

export const ProjectBox = (props) => {
    // console.log(props.slug)
  return (
    // <Link href={route("client.project.show", props.slug)}>
      <div className="project_box">
        <div className="img">
          <div className="plus flex centered">
            <img src={Plus} alt="" />
          </div>
          <img className="project_img" src={props.img} alt="" />
        </div>
        <h5>{props.name}</h5>
        <p style={{ opacity: "0.5" }}>{props.description}</p>
      </div>
    // </Link>
  );
};

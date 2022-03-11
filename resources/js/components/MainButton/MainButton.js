import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { Arrow } from "../Icons/Icons";
import "./MainButton.css";

export const MainButton = ({ link, text }) => {
  return (
    <Link href={link}>
      <button className="main_button flex centered">
        <div className="bold">{text}</div>
        <Arrow color="#fff" degree="-90" />
      </button>
    </Link>
  );
};

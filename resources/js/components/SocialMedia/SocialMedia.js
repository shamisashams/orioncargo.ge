import React from "react";
import Fb from "/img/icons/sm/fb.svg";
import Tw from "/img/icons/sm/tw.svg";
import Gp from "/img/icons/sm/gp.svg";
import In from "/img/icons/sm/in.svg";
import { Link } from "@inertiajs/inertia-react";
import "./SocialMedia.css";

const SocialMedia = ({ background }) => {
  const socials = [
    {
      icon: Fb,
      link: "/",
    },
    {
      icon: Tw,
      link: "/",
    },
    {
      icon: Gp,
      link: "/",
    },
    {
      icon: In,
      link: "/",
    },
  ];
  return (
    <div className="socialmedia flex centered">
      {socials.map((item) => {
        return (
          <Link href={item.link}>
            <button
              className={background ? "flex centered bged" : "flex centered"}
            >
              <img src={item.icon} alt="" />
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default SocialMedia;

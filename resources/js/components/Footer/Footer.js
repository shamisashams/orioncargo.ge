import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { ContactInfo } from "../ContactInfo/ContactInfo";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./Footer.css";

const Footer = () => {
  const navs = [
    {
      name: "Home",
      link: route('client.home.index'),
    },
    {
      name: "About us",
      link: route('client.about.index'),
    },
    {
      name: "Services",
      link: route('client.services.index'),
    },
    {
      name: "projects",
      link: route('client.projects.index'),
    },
    {
      name: "Contact",
      link: route('client.contact.index'),
    },
  ];
  return (
    <div className="footer">
      <div className="wrapper flex top">
        <div className="navbar">
          {navs.map((item) => {
            return (
              <Link href={item.link} className="bold nav_link">
                {item.name}
              </Link>
            );
          })}
        </div>
        <SocialMedia />
      </div>
      <div className="bottom">
        <div className="wrapper">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Footer;

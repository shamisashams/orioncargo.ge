import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { ContactInfo } from "../ContactInfo/ContactInfo";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./Footer.css";

const Footer = () => {
    const navs = [
        {
            name: __("home"),
            link: route("client.home.index"),
        },
        {
            name: __("about"),
            link: route("client.about.index"),
        },
        {
            name: __("services"),
            link: route("client.services.index"),
        },
        // {
        //   name: __("projects"),
        //   link: route('client.projects.index'),
        // },
        {
            name: __("contact"),
            link: route("client.contact.index"),
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

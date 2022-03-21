import React, { useState, Suspense } from "react";
import { Link } from "@inertiajs/inertia-react";
import Logo from "/img/logo/dark.svg";
import LogoWhite from "/img/logo/white.svg";
import { Arrow, Globe } from "../Icons/Icons";
import "./Header.css";
import { usePage } from "@inertiajs/inertia-react";

// import { useTranslation } from "react-i18next";

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    // const { i18n, t } = useTranslation();

    const toggleNav = () => {
        setShowNav(!showNav);
    };
    const { pathname, locales, currentLocale, locale_urls } = usePage().props;

    let theme = "#202387";

    if (pathname === route("client.home.index")) {
        theme = "#fff";
    }

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
        //   link: route("client.projects.index"),
        // },
        {
            name: __("contact"),
            link: route("client.contact.index"),
        },
    ];

    return (
        <Suspense fallback="loading">
            <div className="header" style={{ color: theme }}>
                <div className="wrapper flex">
                    <div className="flex">
                        <Link
                            href={route("client.home.index")}
                            className="logo"
                        >
                            <img
                                style={{
                                    display:
                                        pathname !== route("client.home.index")
                                            ? "block"
                                            : "none",
                                }}
                                src={Logo}
                                alt=""
                            />
                            <img
                                style={{
                                    display:
                                        pathname === route("client.home.index")
                                            ? "block"
                                            : "none",
                                }}
                                className="white_logo"
                                src={LogoWhite}
                                alt=""
                            />
                        </Link>
                        <div className={showNav ? "navbar show" : "navbar"}>
                            {navs.map((item, i) => {
                                return (
                                    <Link
                                        key={i}
                                        href={item.link}
                                        className={
                                            pathname === item.link
                                                ? "bold nav_link active"
                                                : "bold nav_link"
                                        }
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex">
                        <div
                            className="languages"
                            style={{
                                opacity:
                                    pathname === route("client.home.index")
                                        ? "0.6"
                                        : "1",
                            }}
                        >
                            <div className="on flex">
                                <Globe color={theme} />
                                {/* <a href={locale_urls[currentLocale]}>
                                    
                                </a> */}
                                <div>{locales[currentLocale].name}</div>
                                <Arrow color={theme} degree="0" />
                            </div>
                            <div className="drop">
                                {Object.keys(locales).map((lng, i) => {
                                    if (lng !== currentLocale) {
                                        return (
                                            <a
                                                href={locale_urls[lng]}
                                                key={lng}
                                                type="submit"
                                            >
                                                {locales[lng].name}
                                            </a>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                        <div
                            className={
                                showNav ? "menu_btn clicked" : "menu_btn "
                            }
                            onClick={() => toggleNav()}
                        >
                            <div
                                className="span"
                                style={{ backgroundColor: theme }}
                            ></div>
                            <div
                                className="span"
                                style={{ backgroundColor: theme }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    );
};
export default Header;

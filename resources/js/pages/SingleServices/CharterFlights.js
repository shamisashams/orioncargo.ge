import React from "react";
import Background from "/img/service/bg.png";
import {
    Charter,
    Cool,
    Danger,
    Plane,
    Shipping,
    Truck,
    Document,
} from "../../components/Icons/Icons";
import { ServiceBox } from "../../components/ServiceBox/ServiceBox";
import "./SingleServices.css";
import Layout from "../../Layouts/Layout";

const CharterFlights = () => {
    const bullets = [
        __("charter_bullet_1"),
        __("charter_bullet_2"),
        __("charter_bullet_3"),
        __("charter_bullet_4"),
        __("charter_bullet_5"),
        __("charter_bullet_6"),
        __("charter_bullet_7"),
        __("charter_bullet_8"),
        __("charter_bullet_9"),
        __("charter_bullet_10"),
        __("charter_bullet_11"),
        __("charter_bullet_12"),
        __("charter_bullet_13"),
    ];
    const services = [
        {
            link: route("client.services.show", "AirFreight"),
            icon: <Plane />,
            title: __("air_freight"),
            para: __("air_freight_desc"),
        },
        {
            link: route("client.services.show", "LandFreight"),
            icon: <Truck />,
            title: __("land_freight"),
            para: __("land_freight_desc"),
        },
        {
            link: route("client.services.show", "Refrigerated"),
            icon: <Cool />,
            title: __("refrigerated_cargo"),
            para: __("refrigerated_cargo_desc"),
        },
        {
            link: route("client.services.show", "CharterFlights"),
            icon: <Charter />,
            title: __("charter_flights"),
            para: __("charter_flights_desc"),
        },
        {
            link: route("client.services.show", "DangerousGood"),
            icon: <Danger />,
            title: __("good_shipping"),
            para: __("good_shipping_desc"),
        },
        {
            link: route("client.services.show", "Brokrtage"),
            icon: <Document />,
            title: __("customs_brokerage_services"),
            para: __("customs_brokerage_services_desc"),
        },
    ];
    return (
        <Layout>
            <div className="pages singleService">
                <img className="background" src={Background} alt="" />
                <div className="headline">
                    <div className="wrapper">
                        <div className="title">
                            <Charter color="#fff" />
                            <div className="gilroy">
                                {__("charter_flights")}
                            </div>
                        </div>
                        <p style={{ opacity: "0.5" }}>{__("we_offer")}</p>
                    </div>
                </div>
                <div className="container">
                    <div className="flex main">
                        <div className="img">
                            <img src="/img/service/5.png" alt="" />
                        </div>
                        <div className="context">
                            <div className="gilroy">
                                {__("charter_flights")}
                            </div>
                            <p>{__("charter_para_1")}</p>
                            {/* <p>{__("charter_para_2")}</p> */}
                            <ul>
                                {bullets.map((bullet, i) => {
                                    return (
                                        <li key={i} className="bold">
                                            {bullet}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="gilroy more_options_title">
                        See more options
                    </div>
                    <div className="other_options">
                        {services.map((item, i) => {
                            return (
                                <ServiceBox
                                    key={i}
                                    link={item.link}
                                    icon={item.icon}
                                    title={item.title}
                                    //   para={item.para}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CharterFlights;

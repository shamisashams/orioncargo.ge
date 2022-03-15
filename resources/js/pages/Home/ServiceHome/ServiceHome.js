import React from "react";
import {
    Charter,
    Cool,
    Danger,
    Plane,
    Shipping,
    Truck,
    Document,
} from "../../../components/Icons/Icons";
import { ServiceBox } from "../../../components/ServiceBox/ServiceBox";
import "./ServiceHome.css";
import { MainButton } from "../../../components/MainButton/MainButton";

const ServiceHome = () => {
    const services = [
        {
            link: route("client.services.show", "AirFreight"),
            icon: <Plane />,
            title: __("air_freight"),
            // para: __("air_freight_desc"),
        },
        {
            link: route("client.services.show", "LandFreight"),
            icon: <Truck />,
            title: __("land_freight"),
            // para: __("land_freight_desc"),
        },
        // {
        //   link: route('client.services.show', "CargoShip"),
        //   icon: <Shipping />,
        //     title: __("cargo_shipping"),
        //     // para: __("cargo_shipping_desc"),
        // },
        {
            link: route("client.services.show", "Refrigerated"),
            icon: <Cool />,
            title: __("refrigerated_cargo"),
            // para: __("refrigerated_cargo_desc"),
        },
        {
            link: route("client.services.show", "CharterFlights"),
            icon: <Charter />,
            title: __("charter_flights"),
            // para: __("charter_flights_desc"),
        },
        {
            link: route("client.services.show", "DangerousGood"),
            icon: <Danger />,
            title: __("good_shipping"),
            // para: __("good_shipping_desc"),
        },
        {
            link: route("client.services.show", "Brokrtage"),
            icon: <Document />,
            title: __("customs_brokerage_services"),
            // para: __("customs_brokerage_services_desc"),
        },
    ];
    return (
        <div className="service_home">
            <img className="background" src="/img/service/bg.png" alt="" />
            <div className="wrapper">
                <div className="gil30">{__("our_Services")}</div>
                <h3 className="gilroy">
                    {__("need")} <br />
                    {/* {__("solution")} */}
                </h3>
                <div className="grid">
                    {services.map((item) => {
                        return (
                            <ServiceBox
                                bg
                                link={item.link}
                                icon={item.icon}
                                title={item.title}
                                para={item.para}
                            />
                        );
                    })}
                    <MainButton
                        link={route("client.services.index")}
                        text={__("more_details")}
                    />
                </div>
            </div>
        </div>
    );
};

export default ServiceHome;

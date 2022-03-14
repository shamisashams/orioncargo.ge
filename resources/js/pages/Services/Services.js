import React from "react";
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
import Background from "/img/service/bg.png";
import { MainButton } from "../../components/MainButton/MainButton";
import "./Services.css";
import { PageHead } from "../../components/PageHead/PageHead";
import Layout from "../../Layouts/Layout";

const Services = () => {
    const services = [
        {
            link: route('client.services.show', "AirFreight"),
            icon: <Plane />,
            title: __("air_freight"),
            para: __("air_freight_desc"),
        },
        {
            link: route('client.services.show', "LandFreight"),
            icon: <Truck />,
            title: __("land_freight"),
            para: __("land_freight_desc"),
        },
        {
            link: route('client.services.show', "CargoShip"),
            icon: <Shipping />,
            title: __("cargo_shipping"),
            para: __("cargo_shipping_desc"),
        },
        {
            link: route('client.services.show', "Refrigerated"),
            icon: <Cool />,
            title: __("refrigerated_cargo"),
            para: __("refrigerated_cargo_desc"),
        },
        {
            link: route('client.services.show', "CharterFlights"),
            icon: <Charter />,
            title: __("charter_flights"),
            para: __("charter_flights_desc"),
        },
        {
            link: route('client.services.show', "DangerousGood"),
            icon: <Danger />,
            title: __("good_shipping"),
            para: __("good_shipping_desc"),

        },
        {
            link: route('client.services.show', "Brokrtage"),
            icon: <Document />,
            title: __("customs_brokerage_services"),
            para: __("customs_brokerage_services_desc"),
        },
    ];
  return (
      <Layout>
          <div className="servicePage service_home pages">
              <img className="background" src={Background} alt="" />
              <div className="wrapper">
                  <PageHead
                      title={__("services")}
                      para={__("services_desc")}
                  />
                  <div className="grid">
                      {services.map((item) => {
                          return (
                              <ServiceBox
                                  link={item.link}
                                  icon={item.icon}
                                  title={item.title}
                                  para={item.para}
                              />
                          );
                      })}
                      <div className="last">
                          <p className="gilroy">{__("need")}{__("solution")}</p>
                          <div className="gil30">
                              {__("more_questions")} <br />
                              {__("get_in_touch")}
                          </div>
                          <MainButton link={route("client.contact.index")} text={__("contact_us")} />
                      </div>
                  </div>
              </div>
          </div>
      </Layout>
  );
};

export default Services;

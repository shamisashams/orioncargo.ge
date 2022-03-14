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

const AirFreight = () => {
  const bullets = [
    "Leverage agile frameworks to provide a robust",
    "Iterative approaches to strategy",
    "synopsis for high level overviews",
    "provide a robust synopsis for high level overviews",
    "Leverage agile frameworks to provide a robust",
    "Iterative approaches to strategy",
    "synopsis for high level overviews",
    "provide a robust synopsis for high level overviews",
  ];
    const services = [
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
          <div className="pages singleService">
              <img className="background" src={Background} alt="" />
              <div className="headline">
                  <div className="wrapper">
                      <div className="title">
                          <Plane color="#fff" />
                          <div className="gilroy">{__("air_freight")}</div>
                      </div>
                      <p style={{ opacity: "0.5" }}>
                          {__("we_offer")}
                      </p>
                  </div>
              </div>
              <div className="container">
                  <div className="flex main">
                      <div className="img">
                          <img src="/img/service/1.png" alt="" />
                      </div>
                      <div className="context">
                          <div className="gilroy">Lorem ipsum</div>
                          <p>
                              Leverage agile frameworks to provide a robust synopsis for high
                              level overviews. Iterative approaches to strategy. Leverage agile
                              frameworks to provide a robust synopsis for high level overviews.
                              Iterative approaches to strategy. Leverage agile frameworks to
                              provide a robust synopsis for high level overviews. Iterative
                              approaches to strategy.
                          </p>
                          <p>
                              Leverage agile frameworks to provide a robust synopsis for high
                              level overviews. Iterative approaches to strategy. Leverage agile
                              frameworks to provide a robust synopsis for high
                          </p>
                          <ul>
                              {bullets.map((bullet) => {
                                  return <li className="bold">{bullet}</li>;
                              })}
                          </ul>
                      </div>
                  </div>
                  <div className="gilroy more_options_title">See more options</div>
                  <div className="other_options">
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
                  </div>
              </div>
          </div>
      </Layout>
  );
};

export default AirFreight;

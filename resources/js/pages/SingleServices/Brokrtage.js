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

const Brokerage = () => {
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
            link: route('client.services.show', "AirFreight"),
            icon: <Plane />,
            title: "Air freight",
            para: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to strategy.",
        },
        {
            link: route('client.services.show', "LandFreight"),
            icon: <Truck />,
            title: "land freight",
            para: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to strategy.",
        },
        {
            link: route('client.services.show', "CargoShip"),
            icon: <Shipping />,
            title: "Cargo shipping",
            para: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to strategy.",
        },
        {
            link: route('client.services.show', "Refrigerated"),
            icon: <Cool />,
            title: "Refrigerated cargo?",
            para: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to strategy.",
        },
        {
            link: route('client.services.show', "CharterFlights"),
            icon: <Charter />,
            title: "Charter flights",
            para: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to strategy.",
        },
        {
            link: route('client.services.show', "DangerousGood"),
            icon: <Danger />,
            title: "Dangerous goods shipping?",
            para: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to strategy.",
        },

    ];
    return (
      <Layout>
          <div className="pages singleService">
              <img className="background" src={Background} alt="" />
              <div className="headline">
                  <div className="wrapper">
                      <div className="title">
                          <Document color="#fff" />
                          <div className="gilroy">Customs Brokerage Services</div>
                      </div>
                      <p style={{ opacity: "0.5" }}>
                          We Offer A Wide Range Of Logistic Services To Our Clients
                      </p>
                  </div>
              </div>
              <div className="container">
                  <div className="flex main">
                      <div className="img">
                          <img src="/img/service/7.png" alt="" />
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

export default Brokerage;

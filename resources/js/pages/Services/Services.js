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
    {
      link: route('client.services.show', "Brokrtage"),
      icon: <Document />,
      title: "Customs brokerage services",
      para: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to strategy.",
    },
  ];
  return (
      <Layout>
          <div className="servicePage service_home pages">
              <img className="background" src={Background} alt="" />
              <div className="wrapper">
                  <PageHead
                      title="Services"
                      para="We Offer A Wide Range Of Logistic Services To Our Clients"
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
                          <p className="gilroy">You Have A Need, We Have The SOLUTION</p>
                          <div className="gil30">
                              Have Some More <br />
                              Questions? Get In Touch!
                          </div>
                          <MainButton link="/contact" text="contact us" />
                      </div>
                  </div>
              </div>
          </div>
      </Layout>
  );
};

export default Services;

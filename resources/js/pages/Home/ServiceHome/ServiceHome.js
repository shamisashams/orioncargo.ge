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
    <div className="service_home">
      <img className="background" src="/img/service/bg.png" alt="" />
      <div className="wrapper">
        <div className="gil30">Our Services</div>
        <h3 className="gilroy">
          You Have A Need, <br />
          We Have The SOLUTION
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
          <MainButton link={route('client.services.index')} text="more details" />
        </div>
      </div>
    </div>
  );
};

export default ServiceHome;

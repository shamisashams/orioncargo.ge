import React from "react";
import { PageHead } from "../../components/PageHead/PageHead";
import Form from "../../components/Form/Form";
import "./Contact.css";
import Layout from "../../Layouts/Layout";

const Contact = () => {
  const contactDets = [
    {
      icon: "/img/icons/contact/1.svg",
      title: "phone",
      p1: "+995 0322 14 15 16",
      p2: "+995 0322 14 15 16",
    },
    {
      icon: "/img/icons/contact/2.svg",
      title: "email address",
      p1: "example@info.ge",
      p2: "example@contact.ge",
    },
    {
      icon: "/img/icons/contact/3.svg",
      title: "Address",
      p1: "example street name # 123",
      p2: "Tbilisi, Georgia",
    },
  ];
  return (
      <Layout>
          <div className="pages contactPage ">
              <img className="background" src="/img/service/bg.png" alt=""/>
              <div className="wrapper">
                  <PageHead title="Contact" para="Have Any Question? Get In Touch!"/>
                  <div className="flex main">
                      <div className="info">
                          <div className="bold head">find us on map</div>
                          <div className="map">
                              <iframe
                                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11909.044506590086!2d44.7621418!3d41.7364602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sge!4v1645099669885!5m2!1sen!2sge"
                                  width="600"
                                  height="450"
                                  allowFullScreen=""
                                  loading="lazy"
                              ></iframe>
                          </div>
                          <div className="flex contact_details">
                              {contactDets.map((i) => {
                                  return (
                                      <div className="column">
                                          <img src={i.icon} alt=""/>
                                          <h6 className="bold">{i.title}</h6>
                                          <p className="bold">{i.p1}</p>
                                          <p className="bold">{i.p2}</p>
                                      </div>
                                  );
                              })}
                          </div>
                      </div>
                      <Form/>
                  </div>
              </div>
          </div>

      </Layout>
  );
};

export default Contact;

import React from "react";
import { PageHead } from "../../components/PageHead/PageHead";
import Form from "../../components/Form/Form";
import "./Contact.css";
import Layout from "../../Layouts/Layout";

const Contact = () => {
    const contactDets = [
        {
            icon: "/img/icons/contact/1.svg",
            title: __("phone"),
            p1: "+995 558 677 991",
        },
        {
            icon: "/img/icons/contact/2.svg",
            title: __("email_address_contact"),
            p1: "orion-cargo@outlook.com",
        },
        {
            icon: "/img/icons/contact/3.svg",
            title: __("address"),
            p1: __("street_name"),
            p2: __("country"),
        },
    ];
    return (
        <Layout>
            <div className="pages contactPage ">
                <img className="background" src="/img/service/bg.png" alt="" />
                <div className="wrapper">
                    <PageHead title="Contact" para={__("any_questions")} />
                    <div className="flex main">
                        <div className="info">
                            <div className="bold head">{__("find_on_map")}</div>
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
                                            <img src={i.icon} alt="" />
                                            <h6 className="bold">{i.title}</h6>
                                            <p className="bold">{i.p1}</p>
                                            <p className="bold">{i.p2}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <Form />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;

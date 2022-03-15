import React from "react";
import { PageHead } from "../../components/PageHead/PageHead";
import { MainButton } from "../../components/MainButton/MainButton";
import "./AboutUs.css";
import Layout from "../../Layouts/Layout";
import {usePage} from "@inertiajs/inertia-react";

const AboutUs = () => {
    // const sharedData = usePage().props.localizations;
    //
    // function __(key, replace = {}) {
    //     let translation = sharedData[key] || key;
    //
    //     Object.keys(replace).forEach(function (key) {
    //         translation = translation.replace(":" + key, replace[key]);
    //     });
    //
    //     return translation;
    // }
  return (
      <Layout>
          <div className="pages aboutPage">
              <img className="abs_1" src="/img/about/1.png" alt="" />
              <img className="abs_2" src="/img/about/2.png" alt="" />
              <div className="wrapper">
                  <div className="flex line">
                      <div className="context">
                          <PageHead title={__("about_us")} />
                          <div className="gil30">{__("about_us_title_1")}</div>
                          <p>
                              {__("about_us_content_1")}
                          </p>
                      </div>
                      <div className="shape shape_1"></div>
                      <div className="shape shape_2"></div>
                  </div>
                  <div className="flex line">
                      <div className="shape shape_3"></div>
                      <div className="shape shape_4"></div>
                      <div className="context">
                          <div className="gil30">{__("about_us_title_2")}</div>
                          <p>
                              {__("about_us_content_2")}
                          </p>
                      </div>
                  </div>
                  <div className="flex line">
                      <div className="context">
                          <div className="gil30">{__("about_us_title_3")}</div>
                          <p>
                              {__("about_us_content_3")}
                          </p>
                      </div>
                      <div className="shape shape_5"></div>
                      <MainButton text={__("contact_us")} link={route('client.contact.index')} />
                  </div>
              </div>
          </div>
      </Layout>
  );
};

export default AboutUs;

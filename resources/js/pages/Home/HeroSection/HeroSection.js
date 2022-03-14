import React from "react";
import "./HeroSection.css";
import Play from "/img/hero/play.svg";
import RequestForm from "../../../components/RequestForm/RequestForm";
import SocialMedia from "../../../components/SocialMedia/SocialMedia";
import { ContactInfo } from "../../../components/ContactInfo/ContactInfo";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="flex first ">
          <div className="content">
            <div className="gil70">{__("hero_title")}</div>
            <p>
                {__("hero_content")}
            </p>
            <button className="play_video flex">
              <div className="circle flex centered">
                <img src={Play} alt="" />
                <div className="border"></div>
              </div>
              <div>
                  {__("watch_the")} <br />
                  {__("video")}
              </div>
            </button>
          </div>
          <RequestForm />
        </div>
        <div className="flex second">
          <div className="sm flex">
            <h6>{__('social_links')}</h6>
            <SocialMedia background />
          </div>
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;

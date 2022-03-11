import React from "react";
import { BenefitBox } from "../../../components/BenefitBox/BenefitBox";
import "./WhyUs.css";

const WhyUs = () => {
  const benefitList = [
    {
      icon: "/img/icons/benefit/clock.svg",
      title: "Time",
      para: "We value our customer time and offer the best planning for each project individually, in agreement with you we go to the ideal service that is a dream come true for all customers, which means unloading and timely transportation of cargo.",
    },
    {
      icon: "/img/icons/benefit/budget.svg",
      title: "Cost",
      para: "effectiveness and minimization – With the help of our team, transporting your cargo will be not only safe but also economical financially, which is literally beneficial for your business.",
    },
    {
      icon: "/img/icons/benefit/global.svg",
      title: "International Partnership Network",
      para: "With the help of our fleet and our partners, you will always receive the highest quality service from anywhere in the world, with constant cargo handling and status notification.",
    },
    {
      icon: "/img/icons/benefit/shield.svg",
      title: "Reliability",
      para: "Our team’s niche is experience and professionalism.",
    },
  ];
  return (
    <div className="why_choose_us">
      ]
      <div className="wrapper">
        <div className="head">
          <div className="gil30">WHY CHOOSE US</div>
          <p>We deliever your package in no time</p>
        </div>
        <div className="grid">
          {benefitList.map((item) => {
            return (
              <BenefitBox
                icon={item.icon}
                title={item.title}
                para={item.para}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

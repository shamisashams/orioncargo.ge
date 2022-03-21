import React from "react";
import { BenefitBox } from "../../../components/BenefitBox/BenefitBox";
import "./WhyUs.css";

const WhyUs = () => {
    const benefitList = [
        {
            icon: "/img/icons/benefit/clock.svg",
            title: __("benefit_list_title_1"),
            para: __("benefit_list_description_1"),
        },
        {
            icon: "/img/icons/benefit/budget.svg",
            title: __("benefit_list_title_2"),
            para: __("benefit_list_description_2"),
        },
        {
            icon: "/img/icons/benefit/global.svg",
            title: __("benefit_list_title_3"),
            para: __("benefit_list_description_3"),
        },
        {
            icon: "/img/icons/benefit/shield.svg",
            title: __("benefit_list_title_4"),
            para: __("benefit_list_description_4"),
        },
    ];
    return (
        <div className="why_choose_us">
            ]
            <div className="wrapper">
                <div className="head">
                    <div className="gil30">{__("why_choose_us")}</div>
                    <p>{__("package_deliver")}</p>
                </div>
                <div className="grid">
                    {benefitList.map((item, i) => {
                        return (
                            <BenefitBox
                                key={i}
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

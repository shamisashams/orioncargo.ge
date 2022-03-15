import React from "react";
import { MainButton } from "../../../components/MainButton/MainButton";
import "./MiddleSection.css";
import { Question } from "../../../components/Question/Question";
import Form from "../../../components/Form/Form";

const MiddleSection = () => {
    const imgGrid = [
        "/img/gallery/4.png",
        "/img/gallery/3.png",
        "/img/gallery/2.png",
    ];
    const questions = [
        {
            q: __("question_1"),
            a: __("answer_1"),
        },
        {
            q: __("question_2"),
            a: __("answer_2"),
        },
        {
            q: __("question_3"),
            a: [
                __("answer_3_1"),
                <br />,
                __("answer_3_2"),
                <br />,
                __("answer_3_3"),
                <br />,
                __("answer_3_4"),
                <br />,
                __("answer_3_5"),
                <br />,
                __("answer_3_6"),
                <br />,
                __("answer_3_7"),
                <br />,
                __("answer_3_8"),
            ],
        },
        {
            q: __("question_4"),
            a: [
                __("answer_4_1"),
                <br />,
                __("answer_4_2"),
                <br />,
                __("answer_4_3"),
                <br />,
                __("answer_4_4"),
            ],
        },
        {
            q: __("question_5"),
            a: __("answer_5"),
        },
    ];

    return (
        <div className="middle_section">
            <div className="wrapper">
                {/* <div className="gil30">{__('our_projects')}</div>
        <div className="flex project_flex">
          <div className="gallery_grid">
            {imgGrid.map((img) => {
              return (
                <div className="img">
                  <img src={img} alt="" />
                </div>
              );
            })}
          </div>
          <div>
            <div className="gil30">{__('see_our_projects')}</div>
            <p>
                {__('see_our_projects_desc')}
            </p>
            <MainButton text="more details" link={route('client.projects.index')} />
          </div>
        </div> */}
                <div className="flex who_we_are">
                    <div className="left">
                        <div className="margin_bottom">
                            <div className="gil30">{__("who_are_we")}</div>
                            <p>{__("who_are_we_desc")}</p>
                            <MainButton
                                text={__("about_us")}
                                link={route("client.about.index")}
                            />
                        </div>
                        <div className="gil30">{__("frequently_asked")}</div>
                        {questions.map((item) => {
                            return (
                                <Question question={item.q} answer={item.a} />
                            );
                        })}
                        <div className="img">
                            <img src="/img/gallery/6.png" alt="" />
                        </div>
                    </div>
                    <div className="right">
                        <div className="img">
                            <img src="/img/gallery/1.png" alt="" />
                        </div>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleSection;

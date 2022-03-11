import React from "react";
import { MainButton } from "../../../components/MainButton/MainButton";
import "./MiddleSection.css";
import { Question } from "../../../components/Question/Question";
import Form from "../../../components/Form/Form";

const MiddleSection = () => {
  const imgGrid = ["/img/gallery/4.png", '/img/gallery/3.png', "/img/gallery/2.png"];
  const questions = [
    {
      q: "What options exist for late, lost, or no delivery?",
      a: "ng-term partnerships with customers in the marketplace with whom we share common values, both personally and in business, not just in business, but in building friendly relationships with existing and future partners. We will give you a small overview of our services to new / potential customers at the start of the partnership.We answer questions from the customer in a timely manner.In agreement with you, we offer several types of cargo transportation.We formulate all the necessary documents in official and legal terms.Provide cargo location status by email and telephone communication.We set flexible and individual payment terms.",
    },
    {
      q: "Change of address - the basics",
      a: "mely manner.In agreement with you, we offer several types of cargo transportation.We formulate all the necessary documents in official and legal terms.Provide cargo location status by email and telephone communication.We set flexible and individual",
    },
    {
      q: "What is priority mail express?",
      a: "nersl give you a small overview of our services to new / potential customers at the start of the partnership.We answer questions from the customer in a timely manner",
    },
    {
      q: "How do I obtain and manage premium services",
      a: " marketplace with whom we share common values, both personally and in business, not just in business, but in building friendly relationships with existing and future partners. We will give you a small overview of our services to new / potential customers at the start of the partnership.We answer questions from the customer in a timely manner.In agreement with you, we offer several types of cargo transportation.We formulate all the necessary documents in official and legal terms.Provide cargo location status by email and telephone communication.We set flexibl",
    },
    {
      q: "What options exist for late, lost, or no delivery?",
      a: "ps with customers in the marketplace with whom we share common values, both personally and in business, not just in business, but in building friendly relationships with existing and future partners. We will give you a small overview of our services to new / potential customers at the start of the partnership.We answer questions from the customer in a timely manner.In agreeme",
    },
  ];

  return (
    <div className="middle_section">
      <div className="wrapper">
        <div className="gil30">Our Projects</div>
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
            <div className="gil30">See Our Projects</div>
            <p>
              Since its inception, the company has been striving to attract and
              sign up for long-term partnerships with customers in the
              marketplace with whom we share common values, both personally and
              in business, not just in business, but in building friendly
              relationships with existing and future partners.
            </p>
            <MainButton text="more details" link={route('client.projects.index')} />
          </div>
        </div>
        <div className="flex who_we_are">
          <div className="left">
            <div className="margin_bottom">
              <div className="gil30">Who We Are?</div>
              <p>
                Since its inception, the company has been striving to attract
                and sign up for long-term partnerships with customers in the
                marketplace with whom we share common values, both personally
                and in business, not just in business, but in building friendly
                relationships with existing and future partners.
              </p>
              <MainButton text="about us" link={route('client.about.index')} />
            </div>
            <div className="gil30">
              Frequently Asked <br />
              Questions
            </div>
            {questions.map((item) => {
              return <Question question={item.q} answer={item.a} />;
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

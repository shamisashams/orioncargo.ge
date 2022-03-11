import React, { useState } from "react";
import { Arrow } from "../Icons/Icons";
import "./Question.css";

export const Question = (props) => {
  const [openQuestion, setOpenQuestion] = useState(false);
  const toggleQuestion = () => {
    setOpenQuestion(!openQuestion);
  };
  return (
    <div
      className={openQuestion ? "question open" : "question"}
      onClick={() => toggleQuestion()}
    >
      <div className="q">
        {props.question}
        <Arrow color="#2A3F9C" />
      </div>
      <div className="answer">{props.answer}</div>
    </div>
  );
};

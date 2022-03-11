import React from "react";

export const PageHead = ({ title, para }) => {
  return (
    <div className="page_head" style={{ marginBottom: "40px" }}>
      <div className="gil70">{title}</div>
      <p className="gilroy" style={{ color: "#949fcd" }}>
        {para}
      </p>
    </div>
  );
};

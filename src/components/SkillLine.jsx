import React from "react";
import BarCircle from "./BarCircle";

const SkillLine = ({ width }) => {
  return (
    <div className="flex items-center" data-aos="fade-left">
      <div
        style={{
          width: `${width}%`,
          backgroundColor: "rgb(140, 0, 0)",
          height: "4px",
          boxShadow: "0px 0px 6px rgb(104, 0, 0)",
        }}
      ></div>
      <div>
        <BarCircle />
      </div>
      <div
        style={{
          width: `${90 - width}%`,
          backgroundColor: "grey",
          height: "3px",
        }}
      ></div>
      <div style={{ width: "8%", paddingLeft: "2%" }}>{width}%</div>
    </div>
  );
};

export default SkillLine;

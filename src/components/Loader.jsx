import React from "react";

const Loader = () => {
  return (
    <div className="pyramid-loader mx-auto">
      <div className="wrapper">
        <span className="side side1"></span>
        <span className="side side2"></span>
        <span className="side side3"></span>
        <span className="side side4"></span>
        <span className="shadow"></span>
      </div>
    </div>
  );
};

export default Loader;

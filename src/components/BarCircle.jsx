import React from "react";
import "aos/dist/aos.css"; // Import AOS styles

const BarCircle = () => {
  return (
    <div data-aos="fade-right">
      <div
        style={{
          width: "20px",
          border: "2px solid red",
          height: "20px",
          borderRadius: "50%",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            height: "100%",
            width: "100%",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ border: "4px solid red", borderRadius: "50%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default BarCircle;

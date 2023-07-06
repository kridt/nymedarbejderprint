import React from "react";
import img from "./image1.jpg";

export default function First() {
  return (
    <div style={{ display: "grid", gridArea: "1/1/2/2" }}>
      <div style={{ gridArea: "1/1/2/2" }} className="img">
        <img src={img} alt="et" />
      </div>
      <div style={{ gridArea: "1/1/2/2", marginLeft: "7.5em" }}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2 style={{ color: "#d36360" }}>
          Vi har glædet os rigtig meget til at byde dig velkommen!
        </h2>
      </div>
    </div>
  );
}

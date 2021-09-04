import React from "react";
import "./index.css";
function OurHistory() {
  return (
    <div className="ourHistoryContainer">
      <div className="ui stackable two column grid ourHistoryColumnGridContainer">
        <div className="column ourHistoryImgStyle ourHistoryColumns"></div>
        <div className=" column  ourHistoryColumns">
          <div className="aboutUsTxtContent">
            <h1>We make business travelers happy</h1>
            <h2>SINCE 2005</h2>
            <h5>a</h5>
            <p>
            Ask people about booking leisure travel and you’ll see them smile. Ask people about booking business travel and you’ll hear how it’s a nightmare. Our mission is to change that.
            </p>{" "}
          </div>
        </div>
        <div className=" column  ourHistoryColumns">
          <div className="aboutUsTxtContent">
            <h1>
Putting business travelers first.</h1>
            <h2>Always.</h2>
            <h5>a</h5>
            <p>
            Business travelers are at the forefront of driving growth, continuously disrupting their lives to benefit the future of their companies. But the corporate travel tools they’ve had to use to get where they need to go have always been stuck in the past.

We’re changing this, building a platform that gives travelers the freedom to travel the way they want with no micromanagement. We’re creating an experience that puts them first.
            </p>
          </div>
        </div>
        <div className="column ourHistoryImgStyle2 ourHistoryColumns"></div>
      </div>
    </div>
  );
}

export default OurHistory;

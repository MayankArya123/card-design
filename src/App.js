import React, { useState, useEffect } from "react";
import priceImg from "./Images/rupees.png";
import activityImg from "./Images/activities.png";
import gamesImg from "./Images/games.png";
import certificateImg from "./Images/certificate.png";
import star from "./Images/star.png";
import whiteStar from "./Images/star.png";
import Coursedata from "./data.json";
import ToggleImage from "./Images/toggler.png";

import "./App.css";

function App() {
  const [juniordata, setjuniordata] = useState("");

  const [senior1data, setsenior1data] = useState("");
  const [senior2data, setsenior2data] = useState("");

  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(Coursedata);

    setjuniordata(Coursedata[0]);
    setsenior1data(Coursedata[1]);
    setsenior2data(Coursedata[2]);

    setLoading(true);
  }, []);

  const getClass = (cn) => {
    console.log("mayank", cn);

    if (cn === "Communication") {
      return "card-header cm ";
    }

    if (cn === "Visual Arts") {
      return "card-header va";
    }

    if (cn === "Music") {
      return "card-header m ";
    }
  };

  const getFooterClass = (cn) => {
    console.log("mayank", cn);

    if (cn === "Communication") {
      return "footer-header cm ";
    }

    if (cn === "Visual Arts") {
      return "footer-header va";
    }

    if (cn === "Music") {
      return "footer-header m ";
    }
  };

  const getHoverClass = (cn) => {
    console.log("mayank", cn);

    if (cn === "Communication") {
      return "card cm ";
    }

    if (cn === "Visual Arts") {
      return "card va";
    }

    if (cn === "Music") {
      return "card m ";
    }
  };

  const [Junior, setJunior] = useState(false);
  const [Senior, setSenior] = useState(false);

  return (
    Loading && (
      <div className="App">
        <div className="header">
          <div
            className="toggle toggle1"
            onClick={() => {
              setJunior(true);
              setSenior(false);
            }}
          >
            <h4>Junior</h4>
            <span> (Age-6-10) </span>
            {Junior && (
              <div className="toggler-icon junior">
         
              </div>
            )}
          </div>
          <div
            className="toggle toggle2"
            onClick={() => {
              setSenior(true);
              setJunior(false);
            }}
          >
            <h4>Senior</h4>
            <span> (Age-10-15) </span>
            {!Junior && (
              <div className="toggler-icon senior">
          
              </div>
            )}
          </div>
        </div>

        <div className="cards">
          {Junior && (
            <div className={getHoverClass(juniordata[0].category_name)}>
              <div className={getClass(juniordata[0].category_name)}>
                <div className="header-top">
                  <div className="curve"> {juniordata[0].category_name} </div>
                  <div className="corner">
                    <span> 20% </span>
                    <span> off </span>
                  </div>
                </div>
                <div className="header-footer">
                  <span className="header-footer-text">
                    {" "}
                    {juniordata[0].name}{" "}
                  </span>
                  <div className="header-footer-flex">
                    <div className="stars">
                      <div className="star">
                        {" "}
                        <img src={star} />{" "}
                      </div>
                      <div className="star">
                        {" "}
                        <img src={star} />{" "}
                      </div>
                      <div className="star">
                        {" "}
                        <img src={star} />{" "}
                      </div>
                      <div className="star">
                        {" "}
                        <img src={star} />{" "}
                      </div>
                      <div className="star">
                        {" "}
                        <img src={whiteStar} />{" "}
                      </div>
                    </div>
                    <span> (50 Reviews) </span>
                  </div>
                </div>
              </div>
              <div className="middle-section">
                <p className="content">{juniordata[0].pitch}</p>

                <p className="heading"> Students will achieve: </p>

                <div className="list">
                  <ul>
                    {juniordata[0].curriculum_outcomes.map((item) => (
                      <li> {item} </li>
                    ))}
                  </ul>
                </div>

                <p className="heading1"> view Detailed Lesson plan </p>

                <div className="price-block">
                  <div className="left">
                    {" "}
                    <div className="top">
                      {" "}
                      <img className="RupeesMark" src={priceImg} />
                      {juniordata[0].discounted_price}{" "}
                    </div>
                    <div className="price-cut">
                      <img className="RupeesMarkBlurr" src={priceImg} />{" "}
                      <div className="price">
                        {" "}
                        {juniordata[0].original_price}
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    {" "}
                    <img className="RupeesMarksmall" src={priceImg} /> 200{" "}
                    <small className="blurr-text"> per class </small>
                  </div>
                </div>

                <p className="price-footer-info">
                  {" "}
                  We'll schedule the slots as per your convenience{" "}
                </p>
              </div>

              <div className="footer">
                <div className={getFooterClass(juniordata[0].category_name)}>
                  <div className="">
                    {" "}
                    <img src={activityImg} /> <span> Activities </span>{" "}
                  </div>
                  <div className="">
                    {" "}
                    <img src={gamesImg} /> <span> Games </span>{" "}
                  </div>
                  <div className="">
                    {" "}
                    <img src={certificateImg} /> <span> certificate </span>{" "}
                  </div>
                </div>
                <div className="footer-button">
                  <button className="buy-btn"> Buy Course </button>
                </div>
              </div>
            </div>
          )}

          {!Junior && (
            <div className={getHoverClass(senior1data[0].category_name)}>
              <div className={getClass(senior1data[0].category_name)}>
                <div className="header-top">
                  <div className="curve"> {senior1data[0].category_name} </div>
                  <div className="corner">
                    <span> 20% </span>
                    <span> off </span>
                  </div>
                </div>
                <div className="header-footer">
                  <span className="header-footer-text">
                    {" "}
                    {senior1data[0].display_name}
                  </span>
                  <div className="header-footer-flex">
                    <div className="stars">
                      <div className="star">
                        {" "}
                        <img src={star} />{" "}
                      </div>
                      <div className="star">
                        {" "}
                        <img src={star} />{" "}
                      </div>
                      <div className="star">
                        {" "}
                        <img src={star} />{" "}
                      </div>
                      <div className="star">
                        {" "}
                        <img src={star} />{" "}
                      </div>
                      <div className="star">
                        {" "}
                        <img src={star} />{" "}
                      </div>
                    </div>
                    <span> (50 Reviews) </span>
                  </div>
                </div>
              </div>
              <div className="middle-section">
                <p className="content">{senior1data[0].pitch}</p>

                <p className="heading"> Students will achieve: </p>

                <div className="list">
                  <ul>
                    {senior1data[0].curriculum_outcomes.map((item) => (
                      <li> {item} </li>
                    ))}
                  </ul>
                </div>

                <p className="heading1"> view Detailed Lesson plan </p>

                <div className="price-block">
                  <div className="left">
                    {" "}
                    <div className="top">
                      {" "}
                      <img className="RupeesMark" src={priceImg} />{" "}
                      {senior1data[0].discounted_price}{" "}
                    </div>
                    <div className="price-cut">
                      <img className="RupeesMarkBlurr" src={priceImg} />{" "}
                      <div className="price">
                        {" "}
                        {senior1data[0].original_price}{" "}
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    {" "}
                    <img className="RupeesMarksmall" src={priceImg} /> 200{" "}
                    <small className="blurr-text"> per class </small>
                  </div>
                </div>

                <p className="price-footer-info">
                  {" "}
                  We'll schedule the slots as per your convenience{" "}
                </p>
              </div>

              <div className="footer">
                <div className={getFooterClass(senior1data[0].category_name)}>
                  <div className="">
                    {" "}
                    <img src={activityImg} /> <span> Activities </span>{" "}
                  </div>
                  <div className="">
                    {" "}
                    <img src={gamesImg} /> <span> Games </span>{" "}
                  </div>
                  <div className="">
                    {" "}
                    <img src={certificateImg} /> <span> certificate </span>{" "}
                  </div>
                </div>
                <div className="footer-button">
                  <button className="buy-btn"> Buy Course </button>
                </div>
              </div>
            </div>
          )}

          {!Junior && (
            <div className={getHoverClass(senior2data[0].category_name)}>
              <div className={getClass(senior2data[0].category_name)}>
                <div className="header-top">
                  <div className="curve"> {senior2data[0].category_name} </div>
                  <div className="corner">
                    <span> 20% </span>
                    <span> off </span>
                  </div>
                </div>
                <div className="header-footer">
                  <span className="header-footer-text">
                    {" "}
                    {senior2data[0].display_name}{" "}
                  </span>
                  <div className="header-footer-flex">
                    <div className="stars">
                      <div className="star">
                        {" "}
                        <img src={star} />{" "}
                      </div>
                      <div className="star">
                        {" "}
                        <img src={star} />{" "}
                      </div>
                      <div className="star">
                        {" "}
                        <img src={star} />{" "}
                      </div>
                      <div className="star">
                        {" "}
                        <img src={star} />{" "}
                      </div>
                      <div className="star">
                        {" "}
                        <img src={star} />{" "}
                      </div>
                    </div>
                    <span> (50 Reviews) </span>
                  </div>
                </div>
              </div>
              <div className="middle-section">
                <p className="content">{senior2data[0].pitch}</p>

                <p className="heading"> Students will achieve: </p>

                <div className="list">
                  <ul>
                    {senior2data[0].curriculum_outcomes.map((item) => (
                      <li> {item} </li>
                    ))}
                  </ul>
                </div>

                <p className="heading1"> view Detailed Lesson plan </p>

                <div className="price-block">
                  <div className="left">
                    {" "}
                    <div className="top">
                      {" "}
                      <img className="RupeesMark" src={priceImg} />{" "}
                      {senior2data[0].discounted_price}{" "}
                    </div>
                    <div className="price-cut">
                      <img className="RupeesMarkBlurr" src={priceImg} />{" "}
                      <div className="price">
                        {" "}
                        {senior2data[0].original_price}{" "}
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    {" "}
                    <img className="RupeesMarksmall" src={priceImg} /> 200{" "}
                    <small className="blurr-text"> per class </small>
                  </div>
                </div>

                <p className="price-footer-info">
                  {" "}
                  We'll schedule the slots as per your convenience{" "}
                </p>
              </div>

              <div className="footer">
                <div className={getFooterClass(senior2data[0].category_name)}>
                  <div className="">
                    {" "}
                    <img src={activityImg} /> <span> Activities </span>{" "}
                  </div>
                  <div className="">
                    {" "}
                    <img src={gamesImg} /> <span> Games </span>{" "}
                  </div>
                  <div className="">
                    {" "}
                    <img src={certificateImg} /> <span> certificate </span>{" "}
                  </div>
                </div>
                <div className="footer-button">
                  <button className="buy-btn"> Buy Course </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  );
}

export default App;

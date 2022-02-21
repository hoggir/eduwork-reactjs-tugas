import React from "react";
import "./Profile.css";
import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";

const BTNResume = styled.button`
  margin: auto;
  margin-top: 30px;
  border-radius: 50px;
  padding: 14px 0;
  width: 160px;
  cursor: pointer;
  transition: 0.2s;
  color: #ffffff;
  border: 2px solid linen;
  font-size: 12px;
  background-color: #1f2235;
  font-family: "Poppins SemiBold";

  &:hover {
    color: aliceblue;
    border: 2px solid #ff5823;
    background-color: #ff5823;
  }
`;

export default class Profile extends React.Component {
  render() {
    return (
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <div className="colz-icon">
                <a href="https://www.facebook.com/">
                  <i className="fa fa-facebook-square"></i>
                </a>
                <a href="https://twitter.com/">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                {" "}
                Hello, I'M <span className="highlighted-text">FADEL</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span>
                {" "}
                <h1 className="typewriter">
                  {" "}
                  <Typewriter
                    words={["Ethusiastic Dev 🔴",
                    "Full Stack Developer 💻",
                    "MERN Stack Dev 😎",
                    "Cross Platfrom v 🌐",
                    "React/React Native Dev 📱"]}
                    loop={Infinity}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h1>
                <span className="profile-role-tagline">
                  Knack of building applications with front and back end
                  operatios.
                </span>
              </span>
            </div>
            <div className="profile-options">
              <BTNResume className="btn primary-btn">
                {""}
                Hire Me{" "}
              </BTNResume>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
    );
  }
}

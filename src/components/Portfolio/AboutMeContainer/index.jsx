import React from "react";
import "./index.css";
import styled from "styled-components";

const BTNResume = styled.button`
  margin: auto;
  margin-top: 40px;
  margin-bottom: 56px;
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

export default class About extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="title-about-con">
          <h3 className="fs-bold fs-2" id="about">About Me</h3>
          <p className="fs-6 fw-light fst-italic mt-3">Why Choose Me?</p>
          <p>--V--</p>
        </div>

        <div className="card border-0 about-card">
          <div className="row no-gutters">
            <div className="col-md-6">
              <div className="about-pic-con"></div>
            </div>

            <div className="col-md-6">
              <div className="card-body">
                <p className="about-text container">
                  Full stack web and mobile developer with background knowledge
                  of MERN stacks with redux, along with a knack of building
                  application with utmost efficiency. Strong proffesional with a
                  BSV willing to br an asset for organization.
                </p>
                <div className="highlights container">
                  <h5 className="text-highlights">
                    Here are a Few Highlights:
                  </h5>
                  <p>- Full Stack web and mobile development</p>
                  <p>- Interactive Front Enda as per the design</p>
                  <p>- Reactjs and Nodejs</p>
                  <p>- Redux for State Management</p>
                  <p>- Building REST API</p>
                  <p>- Managing database</p>
                </div>
                <div className="container">
                  <BTNResume>
                    {""}
                    Hire Me{" "}
                  </BTNResume>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

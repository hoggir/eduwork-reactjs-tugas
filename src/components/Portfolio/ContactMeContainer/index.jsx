import React from 'react'
import "./index.css";
import styled from "styled-components";


const BTNResume = styled.button`
  margin: auto;
  margin-top: 30px;
  margin-bottom: 3px;
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

export default class ContactMe extends React.Component {
  render() {
    return (

      <div className="container">
        <div className="contact-title">
          <h3 className="fs-bold fs-2">Contact Me</h3>
          <p className="fs-6 fw-light fst-italic mt-3">Lets Keep In Touch</p>
          <p>--V--</p>
        </div>

        <div className="contact-container">
          <div className="row mt-2">

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="left">
                <h4>Get In Touch</h4>
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
                <h5 className="text-email-here">Send Your Email Here!</h5>
                <img
                  className="imgemail"
                  src={require("../../../assets/ContctMe/imgemail.png")}
                  alt=""
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="right">
                <p className="fields-text">Please Fill All The Fields!</p>
                <div className="fields">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input className="form-control"></input>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input className="form-control"></input>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" rows={"4"}></textarea>
                  </div>
                </div>
                <BTNResume className="btn-send-m">Send</BTNResume>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

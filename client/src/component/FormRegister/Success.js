import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
// import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import success from "../../component/icons/success.png";
import "./Formregist.css";
import Login from "../../pages/Login";
import { NavBtnLink } from "../../elements/navbarElement";
import axios from "axios";

export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render(res) {
    const search = this.props.location.search;
    const emailToken = new URLSearchParams(search).get("token");

    axios.get(`http://localhost:5000/api/v1/auth/success?token=${emailToken}`);

    return (
      <>
        <div className="successbox">
          <img src={success} style={{ width: "124px", margin: "20px" }} />
          <p className="headsuccess"> YOU’RE VERIFIED! </p>
          <p className="bodysuccess">
            Youre email address has been succssesfully verified.
          </p>
          <p className="bodysuccess">Thank you </p>
          {/* <button className="buttonsuccess"> Continue</button> */}

          <NavBtnLink
            to="/login"
            className="buttonsuccess"
            style={{ marginTop: "60px" }}
          >
            {" "}
            Continue
          </NavBtnLink>
        </div>
      </>
    );
  }
}

export default Success;

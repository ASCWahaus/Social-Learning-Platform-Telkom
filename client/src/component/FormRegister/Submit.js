import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { NavLink as Link } from "react-router-dom";
import loginani from "../../component/icons/login-ilust.png";
import logoslplogin from "../../component/icons/Group 116.png";
const Submit = () => {
  return (
    <Row>
    <Col md={7}>
      <div style={{ height: "auto", width: "auto", backgroundColor: "#D74040" }}>
        <img src={logoslplogin} style={{ width: "50%", padding: "40px" }}></img>
        <img src={loginani} style={{ width: "90%" }}></img>
      </div>
    </Col>
    <Col md={5}>
    <Container>
    <div style={{marginTop:"60%"}}></div>
    <div class="textver">
       <p style={{fontWeight:"bold", lineHeight:"0px"}}>You're almost done!</p>
        <p >We sent a launch link verify to your email.</p>
        <p style={{fontWeight:"500px"}}>Please check your email to confirm your account</p>
        {/* <p>Didn’t get your mail? <Link to="" style={{color:"#D74040"}}> Resend the link</Link></p> */}
        </div>
        </Container>
    </Col>
  </Row>
  );
};

export default Submit;

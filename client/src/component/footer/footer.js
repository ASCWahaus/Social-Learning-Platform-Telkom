import React from "react";
import { Col, Row, Container, Table, Image, Button } from "react-bootstrap";
import List from "@mui/material/List";
import logo from "../icons/logofooter.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer
      class="page-footer"
      style={{ backgroundColor: "#D74040", zIndex: "999" }}
    >
      <Container
        fluid
        style={{
          paddingLeft: "80px",
          paddingTop: "30px",
          fontFamily: "Quicksand",
          color: "white",
        }}
      >
        <Row>
          <img src={logo} width="15%"></img>
        </Row>
        <Row>
          <Col md={2}>
            <p className="subheadtext"> Our Contents </p>
            <ul className="childtext">
              <li>Artikel/Blog</li>
              <li>Video</li>
            </ul>
          </Col>
          <Col md={2}>
            <p className="subheadtext"> Support </p>
            <ul className="childtext">
              <li>FAQ</li>
            </ul>
          </Col>
          <Col md={2}>
            <p className="subheadtext">Company</p>
            <ul className="childtext">
              <li>About Us</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div
        style={{
          height: "0.3px",
          width: "100%",
          backgroundColor: "white",
          marginTop: "10px",
        }}
      ></div>
      <Container>
        <Row
          style={{
            justifyContent: "center",
            padding: "8px",
            fontSize: "12px",
            fontFamily: "Quicksand",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Copyright 2021 - Social Learning Platform
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

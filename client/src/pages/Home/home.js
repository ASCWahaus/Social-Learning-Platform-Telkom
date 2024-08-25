import React, { useState, useEffect } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Paper,
} from "@material-ui/core";
import Navbar from "../../component/navbar/navbar";
import HomeContent from "../../component/Home/Home";
import Footer from "../../component/footer/footer";
import { Button } from "react-bootstrap";
import { validateUser } from "../../actions/auth";

const Home = () => {
  return (
    <div>
      <div style={{ marginBottom: "100px" }}>
        <Navbar />
      </div>
      <Container maxWidth="lg">
        <HomeContent />
      </Container>
      <div style={{ marginTop: "100px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

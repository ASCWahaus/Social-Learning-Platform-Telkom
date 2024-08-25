import React from "react";
import { Col, Row, Container, Table, Image } from "react-bootstrap";
import lptelkom from "../component/icons/lsptelkom2.png";
import Signup from "./Signup";
import logotrans from "../component/icons/logotrans.png";
import oneicon from "../component/icons/oneicon.png";
import sideilust from "../component/icons/sideilust.png";
import twoicon from "../component/icons/twoicon.png";
import threeicon from "../component/icons/threeicon.png";
import fouricon from "../component/icons/fouricon.png";
import mas from "../component/icons/fotomasmas.png";
import Navbar from "../component/navbar/navbarlp";
import Footer from "../component/footer/footer";
import "./homepage.css";
import { Text, StyleSheet } from "react-native";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Flex,
} from "../elements/navbarElement";
import { Icon } from "@iconify/react";

const Homepage = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <div className="item11" data-value="1">
      <p className="textcat"> Digital Technology, Data & Platform </p>
    </div>,
    <div className="item22" data-value="2">
      <p className="textcat"> Digital Network & Connectivity </p>
    </div>,
    <div className="item33" data-value="3">
      <p className="textcat"> Digital Transformation </p>
    </div>,
    <div className="item44" data-value="4">
      <p className="textcat"> Design & Digital Content </p>
    </div>,
    <div className="item55" data-value="5">
      <p className="textcat"> Governance, Risk, & Compliance </p>
    </div>,
    <div className="item66" data-value="6">
      <p className="textcat"> Financial and Investment </p>
    </div>,
    <div className="item77" data-value="7">
      <p className="textcat"> Business and Management </p>
    </div>,
    <div className="item88" data-value="8">
      <p className="textcat"> Personal Development </p>
    </div>,
    <div className="item99" data-value="9">
      <p className="textcat"> Digital Marketing </p>
    </div>,
    <div className="item10" data-value="10">
      <p className="textcat"> Sales & Customer Service </p>
    </div>,
    <div className="item11" data-value="11">
      <p className="textcat"> Human Capital Development </p>
    </div>,
    <div className="item12" data-value="12">
      <p className="textcat"> Software Development </p>
    </div>,
    <div className="item13" data-value="13">
      <p className="textcat"> Digital Product Management </p>
    </div>,
    <div className="item14" data-value="14">
      <p className="textcat"> Artificial Intelligence </p>
    </div>,
    <div className="item15" data-value="15">
      <p className="textcat"> Cloud Computing </p>
    </div>,
    <div className="item16" data-value="16">
      <p className="textcat"> Leadership </p>
    </div>,
    <div className="item17" data-value="17">
      <p className="textcat"> Corporate Entrepreneurship </p>
    </div>,
    <div className="item18" data-value="18">
      <p className="textcat"> Office Productivity </p>
    </div>,
    <div className="item19" data-value="19">
      <p className="textcat"> Data Science </p>
    </div>,
    <div className="item20" data-value="20">
      <p className="textcat"> Internet of Things </p>
    </div>,
  ];

  const responsive1 = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const items1 = [
    <div className="item1" data-value="1">
      <Row>
        <Col md={7}>
          <div className="boxtesti">
            <p className="isitesti">
              “Social learning platform adalah platform terbaik yang pernah saya
              nikmati. Terdapat banyak sekali Expert Telkom yang menginspirasi”.{" "}
            </p>
            <div style={{ height: "100px" }}></div>
            <p className="fromtesti">Anggun</p>
            <p className="fromtesti">
              Trainer Expert - <Text>Telkom Indonesia</Text>
            </p>
            <div className="miniline"></div>
          </div>
        </Col>
        <Col md={5}>
          <Image
            src={mas}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
              display: "flex",
            }}
          />
        </Col>
      </Row>
    </div>,
    <div className="item1" data-value="1">
      <Row>
        <Col md={7}>
          <div className="boxtesti">
            <p className="isitesti">
              “Social learning platform adalah platform terbaik yang pernah saya
              nikmati. Terdapat banyak sekali Expert Telkom yang menginspirasi”.{" "}
            </p>
            <div style={{ height: "100px" }}></div>
            <p className="fromtesti">Anggun</p>
            <p className="fromtesti">
              Trainer Expert - <Text>Telkom Indonesia</Text>
            </p>
            <div className="miniline"></div>
          </div>
        </Col>
        <Col md={5}>
          <Image
            src={mas}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
              display: "flex",
            }}
          />
        </Col>
      </Row>
    </div>,
    <div className="item1" data-value="1">
      <Row>
        <Col md={7}>
          <div className="boxtesti">
            <p className="isitesti">
              “Social learning platform adalah platform terbaik yang pernah saya
              nikmati. Terdapat banyak sekali Expert Telkom yang menginspirasi”.{" "}
            </p>
            <div style={{ height: "100px" }}></div>
            <p className="fromtesti">Anggun</p>
            <p className="fromtesti">
              Trainer Expert - <Text>Telkom Indonesia</Text>
            </p>
            <div className="miniline"></div>
          </div>
        </Col>
        <Col md={5}>
          <Image
            src={mas}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
              display: "flex",
            }}
          />
        </Col>
      </Row>
    </div>,
  ];

  return (
    <>
      <Navbar />
      <Container style={{ width: "1440px", height: "651px", paddingTop: "7%" }}>
        <Row>
          <Col xs={12} md={6} sm={6}>
            <div style={{ height: "75px" }}></div>
            <p className="header-text">
              Expertise you need, <p>Great Content You Deserved</p>
            </p>
            <div style={{ height: "15px" }}></div>
            <p className="subhead-text">
              Social Learning menjadi platform kolaborasi Expert terbaik Telkom
              dalam meningkatkan kompetensi talenta digital.
            </p>
            <div style={{ height: "55px" }}></div>
            <NavLink className="text-decoration-none" to="/register">
              <Flex>
                <button className="butget" to="/register">
                  Get Started
                </button>
              </Flex>
            </NavLink>
          </Col>

          <Col xs={12} md={6} sm={6}>
            <img src={lptelkom} width="130%" style={{marginTop:"45px"}}/>
          </Col>
        </Row>
      </Container>

      <div
        className="quote"
        style={{
          backgroundColor: "#D74040",
          height: "316px",
          marginTop: "45px",
          overflowX: "hidden",
          overflowY: "hidden",

        }}
      >
        <Row>
          <Col xs={12} md={3} sm={3}>
            <img src={logotrans} style={{ width: "80%", float: "left" }} />
          </Col>
          <Col xs={12} md={6} sm={6}>
            <div style={{ height: "65px" }}></div>
            <p className="about-text">About Social Learning</p>
            <p className="subabout">
              Social Learning adalah Learning Experience Platform (LXP) untuk
              Expert Telkom Group khususnya yang tergabung dalam GOLIER (Group
              of Learning, Inovator, Reseacher) sehingga dapat memberikan
              pengalaman belajar, kesempatan kolaborasi, dan berbagi wawasan
              untuk meningkatkan kompetensi karyawan Telkom Group
            </p>
          </Col>
          <Col xs={12} md={3} sm={3}></Col>
        </Row>
      </div>

      <div style={{ backgroundColor: "#CFCDCD", height: "626px" }}>
        <Col xs={12} md={12} sm={12}>
          <div style={{ height: "120px" }}></div>
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            style={{ display: "flex", justifyContent: "center" }}
          />
        </Col>
      </div>

      <div style={{ margin: "6%" }}>
        <Row>
          <Col xs={12} md={6} sm={6}>
            <img src={sideilust} width="90%" />
          </Col>

          <Col xs={12} md={6} sm={6}>
            <p className="title1">
              {" "}
              Dapatkan berbagai keuntungan dari fitur kami!{" "}
            </p>
            <div style={{ height: "35px" }}></div>
            <Row>
              <Col sm={2}>
                <img src={oneicon} height="72px" />
              </Col>
              <Col sm={10}>
                <p className="pfitur">Platform pembelajaran organik</p>
              </Col>
            </Row>
            <div style={{ height: "35px" }}></div>
            <Row>
              <Col sm={2}>
                <img src={twoicon} height="72px" />
              </Col>
              <Col sm={10}>
                <p className="pfitur"> Kolaborasi antar Expert</p>
              </Col>
            </Row>
            <div style={{ height: "35px" }}></div>
            <Row>
              <Col sm={2}>
                <img src={threeicon} height="72px" />
              </Col>
              <Col sm={10}>
                <p className="pfitur">
                  Peningkatan kompetensi dengan kapan saja dimana saja
                </p>
              </Col>
            </Row>
            <div style={{ height: "35px" }}></div>
            <Row>
              <Col sm={2}>
                <img src={fouricon} height="72px" />
              </Col>
              <Col sm={10}>
                <p className="pfitur">
                  Berbagi wawasan dan karya oleh Expert Telkom
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <Container>
        <p className="headtesti">Testimoni Expert</p>
        <AliceCarousel
          mouseTracking
          items={items1}
          responsive={responsive1}
          controlsStrategy="alternate"
          stye={{ display: "flex", justifyContent: "center" }}
        />
        <div
          style={{
            marginTop: "-35px",
            float: "right",
            position: "relative",
            zIndex: 5,
          }}
        >
          <a href="/testimoni" className="seeall">
            {" "}
            See all <Icon icon="ic:baseline-log-out" width="30px" />
          </a>
        </div>
      </Container>
      <div style={{ height: "45px" }}></div>
      <Footer />
    </>
  );
};
export default Homepage;

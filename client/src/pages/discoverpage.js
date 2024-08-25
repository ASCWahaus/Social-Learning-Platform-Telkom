import React from "react";
import FadeIn from "react-fade-in";
import Carousel from "react-grid-carousel";
import Footer from "../component/footer/footer";
import satu from "../component/icons/cat1.png";
import ten from "../component/icons/cat10.png";
import belas from "../component/icons/cat11.png";
import dulas from "../component/icons/cat12.png";
import galas from "../component/icons/cat13.png";
import patlas from "../component/icons/cat14.png";
import malas from "../component/icons/cat15.png";
import namlas from "../component/icons/cat16.png";
import julas from "../component/icons/cat17.png";
import panlas from "../component/icons/cat18.png";
import lanlas from "../component/icons/cat19.png";
import dua from "../component/icons/cat2.png";
import duluh from "../component/icons/cat20.png";
import tiga from "../component/icons/cat3.png";
import empat from "../component/icons/cat4.png";
import lima from "../component/icons/cat5.png";
import enam from "../component/icons/cat6.png";
import tujuh from "../component/icons/cat7.png";
import delapan from "../component/icons/cat8.png";
import sembilan from "../component/icons/cat9.png";
import Navbar from "../component/navbar/navbar";
import {
  NavLink
} from "../elements/navbarElement";
import "./discoverpage.css";

export default function Discover() {
  const items = [
    { key: satu, value: "Digital-Technology,-Data-&-Platform" },
    { key: dua, value: "Digital-Network-&-Connectivity" },
    { key: tiga, value: "Digital-Transformation" },
    { key: empat, value: "Design-&-Digital-Content" },
    { key: lima, value: "Governance,-Risk,-&-Compliance" },
    { key: enam, value: "Financial-and-Investment" },
    { key: tujuh, value: "Business-and-Management" },
    { key: delapan, value: "Personal-Development" },
    { key: sembilan, value: "Digital-Marketing" },
    { key: ten, value: "Sales-&-Customer-Service" },
    { key: belas, value: "Human-Capital-Development" },
    { key: dulas, value: "Software-Development" },
    { key: galas, value: "Digital-Product-Management" },
    { key: patlas, value: "Artificial-Intelligence" },
    { key: malas, value: "Cloud-Computing" },
    { key: namlas, value: "Leadership" },
    { key: julas, value: "Corporate-Entrepreneurship" },
    { key: panlas, value: "Office-Productivity" },
    { key: lanlas, value: "Data-Science" },
    { key: duluh, value: "Internet-of-Things" },
  ];

  return (
    <>
      <Navbar />
      <div className="headerimg">
        <FadeIn className="bottom" delay={400} transitionDuration={800}>
          <p className="headertext">HOW CAN WE HELP YOU TODAY?</p>
          <p className="subhead">With various kinds of content</p>
        </FadeIn>
      </div>
      <FadeIn delay={400} transitionDuration={800}>
        <p className="title" style={{ marginLeft: "80px", marginTop: "50px" }}>
          {" "}
          Category{" "}
        </p>
        <div style={{ margin: "50px", justifyContent: "center" }}>
          <Carousel
            cols={4}
            rows={2}
            gap={5}
            loop
            showDots
            dotColorActive="#D74040"
            dotColorInactive="#686A71"
          >
            {items.map((item) => {
              return (
                <Carousel.Item key={item.key}>
                  <NavLink to={`/contents/category/${item.value}`}>
                    <div className="item-cat">
                      <img width="100%" src={item.key} />
                    </div>
                  </NavLink>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </FadeIn>
      <Footer />
    </>
  );
}

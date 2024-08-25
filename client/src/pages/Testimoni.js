import React from 'react'
import Navbar from '../component/navbar/navbarlp'
import "./Testimoni.css"
import { Col, Row, Container } from "react-bootstrap";
import ava from "../component/icons/jono.png"
import Footer from '../component/footer/footer';



const Testimoni = () => {
    return (
        <>
        <Navbar />
        <div className="headertesti">
        <p className="headtext">Apa kata para Expert tentang Social Learning.ID?</p>
        <p className="bodytext">“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at ultrices mi tempus. Commodo viverra maecenas accumsan lacus vel facilisis. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Ligula ullamcorper malesuada proin libero nunc consequat.
             Bibendum enim facilisis gravida neque convallis a cras. Nisi est sit amet facilisis magna etiam tempor orci. “ </p>
        </div>
        <div className="upper">
        <Container>
            <Row>
                <Col md={4}>
                    <div className="Cardtesti">
                        <div className="stripgreen"></div>
                        <img src={ava} className="avatar"></img>
                        <div style={{margin:"12%"}}>
                        <p className="nametesti">Jono</p>
                        <p className="jobtesti">Expert Trainer</p>
                        <p className="testitext">“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at ultrices mi tempus. Commodo viverra maecenas accumsan lacus vel facilisis.”</p>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                <div className="Cardtesti">
                        <div className="stripgreen"></div>
                        <img src={ava} className="avatar"></img>
                        <div style={{margin:"12%"}}>
                        <p className="nametesti">Jono</p>
                        <p className="jobtesti">Expert Trainer</p>
                        <p className="testitext">“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at ultrices mi tempus. Commodo viverra maecenas accumsan lacus vel facilisis.”</p>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                <div className="Cardtesti">
                        <div className="stripgreen"></div>
                        <img src={ava} className="avatar"></img>
                        <div style={{margin:"12%"}}>
                        <p className="nametesti">Jono</p>
                        <p className="jobtesti">Expert Trainer</p>
                        <p className="testitext">“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at ultrices mi tempus. Commodo viverra maecenas accumsan lacus vel facilisis.”</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <div style={{height:"100px"}}></div>
            <Row>
                <Col md={4}>
                    <div className="Cardtesti">
                        <div className="stripgreen"></div>
                        <img src={ava} className="avatar"></img>
                        <div style={{margin:"12%"}}>
                        <p className="nametesti">Jono</p>
                        <p className="jobtesti">Expert Trainer</p>
                        <p className="testitext">“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at ultrices mi tempus. Commodo viverra maecenas accumsan lacus vel facilisis.”</p>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                <div className="Cardtesti">
                        <div className="stripgreen"></div>
                        <img src={ava} className="avatar"></img>
                        <div style={{margin:"12%"}}>
                        <p className="nametesti">Jono</p>
                        <p className="jobtesti">Expert Trainer</p>
                        <p className="testitext">“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at ultrices mi tempus. Commodo viverra maecenas accumsan lacus vel facilisis.”</p>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                <div className="Cardtesti">
                        <div className="stripgreen"></div>
                        <img src={ava} className="avatar"></img>
                        <div style={{margin:"12%"}}>
                        <p className="nametesti">Jono</p>
                        <p className="jobtesti">Expert Trainer</p>
                        <p className="testitext">“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at ultrices mi tempus. Commodo viverra maecenas accumsan lacus vel facilisis.”</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
        <div style={{height:"100px"}}></div>

        <Footer/>
       
                </>
    )
}

export default Testimoni

import { Component } from "react";
import { Form, FormFeedback, FormGroup, FormText, Label, Input, Button, InputGroup, InputGroupText } from "reactstrap";
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { Col, Row, Container } from "react-bootstrap";
import { NavLink as Link } from "react-router-dom";
import { LogBtn, NavLink } from "../elements/loginElement";
import loginani from "../component/icons/login-ilust.png";
import logoslplogin from "../component/icons/Group 116.png";
// import { CustomInput, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input } from "reactstrap";
import { Text, StyleSheet } from "react-native";
import "./Signup.css";
// import './App.css';
// import PasswordShowHide from "./passwordform";
import {useDispatch} from 'react-redux';
import {signup} from '../actions/auth.js';
import showPwdImg from '../component/icons/show-password.svg';
import hidePwdImg from '../component/icons/hide-password.svg';


const initialState = {
  name : '',
  email : '',
  password : ''
}

const Signup = () => {

  const [isRevealPwd, setIsRevealPwd] = useState(false);


  // const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault()
    
    dispatch(signup(formData, history));
    // dispatch(signup(formData))

  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <>
      <Row>
        <Col md={7}>
          <div style={{ height: "auto", width: "auto", backgroundColor: "#D74040" }}>
            <img alt="" src={logoslplogin} style={{ width: "50%", padding: "40px" }}></img>
            {/* <div style={{height:"20px"}}></div> */}
            <img alt="" src={loginani} style={{ width: "90%" }}></img>
          </div>
        </Col>
        <Col md={5}>
          <div style={{ height: "100px" }}></div>

          <div style={{ margin: "30px" }}>
            <p className="signinlog">SIGN UP.</p>
            <p className="textala">Give us some of your information to get free access to SLP</p>
            <p className="textala">*Required Information</p>
            
            <div className="App">
              <Form className="form" onSubmit={handleSubmit}>
                <FormGroup>
                  <p className="labellogin">
                    Full Name
                    <Text style={{ color: "#D74040" }}>*</Text>{" "}
                  </p>
                  <Input 
                  id="name" 
                  name="name"
                  type="text"
                  variant="outlined" 
                  placeholder="enter your full name" 
                  className="formlogin" 
                  onChange={handleChange} 
                  autoFocus
                  required/>
                </FormGroup>
                <FormGroup>
                  <p className="labellogin">
                    Email
                    <Text style={{ color: "#D74040" }}>*</Text>{" "}
                  </p>
                  <Input
                    placeholder="enter your email address"
                    className="formlogin"
                    type="email"
                    name="email"
                    id="exampleEmail"
                    onChange={handleChange}
                  />
                  <FormFeedback>Please input a correct email.</FormFeedback>
                  
                </FormGroup>
                <FormGroup>
                  <p className="labellogin">
                    Password
                    <Text style={{ color: "#D74040" }}>*</Text>{" "}
                  </p>
                  <InputGroup style={{width:"89%"}}>
                    <Input
                      name="password"
                      placeholder="Enter Password"
                      type={isRevealPwd ? "text" : "password"}
                      // value={pwd}
                      onChange={handleChange}
                      className="formlogin1"
                    />
                    <InputGroupText>
                    <img alt=""
                        title={isRevealPwd ? "Hide password" : "Show password"}
                        src={isRevealPwd ? hidePwdImg : showPwdImg}
                        onClick={() => setIsRevealPwd(prevState => !prevState)}
                        style={{width:"20px", marginTop:"20%"}}
                      />
                    </InputGroupText>
                  </InputGroup>
                
                </FormGroup>
                
                <button className="buttonlogin" type="submit">Sign Up</button>

                <p className="signup1">
                  Already have an account <Text style={{ color: "#D74040" }}>Log in</Text>{" "}
                </p>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Signup


// class Signup extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     name: "",
//   //     email: "",
//   //     password: "",
//   //     validate: {
//   //       emailState: "",
//   //     },
//   //   };
//   //   this.handleChange = this.handleChange.bind(this);
//   //   // this.handleSubmit = this.handleChange.bind(this);
//   // }
  
  

//   handleChange = () => {
//     // const { target } = event;
//     // const value = target.type === "checkbox" ? target.checked : target.value;
//     // const { name } = target;

//     // this.setState({
//     //   [name]: value,
//     // });
//   };

//   handleSubmit = () => {
//     // event.preventDefault();
//   }


//   validateEmail(e) {
//     const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     const { validate } = this.state;

//     if (emailRex.test(e.target.value)) {
//       validate.emailState = "has-success";
//     } else {
//       validate.emailState = "has-danger";
//     }

//     this.setState({ validate });
//   }

//   submitForm(e) {
//     e.preventDefault();
//     console.log(`Email: ${this.state.email}`);
//   }

//   render() {
//     const { name, email, password } = this.state;

//     const dispatch = useDispatch();

    // return (
    //   <>
    //     <Row>
    //       <Col md={7}>
    //         <div style={{ height: "auto", width: "auto", backgroundColor: "#D74040" }}>
    //           <img alt="" src={logoslplogin} style={{ width: "50%", padding: "40px" }}></img>
    //           {/* <div style={{height:"20px"}}></div> */}
    //           <img alt="" src={loginani} style={{ width: "90%" }}></img>
    //         </div>
    //       </Col>
    //       <Col md={5}>
    //         <div style={{ height: "100px" }}></div>

    //         <div style={{ margin: "30px" }}>
    //           <p className="signinlog">SIGN UP.</p>
    //           <p className="textala">Give us some of your information to get free access to SLP</p>
    //           <p className="textala">*Required Information</p>
              
    //           <div className="App">
    //             <Form className="form" onSubmit={(e) => this.submitForm(e)}>
    //               <FormGroup>
    //                 <p className="labellogin">
    //                   Full Name
    //                   <Text style={{ color: "#D74040" }}>*</Text>{" "}
    //                 </p>
    //                 <Input 
    //                 id="firstName" 
    //                 name="name" 
    //                 variant="outlined" 
    //                 placeholder="enter your full name" 
    //                 className="formlogin" 
    //                 handleChange={this.handleChange} 
    //                 autoFocus
    //                 required/>
    //               </FormGroup>
    //               <FormGroup>
    //                 <p className="labellogin">
    //                   Email
    //                   <Text style={{ color: "#D74040" }}>*</Text>{" "}
    //                 </p>
    //                 <Input
    //                   placeholder="enter your email address"
    //                   className="formlogin"
    //                   type="email"
    //                   name="email"
    //                   id="exampleEmail"
    //                   //   placeholder="example@example.com"
    //                   valid={this.state.validate.emailState === "has-success"}
    //                   invalid={this.state.validate.emailState === "has-danger"}
    //                   value={email}
    //                   onChange={(e) => {
    //                     this.validateEmail(e);
    //                     this.handleChange(e);
    //                   }}
    //                 />
    //                 <FormFeedback>Please input a correct email.</FormFeedback>
                    
    //               </FormGroup>
    //               <FormGroup>
    //                 <p className="labellogin">
    //                   Password
    //                   <Text style={{ color: "#D74040" }}>*</Text>{" "}
    //                 </p>
            
    //                 <PasswordShowHide onChange={this.handleChange}/>
    //               </FormGroup>
                  
    //               <button className="buttonlogin" type="submit">Sign Up</button>

    //               <p className="signup1">
    //                 Already have an account <Text style={{ color: "#D74040" }}>Log in</Text>{" "}
    //               </p>
    //             </Form>
    //           </div>
    //         </div>
    //       </Col>
    //     </Row>
    //   </>
    // );
//   }
// }

// export default Signup;

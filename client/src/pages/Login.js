import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Input, InputGroup, InputGroupText } from "reactstrap";
import { signin } from "../actions/auth.js";
import logoslplogin from "../component/icons/Group 116.png";
import hidePwdImg from "../component/icons/hide-password.svg";
import loginani from "../component/icons/login-ilust.png";
import showPwdImg from "../component/icons/show-password.svg";
import { NavLink } from "../elements/loginElement";
import "./loginpage.css";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const authData = useSelector((state) => state.auth);

  const [emptyForm, setEmptyForm] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email) {
      setEmptyForm("email");
    } else if (!formData.password) {
      setEmptyForm("password");
    } else {
      dispatch(signin(formData, history));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Row style={{ overflowX: "hidden" }}>
        <Col md={7}>
          <div
            style={{
              height: "auto",
              width: "auto",
              backgroundColor: "#D74040",
            }}
          >
            <img
              src={logoslplogin}
              style={{ width: "50%", padding: "40px" }}
            ></img>
            <img src={loginani} style={{ width: "90%" }}></img>
          </div>
        </Col>
        <Col md={5}>
          <div style={{ height: "100px" }}></div>

          <div style={{ margin: "25px" }}>
            <p className="welcome">Welcome</p>
            <p className="loginlog">LOGIN.</p>
            <p className="textala">
              Login with your data that you entered during your registration
            </p>

            <div className="App">
              <Form className="form" onSubmit={handleSubmit}>
                <FormGroup>
                  <p className="labellogin">
                    Email
                    <Text style={{ color: "#D74040" }}>*</Text>{" "}
                  </p>
                  <Input
                    placeholder="enter your email address"
                    className="formlogin inputcustom"
                    type="email"
                    name="email"
                    id="exampleEmail"
                    onChange={handleChange}
                  />
                  {emptyForm === "email" && (
                    <>
                      <div style={{ height: "5px" }}></div>
                      <p className="alertpw">Please fill email field</p>
                    </>
                  )}
                </FormGroup>
                <FormGroup>
                  <p className="labellogin">
                    Password
                    <Text style={{ color: "#D74040" }}>*</Text>{" "}
                  </p>
                  <InputGroup>
                    <Input
                      name="password"
                      placeholder="Enter Password"
                      type={isRevealPwd ? "text" : "password"}
                      // value={pwd}
                      onChange={handleChange}
                      className="formlogin inputcustom inputpassword"
                    />
                    <InputGroupText className="buttonpassword">
                      <img
                        alt=""
                        title={isRevealPwd ? "Hide password" : "Show password"}
                        src={isRevealPwd ? hidePwdImg : showPwdImg}
                        onClick={() =>
                          setIsRevealPwd((prevState) => !prevState)
                        }
                      />
                    </InputGroupText>
                  </InputGroup>
                </FormGroup>
                {emptyForm === "password" && (
                  <p className="alertpw">Please fill password field</p>
                )}
                {authData.error !== "" && (
                  <p style={{ color: "red" }}>{authData.error}</p>
                )}
                <FormGroup>
                  <button className="buttonsubmit" type="submit">
                    Login
                  </button>
                </FormGroup>

                <p className="signup1">
                  Don't have an account?{" "}
                  <NavLink
                    to="/register"
                    style={{ color: "#D74040", marginLeft: "5px" }}
                  >
                    Sign Up
                  </NavLink>{" "}
                </p>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Login;

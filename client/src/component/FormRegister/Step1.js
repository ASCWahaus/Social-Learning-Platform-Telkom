import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { Form, FormGroup, Input, InputGroup, InputGroupText } from "reactstrap";
import logoslplogin from "../../component/icons/Group 116.png";
import hidePwdImg from "../../component/icons/hide-password.svg";
import loginani from "../../component/icons/login-ilust.png";
import showPwdImg from "../../component/icons/show-password.svg";
import "../../pages/Signup.css";
import { AvField, AvForm } from "availity-reactstrap-validation";


const Step1 = ({ setFormData, formData, navigation }) => {
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const dispatch = useDispatch();
  // const history = useHistory();
  const { next } = navigation;
  const { name, email, password } = formData;
  const authData = useSelector((state) => state.auth);
  const [emptyForm, setEmptyForm] = useState(null);

  const handleNext = (e) => {
    e.preventDefault();
    if (!formData.name) {
      setEmptyForm("name");
    } else if (!formData.email) {
      setEmptyForm("email");
    } else if (!formData.password) {
      setEmptyForm("password");
    } else {
      dispatch(next);
    }
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
              alt=""
              src={logoslplogin}
              style={{ width: "50%", padding: "40px" }}
            ></img>
            {/* <div style={{height:"20px"}}></div> */}
            <img alt="" src={loginani} style={{ width: "90%" }}></img>
          </div>
        </Col>
        <Col md={5}>
          <div style={{ height: "100px" }}></div>

          <div style={{ margin: "25px" }}>
            <p className="signinlog">SIGN UP.</p>
            <p className="textala">
              Give us some of your information to get free access to SLP
            </p>
            <p className="textala">
              <Text style={{ color: "#D74040" }}>*</Text>Required Information
            </p>

            <div className="App">
              <Form className="form">
                <FormGroup>
                  <p className="labellogin">
                    Full Name
                    <Text style={{ color: "#D74040" }}>*</Text>{" "}
                  </p>
                  {/* <Input
                    id="name"
                    name="name"
                    value={name}
                    type="text"
                    variant="outlined"
                    placeholder="enter your full name"
                    className="formlogin"
                    onChange={setFormData}
                    autoFocus
                    required
                  />
                  {emptyForm === "name" && (
                    <>
                      <div style={{ height: "5px" }}></div>
                      <p className="alertpw">Please fill fullname field</p>
                    </>
                  )} */}
                  <AvForm>
                    <AvField
                      id="name"
                      name="name"
                      value={name}
                      type="text"
                      variant="outlined"
                      placeholder="enter your full name"
                      className="formlogin"
                      onChange={setFormData}
                      validate={{
                        required: {
                          value: true,
                          errorMessage: "Please enter a full name",
                        },
                        pattern: {value: '^([^0-9]*)$', errorMessage: 'Your name must be composed only with letter'},
                        maxLength: {
                          value: 60,
                          errorMessage:
                            "Your full name must be less than 60 characters",
                        },
                      }}
                    />
                  </AvForm>
                </FormGroup>
                <FormGroup>
                  <p className="labellogin">
                    Email
                    <Text style={{ color: "#D74040" }}>*</Text>{" "}
                  </p>
                  <AvForm>
                  <AvField                     
                    placeholder="enter your email address"
                    className="formlogin"
                    type="email"
                    name="email"
                    value={email}
                    id="exampleEmail"
                    onChange={setFormData}/>
                  </AvForm>
                  {/* <Input
                    placeholder="enter your email address"
                    className="formlogin"
                    type="email"
                    name="email"
                    value={email}
                    id="exampleEmail"
                    onChange={setFormData}
                  />
                  {emptyForm === "email" && (
                    <>
                      <div style={{ height: "5px" }}></div>
                      <p className="alertpw">Please fill email field</p>
                    </>
                  )}{" "} */}
                </FormGroup>
                <FormGroup>
                  <p className="labellogin">
                    Password
                    <Text style={{ color: "#D74040" }}>*</Text>{" "}
                  </p>
                  <InputGroup>
                    {/* <Input
                      name="password"
                      value={password}
                      placeholder="enter your password"
                      type={isRevealPwd ? "text" : "password"}
                      // value={pwd}
                      onChange={setFormData}
                      className="formlogin inputcustom inputpassword"
                    /> */}
                                      <AvForm>
                  <AvField                     
                   name="password"
                   value={password}
                   placeholder="enter your password"
                   type={isRevealPwd ? "text" : "password"}
                   style={{width:"100%"}}
                   onChange={setFormData}
                   className="formlogin inputcustom inputpassword"
                   validate={{
                    required: { value: true, errorMessage: "Please enter a password" },
                    minLength: {
                      value: 8,
                      errorMessage:
                        "Your password must be between 8 and 32 characters",
                    },
                    maxLength: {
                      value: 32,
                      errorMessage:
                        "Your password must be between 8 and 32 characters",
                    },
                  }}
                   />
                  </AvForm>
                    <InputGroupText className="buttonpasswordregist">
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
                {/* {emptyForm === "password" && (
                  <p className="alertpw">Please fill password field</p>
                )}
                {authData.error !== "" && (
                  <p style={{ color: "red" }}>{authData.error}</p>
                )} */}
                {/* <p className="pwmin8">Make sure it's at least 8 characters </p> */}

                <button
                  className="buttonsubmit"
                  type="button"
                  onClick={handleNext}
                >
                  Next
                </button>

                {console.log(formData)}
                <p className="signup1">
                  Already have an account?{" "}
                  <NavLink
                    to="/login"
                    style={{ color: "#D74040", marginLeft: "5px" }}
                  >
                    Log in
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

export default Step1;

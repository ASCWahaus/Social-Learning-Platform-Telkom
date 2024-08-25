import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Text } from "react-native";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Input } from "reactstrap";
import { signup } from "../../actions/auth.js";
import logoslplogin from "../../component/icons/Group 116.png";
import loginani from "../../component/icons/login-ilust.png";
import "./Formregist.css";
import { AvField, AvForm } from "availity-reactstrap-validation";


const initialState = {
  position: "",
  company: "",
  biography: "",
};

const Step2 = ({ setFormData, formData, navigation }) => {
  const { go } = navigation;
  const dispatch = useDispatch();
  // const history = useHistory();
  const { position, company, biography } = formData;
  // const { next } = navigation;
  const { previous } = navigation;
  const [emptyForm, setEmptyForm] = useState(null);

  const handleClick = () => {
    go("submit");
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(signup(formData)); //exclude , history
  //   handleClick();
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.position) {
      setEmptyForm("position");
    } else if (!formData.company) {
      setEmptyForm("company");
    } else {
      e.preventDefault();
      dispatch(signup(formData)); //exclude , history
      handleClick();
    }
  };

  return (
    <>
      <Row>
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
            <img alt="" src={loginani} style={{ width: "90%" }}></img>
          </div>
        </Col>
        <Col md={5}>
          <div style={{ height: "30px" }}></div>
          <div style={{ margin: "25px" }}>
            <button onClick={previous} className="biodataback">
              <Icon
                icon="eva:arrow-ios-back-fill"
                color="#686A71"
                height="37"
              />
              Back
            </button>
            <div style={{ height: "30px" }}></div>
            <p className="textala">
              Let's get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>
            <p className="textala">
              <Text style={{ color: "#D74040" }}>*</Text>Required Information
            </p>
            <div className="App">
              <Form className="form" onSubmit={handleSubmit}>
                <FormGroup>
                  <p className="labellogin">
                    Position
                    <Text style={{ color: "#D74040" }}>*</Text>{" "}
                  </p>
                  {/* <Input
                    id="position"
                    value={position}
                    name="position"
                    variant="outlined"
                    onChange={setFormData}
                    placeholder="ex: Human Resource Development"
                    className="formlogin"
                  />
                  {emptyForm === "position" && (
                    <>
                      <div style={{ height: "5px" }}></div>
                      <p className="alertpw">Please fill position field</p>
                    </>
                  )} */}
                  <AvForm>
                    <AvField
                      id="position"
                      value={position}
                      name="position"
                      variant="outlined"
                      onChange={setFormData}
                      placeholder="ex: Human Resource Development"
                      className="formlogin"
                      validate={{
                        required: {
                          value: true,
                          errorMessage: "Please enter a position",
                        },
                        minLength: {
                          value: 8,
                          errorMessage:
                            "Your position must be between 8 and 60 characters",
                        },
                        maxLength: {
                          value: 60,
                          errorMessage:
                            "Your position must be between 8 and 60 characters",
                        },
                      }}
                    />
                  </AvForm>
                </FormGroup>
                <FormGroup>
                  <p className="labellogin">
                    Company
                    <Text style={{ color: "#D74040" }}>*</Text>{" "}
                  </p>
                  {/* <Input
                    id="company"
                    value={company}
                    name="company"
                    onChange={setFormData}
                    placeholder="Ex: Corpu"
                    className="formlogin"
                  />
                  {emptyForm === "company" && (
                    <>
                      <div style={{ height: "5px" }}></div>
                      <p className="alertpw">Please fill company field</p>
                    </>
                  )} */}
                    <AvForm>
                    <AvField
                      id="company"
                      value={company}
                      name="company"
                      onChange={setFormData}
                      placeholder="Ex: Corpu"
                      className="formlogin"
                      validate={{
                        required: {
                          value: true,
                          errorMessage: "Please enter a company",
                        },
                        minLength: {
                          value: 8,
                          errorMessage:
                            "Your company must be between 8 and 60 characters",
                        },
                        maxLength: {
                          value: 60,
                          errorMessage:
                            "Your company must be between 8 and 60 characters",
                        },
                      }}
                    />
                  </AvForm>
                </FormGroup>
                <FormGroup>
                  <p className="labellogin">Biography </p>

                  <textarea
                    className="descbox"
                    name="biography"
                    value={biography}
                    onChange={setFormData}
                    variant="outlined"
                    label="Biography"
                    id="biography"
                    rows="5"
                    placeholder="Enter your personalize"
                  ></textarea>
                </FormGroup>
                <button className="buttonsubmit" type="submit">
                  Create Account
                </button>
                {console.log(formData)}
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Step2;

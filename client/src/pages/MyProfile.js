import { Icon } from "@iconify/react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ExitToAppSharpIcon from "@mui/icons-material/ExitToAppSharp";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { AvField, AvForm } from "availity-reactstrap-validation";
import * as React from "react";
import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Modal from "react-modal";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import ShowMore from "react-show-more";
import { FormGroup, Input } from "reactstrap";
import { addskill, getProfile, updateMyprofile } from "../actions/posts";
import ProfilePhoto from "../component/AvaEditor/ProfilePhoto";
import Footer from "../component/footer/footer";
import noneava from "../component/icons/noneava.png";
import Navbar from "../component/navbar/navbar";
import * as actionType from "../constants/actionTypes";
import "./MyProfile.css";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const customStyles = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: "40%",
    height: "80vh",
    borderRadius: "12.4014px",
  },
};

const customStylesAdd = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: "40%",

    borderRadius: "12.4014px",
  },
};

export default function MyProfile() {
  const stateProfile = useSelector((state) => state);
  const dispatch = useDispatch();
  const [modalIsOpening, setIsOpening] = React.useState(false);
  const [modalIsOpenProf, setIsOpenProf] = React.useState(false);
  const [modalIsOpenAva, setIsOpenAva] = React.useState(false);
  const [isOpenImg, setIsOpenImg] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [imageChanged, setImageChanged] = useState(false);
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const [dataprofile, setDataprofile] = useState(stateProfile.profile.profile);
  const [skill, setSkill] = useState([]);

  const fetchProfileData = async (id) => {
    console.log(stateProfile);
    await dispatch(getProfile(id));
    setImageSrc(stateProfile.profile.profile?.avatar);
  };

  useEffect(() => {
    const profiledata = JSON.parse(localStorage.getItem("profile"));
    if (profiledata?._id) {
      console.log(stateProfile);
      dispatch(getProfile(profiledata?._id));
    }
  }, []);

  useEffect(() => {
    console.log(stateProfile.profile.profile);
    setDataprofile(stateProfile.profile.profile);
    setSkill(stateProfile.profile.profile.skills);
    setImageSrc(stateProfile.profile.profile?.avatar);
  }, [stateProfile.profile.profile]);

  const getData = (isOpened, imagesSrc) => {
    setIsOpenImg(isOpened);
    setImageSrc(imagesSrc);
  };

  function openModal() {
    setIsOpening(true);
  }

  function openModalProf() {
    setIsOpenProf(true);
  }

  function openModalAva() {
    setIsOpenAva(true);
  }

  function afterOpenModal() {}
  function afterOpenModalProf() {}
  function afterOpenModalAva() {}

  function closeModal() {
    setIsOpening(false);
  }
  function closeModalProf() {
    setIsOpenProf(false);
  }

  function closeModalAva() {
    setIsOpenAva(false);
  }

  const handleUploadAva = ({ file, preview }) => {
    console.log(file);
    setDataprofile({ ...dataprofile, avatar: file, avatarCrop: preview });
    setImageChanged(true);
  };

  const handleClickSkills = (e) => {
    dispatch(addskill(dataprofile._id, skill));
    setIsOpening(false);
  };

  const handleSubmit = (e) => {
    dispatch(updateMyprofile(dataprofile._id, dataprofile, imageChanged));
    closeModalProf();
  };

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/login");

    setUser(null);
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="container-wrapper">
        <div className="sidebar-wrapper">
          <ul class="sidebar sidebar-new">
            <li style={{ backgroundColor: "#393B45" }}>
              <a href="/myprofile" style={{ color: "white" }}>
                {" "}
                <AccountCircleIcon
                  fontSize="34px"
                  style={{ marginRight: "10px" }}
                />
                Profile
              </a>
            </li>
            <li>
              <a href="/mycontent">
                {" "}
                <LibraryBooksIcon
                  fontSize="34px"
                  style={{ marginRight: "10px" }}
                />{" "}
                My Content
              </a>
            </li>
            <li onClick={logout}>
              <a href="">
                {" "}
                <ExitToAppSharpIcon
                  fontSize="34px"
                  style={{ marginRight: "10px", color: "red" }}
                />
                <span style={{ color: "red" }}>Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="content-wrapper">
          <Container>
            <p className="textmy"> Profile</p>
            <div className="containerprofile">
              <Row>
                <Col md={2}>
                  <Image
                    src={imageSrc || noneava}
                    style={{
                      padding: "40px 0px 70px 40px",
                      width: "100%",
                    }}
                  />
                </Col>
                <Col md={10}>
                  <Container>
                    <div style={{ marginTop: "8%" }}>
                      <Row>
                        <Col md={2}>
                          <p className="nameprofile">{dataprofile.name}</p>
                        </Col>
                        <Col md={10}>
                          <button className="addskill" onClick={openModalProf}>
                            EDIT PROFILE
                          </button>
                          <Modal
                            isOpen={modalIsOpenProf}
                            onAfterOpen={afterOpenModalProf}
                            onRequestClose={closeModalProf}
                            style={customStyles}
                            overlayClassName="Overlay"
                          >
                            <button
                              onClick={closeModalProf}
                              className="buttonclosex"
                            >
                              <Icon icon="ci:close-big" height="25" />
                            </button>
                            <div style={{ height: "20px" }}></div>
                            <p className="editskill">Edit Profile</p>
                            <Container>
                              <ProfilePhoto
                                getData={getData}
                                imageSrc={imageSrc}
                                onChanges={handleUploadAva}
                              />
                              <p className="maxsizetext">
                                MAXIMUM UPLOAD 3MB [IMAGES]
                              </p>
                            </Container>
                            <Container>
                              <FormGroup>
                                <p>
                                  <Text
                                    style={{
                                      fontFamily: "Quicksand",
                                      color: "Black",
                                      fontSize: "14.7px",
                                    }}
                                  >
                                    Full Name
                                  </Text>
                                </p>
                                {/* <Input
                                  name="url"
                                  variant="outlined"
                                  style={{
                                    fontFamily: "Quicksand",
                                    fontSize: "15px",
                                    padding: "10px",
                                    color: "#393B45",
                                  }}
                                  label="Url"
                                  fullWidth
                                  placeholder="Full Name"
                                  value={dataprofile?.name || ""}
                                  onChange={(e) =>
                                    setDataprofile({
                                      ...dataprofile,
                                      name: e.target.value,
                                    })
                                  }
                                /> */}
                                <AvForm>
                                  <AvField
                                    name="name"
                                    variant="outlined"
                                    style={{
                                      fontFamily: "Quicksand",
                                      fontSize: "15px",
                                      padding: "10px",
                                      color: "#393B45",
                                    }}
                                    fullWidth
                                    placeholder="Full Name"
                                    value={dataprofile?.name || ""}
                                    onChange={(e) =>
                                      setDataprofile({
                                        ...dataprofile,
                                        name: e.target.value,
                                      })
                                    }
                                    validate={{
                                      required: {
                                        value: true,
                                        errorMessage:
                                          "Please enter a full name",
                                      },
                                      pattern: {
                                        value: "^([^0-9]*)$",
                                        errorMessage:
                                          "Your name must be composed only with letter",
                                      },
                                      maxLength: {
                                        value: 60,
                                        errorMessage:
                                          "Your full name must be less than 60 characters",
                                      },
                                    }}
                                  />
                                </AvForm>
                              </FormGroup>
                              <Row>
                                <Col md={6}>
                                  <FormGroup>
                                    <p>
                                      <Text
                                        style={{
                                          fontFamily: "Quicksand",
                                          color: "Black",
                                          fontSize: "14.7px",
                                        }}
                                      >
                                        Position
                                      </Text>
                                    </p>
                                    {/* <Input
                                      name="url"
                                      variant="outlined"
                                      style={{
                                        fontFamily: "Quicksand",
                                        fontSize: "15px",
                                        padding: "10px",
                                      }}
                                      label="Url"
                                      fullWidth
                                      value={dataprofile?.position || ""}
                                      onChange={(e) =>
                                        setDataprofile({
                                          ...dataprofile,
                                          position: e.target.value,
                                        })
                                      }
                                    /> */}
                                    <AvForm>
                                      <AvField
                                        id="position"
                                        name="position"
                                        variant="outlined"
                                        style={{
                                          fontFamily: "Quicksand",
                                          fontSize: "15px",
                                          padding: "10px",
                                        }}
                                        value={dataprofile?.position || ""}
                                        onChange={(e) =>
                                          setDataprofile({
                                            ...dataprofile,
                                            position: e.target.value,
                                          })
                                        }
                                        placeholder="ex: Human Resource Development"
                                        validate={{
                                          required: {
                                            value: true,
                                            errorMessage:
                                              "Please enter a position",
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
                                </Col>
                                <Col md={6}>
                                  <FormGroup>
                                    <p>
                                      <Text
                                        style={{
                                          fontFamily: "Quicksand",
                                          color: "Black",
                                          fontSize: "14.7px",
                                        }}
                                      >
                                        Company
                                      </Text>
                                    </p>

                                    <AvForm>
                                      <AvField
                                        id="company"
                                        name="company"
                                        placeholder="Telkom Corpu"
                                        style={{
                                          fontFamily: "Quicksand",
                                          fontSize: "15px",
                                          padding: "10px",
                                        }}
                                        value={dataprofile?.company || ""}
                                        onChange={(e) =>
                                          setDataprofile({
                                            ...dataprofile,
                                            company: e.target.value,
                                          })
                                        }
                                        validate={{
                                          required: {
                                            value: true,
                                            errorMessage:
                                              "Please enter a company",
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
                                </Col>
                              </Row>
                              <FormGroup>
                                <p>
                                  <Text
                                    style={{
                                      fontFamily: "Quicksand",
                                      color: "Black",
                                      fontSize: "14.7px",
                                    }}
                                  >
                                    Biography
                                  </Text>
                                </p>
                                <Input
                                  type="textarea"
                                  style={{
                                    fontFamily: "Quicksand",
                                    width: "100%",
                                    row: "3",
                                    background: "#FFFFFF",
                                    border: "1.5px solid #ced4da",
                                    boxSizing: "border-box",
                                    borderRadius: "7.34848px",
                                    fontSize: "15px",
                                    padding: "10px",
                                    overflow: "scroll",
                                  }}
                                  name="description"
                                  variant="outlined"
                                  label="Description"
                                  fullWidth
                                  value={dataprofile?.biography || ""}
                                  onChange={(e) =>
                                    setDataprofile({
                                      ...dataprofile,
                                      biography: e.target.value,
                                    })
                                  }
                                />
                              </FormGroup>
                              <button
                                className="savebutton"
                                onClick={(e) => handleSubmit(e)}
                              >
                                SAVE CHANGES
                              </button>
                            </Container>
                          </Modal>
                        </Col>
                      </Row>
                      <div style={{ height: "30px" }}></div>
                      <div style={{ width: "100%" }}>
                        <Row>
                          <Col md={2}>
                            <p className="subheadprofile">Position</p>
                            <p className="fieldinprofile">
                              {dataprofile.position}
                            </p>
                          </Col>
                          <Col md={6}>
                            <p className="subheadprofile">Companies</p>
                            <p className="fieldinprofile">
                              {dataprofile.company}
                            </p>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Container>
                </Col>
              </Row>
            </div>

            <div className="containerprofile">
              <div className="boxprof">
                <p className="titleprof">About Me</p>
                <div className="descabout">
                  <ShowMore
                    lines={3}
                    more="Show more"
                    less="Show less"
                    anchorClass="my-anchor-class"
                  >
                    {dataprofile.biography}
                  </ShowMore>
                </div>
              </div>
            </div>

            <div className="containerprofile">
              <div className="boxprof">
                <p className="titleprof">Skills</p>

                {dataprofile.skills?.map((item) => (
                  <>
                    <p className="listskill">{item}</p>
                    <div
                      style={{
                        height: "1px",
                        width: "100%",
                        backgroundColor: "#393B45",
                        marginBottom: "15px",
                      }}
                    ></div>
                  </>
                ))}

                <button onClick={openModal} className="addskill">
                  ADD SKILLS +
                </button>
                <Modal
                  isOpen={modalIsOpening}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStylesAdd}
                  overlayClassName="Overlay"
                >
                  <button onClick={closeModal} className="buttonclosex">
                    <Icon icon="ci:close-big" height="25" />
                  </button>
                  <div style={{ height: "20px" }}></div>
                  <Container>
                    <p className="editskill">Add or Edit Skills</p>
                    <button
                      className="savebutton"
                      onClick={() => handleClickSkills()}
                    >
                      SAVE CHANGES
                    </button>
                    <div style={{ height: "20px" }}></div>

                    <Autocomplete
                      multiple
                      freeSolo
                      id="checkboxes-tags-demo"
                      options={skills}
                      disableCloseOnSelect
                      sx={{ fontFamily: "Quicksand" }}
                      getOptionLabel={(option) => option.title || option}
                      onChange={(e, val) => setSkill(val)}
                      value={skill}
                      renderOption={(props, option, { selected }) => (
                        <li {...props}>
                          <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={
                              selected ||
                              dataprofile.skills.find((item) => item === option)
                            }
                            sx={{
                              color: "#129490",
                              "&.Mui-checked": {
                                color: "#129490",
                              },
                            }}
                          />
                          {option}
                        </li>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          margin="normal"
                          placeholder="Choose or type your skills"
                          fullWidth
                          variant="outlined"
                          label="-"
                        />
                      )}
                    />
                  </Container>
                </Modal>
              </div>
            </div>
          </Container>
          <Footer />
        </div>
      </div>
    </>
  );
}

const skills = [
  "Cloud Computing",
  "Cybersecurity",
  "Networking and Wireless",
  "System and Enterprise Architecture",
  "AI and Machine Learning",
  "Data Management",
  "Project Management",
  "Internet of Things (IoT)",
  "Software Developer",
  "UI/UX Designer",
  "System Analyst",
  "Data Scientist",
  "Quality Assurance",
  "Telecommunications Specialist",
  "Social Media and Digital Marketing",
  "Data Analysis & Visualization",
  "Project & Campaign Management",
  "People Management",
  "Business Development",
  "Strategic Management",
  "Innovation",
  "Customer Relationship Management (CRM)",
  "Product Knowledge & Development",
  "Design Editing",
  "Researcher",
  "Big Data Analysis & SQL",
  "Agile Business Analysis",
  "Machine learning",
  "Business Process Modeling",
  "Technical and Non-technical Communication",
  "Agile Management",
  "Scrum Implementation",
  "Design Thinking",
  "Access Network Planning and Design ",
  "Wireless Communication",
  "Customer Orientation",
];


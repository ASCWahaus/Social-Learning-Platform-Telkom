import * as React from "react";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Modal from "react-modal";
import { Icon } from "@iconify/react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppSharpIcon from "@mui/icons-material/ExitToAppSharp";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Navbar from "../component/navbar/navbar";
import { Col, Container, Image, Row } from "react-bootstrap";
import ava from "../component/icons/avaa.png";
import ShowMore from "react-show-more";
import { Text } from "react-native";
import { FormGroup, Input } from "reactstrap";
// import ToggleButton from "../component/AvaEditor/ToggleButton"
import CreateAvatar from "../component/AvaEditor/CreateAvatar";
import ProfilePhoto from "../component/AvaEditor/ProfilePhoto";
// import Portal from "../component/AvaEditor/Portal";

import "./MyProfile.css";
import { TextareaAutosize } from "@mui/material";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: "650px",
    height: "auto",
    borderRadius: "12.4014px",
  },
};

export default function MyProfile() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpenProf, setIsOpenProf] = React.useState(false);
  const [modalIsOpenAva, setIsOpenAva] = React.useState(false);
  const [isOpenImg, setIsOpenImg] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const getData = (isOpened, imageSrc) => {
    setIsOpenImg(isOpened);
    setImageSrc(imageSrc);
  };

  function openModal() {
    setIsOpen(true);
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
    setIsOpen(false);
  }
  function closeModalProf() {
    setIsOpenProf(false);
  }

  function closeModalAva() {
    setIsOpenAva(false);
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div class="content">
        <div class="sidebar1">
          <ul class="sidebar">
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
            {/* <li>
                <a href="#">
                  {" "}
                  <ModeEditSharpIcon
                    fontSize="34px"
                    style={{ marginRight: "10px" }}
                  />
                  Edit Profile
                </a>
              </li> */}
            <li>
              <a href="#">
                {" "}
                <ExitToAppSharpIcon
                  fontSize="34px"
                  style={{ marginRight: "10px" }}
                />
                Sign Out
              </a>
            </li>
          </ul>
        </div>
        <Container>
          <p className="textmy"> Profile</p>
          <div className="containerprofile">
            <Row>
              {/* <Col md={5} style={{ paddingRight: 0 }}>
                  <div
                    style={{
                      width: "151px",
                      height: "151px",
                      paddingTop: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    <Container>
                    <Image
                      src={ava}
                      style={{
                        width: "100%",
                        height: "100%",
                        paddingBottom: "2%",
                        marginLeft: "5%",
                        display: "flex",
                      }}
                    />


                    </Container>
                  </div>
                </Col> */}
              <Col md={2}>
                {/* <Container> */}
                <Image
                  src={ava}
                  style={{
                    padding: "40px 0px 70px 40px",
                    width: "100%",
                    // width: "75%",
                    // height: "100%",
                    // paddingBottom: "65px",
                    // marginLeft: "5%",
                    // display: "flex",
                  }}
                />
                {/* </Container> */}
              </Col>
              <Col md={10}>
                <Container>
                  <Row>
                    <Col md={2}>
                      <p>Tester</p>
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

                        <ProfilePhoto getData={getData} imageSrc={imageSrc} />

                        <div className="buttonava">
                        <button className="removefotobut">REMOVE PHOTO</button>
                        <button getData={getData} imageSrc={imageSrc} onClick={openModalAva} className="addfotobut">UPLOAD PHOTO</button>

                        <Modal
                        isOpen={modalIsOpenAva}
                        onAfterOpen={afterOpenModalAva}
                        onRequestClose={closeModalAva}
                        style={customStyles}
                        overlayClassName="Overlay"
                      >
                        <button
                          onClick={closeModalAva}
                          className="buttonclosex"
                        >
                          <Icon icon="ci:close-big" height="25" />
                        </button>
                        <div style={{ height: "20px" }}></div>
                        <div id="createAvatarDiv" />
                        {!toggle || !imageSrc && (
                          // <Portal portalDiv="createAvatarDiv">
                            <div className="createAvatarDiv_content m-auto">
                              <CreateAvatar imageSrc={imageSrc}  getData={getData} />
                            </div>
                          // </Portal>
                        )}
                        
                      </Modal>
                        </div>


                        <p className="maxsizetext">MAXIMUM UPLOAD 25MB [IMAGES]</p>


                        {/* <div id="createAvatarDiv" />
                        {isOpenImg && !imageSrc && (
                          // <Portal portalDiv="createAvatarDiv">
                            <div className="createAvatarDiv_content m-auto">
                              <CreateAvatar getData={getData} />
                            </div>
                          // </Portal>
                        )} */}
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
                            <Input
                              name="url"
                              variant="outlined"
                              style={{
                                fontFamily: "Quicksand",
                                fontSize: "15px",
                                padding: "10px",
                              }}
                              label="Url"
                              fullWidth
                              placeholder="Full Name"
                              // value={postData.url}
                            />
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
                                <Input
                                  name="url"
                                  variant="outlined"
                                  style={{
                                    fontFamily: "Quicksand",
                                    fontSize: "15px",
                                    padding: "10px",
                                  }}
                                  label="Url"
                                  fullWidth
                                  placeholder="HRD"
                                  // value={postData.url}
                                />
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
                                <Input
                                  name="url"
                                  variant="outlined"
                                  style={{
                                    fontFamily: "Quicksand",
                                    fontSize: "15px",
                                    padding: "10px",
                                  }}
                                  label="Url"
                                  fullWidth
                                  placeholder="Telkom Corpu"
                                  // value={postData.url}
                                />
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
                            {/* <TextareaAutosize
                            fullWidth
                              name="url"
                              variant="outlined"
                              style={{
                                scrollBehavior:"auto",
                                height:"100px",
                                width:"100%",
                                fontFamily: "Quicksand",
                                fontSize: "15px",
                                padding: "10px",
                                borderColor:"rgba(235, 234, 234, 1)",
                                borderRadius:"8px"
                              }}
                              label="Url"                             
                              placeholder="Full Name"
                              // value={postData.url}
                            /> */}

                            <Input
                              type="textarea"
                              style={{
                                width: "100%",
                                row: "3",
                                background: "#FFFFFF",
                                border: "1.5px solid #686A71",
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
                            />
                          </FormGroup>
                        </Container>
                      </Modal>
                    </Col>
                  </Row>

                  <Row style={{ backgroundColor: "gray" }}>
                    <Col md={4}>
                      <p>Position</p>
                      <p>HRD</p>
                    </Col>
                    <Col md={8}>
                      <p>Companies</p>
                      <p>Telkom Corpu</p>
                    </Col>
                  </Row>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  porttitor in sem a imperdiet. Nulla non lorem posuere,
                  tristique ante nec, iaculis magna. Sed a mollis nunc.
                  Pellentesque tempor sit amet lectus ut gravida. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Vestibulum
                  maximus erat sit amet massa lacinia scelerisque. Nam pulvinar,
                  massa vel placerat lobortis, mauris urna placerat augue, ut
                  faucibus ante ex et tortor. In a metus in dui sagittis
                  facilisis. Duis sit amet elit eget magna gravida rutrum non a
                  lectus. Cras egestas odio id arcu interdum, eget dapibus elit
                  blandit. Sed laoreet, tellus at rutrum vulputate, nisl justo
                  tincidunt purus, vitae pharetra diam sapien in lectus. Aliquam
                  quis mauris id dolor commodo tincidunt. Maecenas tincidunt
                  ipsum est. Etiam ornare consequat lorem eget malesuada. In
                  scelerisque magna vitae arcu imperdiet, ac malesuada risus
                  ultricies. Nullam non efficitur purus. Proin ullamcorper massa
                  magna, nec vehicula ligula venenatis id. Donec in tortor sit
                  amet mi vehicula mollis. Morbi in ligula vel nibh varius
                  ullamcorper. Phasellus venenatis, ante eu ultricies cursus,
                  felis augue tristique augue, ac fermentum dui dolor non odio.
                  Donec vel suscipit magna.{" "}
                </ShowMore>
              </div>
            </div>
          </div>

          <div className="containerprofile">
            <div className="boxprof">
              <p className="titleprof">Skills</p>

              <button onClick={openModal} className="addskill">
                ADD SKILLS +
              </button>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                overlayClassName="Overlay"
              >
                <button onClick={closeModal} className="buttonclosex">
                  <Icon icon="ci:close-big" height="25" />
                </button>
                <div style={{ height: "20px" }}></div>
                <Container>
                  <p className="editskill">Add or Edit Skills</p>
                  <button className="savebutton">SAVE CHANGES</button>
                  <div style={{ height: "20px" }}></div>

                  <Autocomplete
                    multiple
                    freeSolo
                    id="checkboxes-tags-demo"
                    options={top100Films}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.title || option}
                    renderOption={(props, option, { selected }) => (
                      <li {...props}>
                        <Checkbox
                          icon={icon}
                          checkedIcon={checkedIcon}
                          style={{ marginRight: 8 }}
                          checked={selected}
                        />
                        {option.title}
                      </li>
                    )}
                    // style={{ width: 500 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        margin="normal"
                        placeholder="Add Skills"
                        fullWidth
                        variant="outlined"
                      />
                    )}
                  />
                </Container>
              </Modal>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
];

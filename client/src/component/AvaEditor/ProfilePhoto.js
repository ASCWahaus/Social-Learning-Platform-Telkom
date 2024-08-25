import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Avatar from "react-avatar-edit";
import Modal from "react-modal";
import "../../pages/MyProfile.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import noneava from "../../component/icons/noneava.png";
import { convertBase64toFile } from "../../actions/posts";

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

const ProfilePhoto = ({ getData, imageSrc, onChanges }) => {
  const [modalIsOpening, setIsOpening] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [errorPhoto, setErrorPhoto] = useState(false);

  const [toggle, setToggle] = useState(false);

  const handleToggleClick = () => {
    setToggle(true);
    getData(true, imageSrc);
  };

  const deletePic = () => {
    setToggle(false);
    getData(false, "");
  };

  const [preview, setPreview] = useState("");
  const [croppedImg, setCroppedImg] = useState(null);

  const onCrop = (defaultPreview) => {
    setPreview(defaultPreview);
    const getTypeFile = defaultPreview.split("/")[1];
    const realTypeFile = getTypeFile.split(";")[0];
    const imageCropped = convertBase64toFile(
      defaultPreview,
      "image." + realTypeFile
    );
    setCroppedImg(imageCropped);
  };

  const onClose = () => {
    setPreview("");
  };

  const onBeforeFileLoad = (e) => {
    let file = e.target.files[0];
    if (file.size < 3145728) {
    } else {
      setErrorPhoto(true);
    }
  };

  const onSelectPic = () => {
    getData(false, preview);
    onChanges({ croppedImg, preview });
    setIsOpening(false);
  };

  const onCancelSelect = () => {
    getData(false, "");
  };

  function openModal() {
    setIsOpening(true);
  }
  function afterOpenModal() {}
  function closeModal() {
    setIsOpening(false);
  }

  return (
    <div className="container">
      <div className="buttonava">
        <Row>
          <Col>
            {/* {errorPhoto && <span style={{ color: "red" }}>The file is too large.</span>} */}
            <a style={{ display: "flex", alignItems: "center" }}>
              {!imageSrc && <img src={noneava} height="100px"></img>}
              {imageSrc && (
                <img
                  alt="profile"
                  src={imageSrc}
                  className="rounded-circle"
                  width="100px"
                />
              )}
            </a>
          </Col>
        </Row>
      </div>
      <div style={{ height: "20px" }}></div>

      <div className="buttonava">
        <button
          type="button"
          className="removefotobut"
          onClick={deletePic}
          disabled={!imageSrc}
        >
          REMOVE PHOTO
        </button>

        <button
          type="button"
          onClick={handleToggleClick && openModal}
          className="addfotobut"
        >
          {!imageSrc && "UPLOAD PHOTO"}
          {imageSrc && "EDIT PHOTO"}
        </button>
      </div>

      <Modal
        isOpen={modalIsOpening}
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
          <div className="createAvatarDiv_content m-auto">
            <div className="container">
              <div className="row mx-auto my-3">
                <div className="col-md-6 m-auto">
                  <div className="mx-auto my-6 choose-file">
                  {errorPhoto && preview && <p style={{fontFamily:"Quicksand", color: "red", marginBottom:"10px", textAlign:"center" }}>The file is too large.</p>}
                    <Avatar
                      imageWidth={270}
                      width={"100%"}
                      height={180}
                      onCrop={onCrop}
                      onClose={onClose}
                      onBeforeFileLoad={onBeforeFileLoad}
                      label="Click here to add photo"
                      labelStyle={{
                        fontFamily: "Quicksand",
                        color: "#686A71",
                        fontWeight: "bold",
                      }}
                      exportQuality={1}
                    />
                  </div>
                </div>
                <div className="col-md-6 m-auto">
                  <div className="previewDiv rounded-circle m-auto">
                    {preview && (
                      <img
                        alt="preview"
                        src={preview}
                        width="100%"
                        height="100%"
                        className="rounded-circle"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-success float-right btn-md mr-2 mb-3 text-center"
                    onClick={onSelectPic}
                    disabled={!preview}
                    style={{ minWidth: "100px", backgroundColor: "#129490" }}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Modal>
    </div>
  );
};

export default ProfilePhoto;

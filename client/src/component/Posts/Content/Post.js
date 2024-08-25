import { Icon } from "@iconify/react";
import { Card, CardActions, CardContent, CardMedia, Divider } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deletePost, likePost } from "../../../actions/posts";
// import { deletePost } from "../../../api";
import useStyles from "../../../component/form/formstyle";
import ava from "../../../component/icons/avaa.png";
import "../../../pages/dignet.css";
import UpdateContent from "../../../pages/UpdateContent";
import { Input } from "reactstrap";
import Truncate from '@konforti/react-truncate';

import "./Post.css";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    // marginTop: theme.spacing(1),
    minWidth: 150,
    color: theme.palette.mode === "light" ? "rgb(55, 65, 81)" : theme.palette.grey[300],
    boxShadow: "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      width: 150,
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      height: 30,
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

const customStylesdelete = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: "523px",
    height: "auto",
    borderRadius: "12.4014px",
  },
};

const customStylesUpdate = {
  content: {
    top: "53%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: "60%",
    height: "80vh",
    paddingBottom: "15px",
    borderRadius: "20px",
    zIndex: "999",
  },
};

const Post = ({ content, setCurrentId, withAction, ModalContent }) => {
  // const data = useSelector((state) => state.global.data); //Updatekonten

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpenDel, setIsOpenDel] = React.useState(false);
  const [modalIsOpenUpdate, setIsOpenUpdate] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const profileStorage = JSON.parse(localStorage.getItem("profile"));

  const [profile, setProfile] = useState(profileStorage);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUpdate = () => {
    dispatch({ type: "OPEN_MODAL", data: { content } });
    // <UpdateContent />
    // history.push("/updatecontent");
  };
  function openModal() {
    setIsOpen(true);
  }
  function openModalDel() {
    setIsOpenDel(true);
    setAnchorEl(null);
  }

  function afterOpenModalDel() {}

  function closeModalDel() {
    setIsOpenDel(false);
  }

  function openModalUpdate() {
    setIsOpenUpdate(true);
    setAnchorEl(null);
    handleUpdate();
  }

  function afterOpenModalUpdate() {}

  function closeModalUpdate() {
    setIsOpenUpdate(false);
  }
  const doILike = () => {
    return content.likes.find(item => item === profile?._id)
  }
  // const handleDelete = () => {
  //   // console.log(`content`, content);
  //   dispatch(deletePost(content._id));
  // };

  useEffect(() => {
    const profileStorage = JSON.parse(localStorage.getItem("profile"));
    setProfile(profileStorage);
  }, []);

  const handleSubmit = (e) => {
    try {
      e.preventDefault(); //menghindari refresh dari browser

      dispatch(deletePost(content._id));
      closeModalDel();
      toast.success("Data succesfully deleted", {
        position: "bottom-right",
        autoClose: 3000,
        theme: "colored",
      });
    } catch (error) {
      toast.error("Whopss.. something went wrong!!", {
        position: "bottom-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  // const Likes = () => {
  //   console.log(content.likes, profile._id);
  //   console.log(
  //     "Find Content",
  //     content.likes.find((like) => like === profile._id)
  //   );
  //   if (content.likes.length > 0) {
  //     return content.likes.find((like) => like === profile._id) ? ( //sementara id -> cek server controller login (untuk localStorage sebisa mungkin jgn nampilin id)
  //       <>
  //         <Icon icon="ant-design:like-filled" size="small" width="25px" />
  //       </>
  //     ) : (
  //       <>
  //         <Icon icon="ant-design:like-outlined" size="small" width="25px" />
  //       </>
  //     );
  //   }

  const Likes = () => {
    // console.log(content.likes, profile._id);
    return (doILike() ? (<Icon icon="ant-design:like-filled" size="small" width="25px" color="#4653C2"/>) : (<Icon icon="ant-design:like-outlined" size="small" width="25px" />))
    // return (<Icon icon={doILike() ? "ant-design:like-filled" : "ant-design:like-outlined"} width="25px" color="#129490"/>);
  };

  const Liketext = () => {
    if (content.likes.length > 0) {
      return content.likes.find((like) => like === profile?._id) ? ( //sementara id -> cek server controller login (untuk localStorage sebisa mungkin jgn nampilin id)
        <>{content.likes.length > 2 ? `You and ${content.likes.length - 1} others` : `${content.likes.length} Like${content.likes.length > 1 ? "s" : ""}`}</>
      ) : (
        <>
          {content.likes.length} {content.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return <></>;


  };
  // const Liketext = () => {
  //   return (content.likes.length > 0 && 
  //   (doILike() ? (<>{content.likes.length > 2 ? `You and ${content.likes.length - 1} others` : `${content.likes.length} Like${content.likes.length > 1 && "s"}`}</>) 
  //   : (<>{content.likes.length} {content.likes.length === 1 ? "Like" : "Likes"}</>)
  //   )
  //   )
  //   }

  /** 
   * const Liketext = () => {
   * return (content.likes.length > 0 && 
   * (doILike() ? (<>{content.likes.length > 2 ? `You and ${content.likes.length - 1} others` : `${content.likes.length} Like${content.likes.length > 1 && "s"}`}</>) 
   * : (<>{content.likes.length} {content.likes.length === 1 ? "Like" : "Likes"}</>)
   * )
   * )
   * }
   */
  // const Liketext = () => {
  //   if (content.likes.length > 0) {
  //     return content.likes.find((like) => like === profile?._id) ? ( //sementara id -> cek server controller login (untuk localStorage sebisa mungkin jgn nampilin id)
  //       <>{content.likes.length > 2 ? `You and ${content.likes.length - 1} others` : `${content.likes.length} Like${content.likes.length > 1 ? "s" : ""}`}</>
  //     ) : (
  //       <>
  //         {content.likes.length} {content.likes.length === 1 ? "Like" : "Likes"}
  //       </>
  //     );
  //   }

  //   return <></>;
  // };

  const handleLike = (e) => {
    try {
      e.preventDefault();
      dispatch(likePost(content._id));
      // window.location.reload(false)
    } catch (error) {}
  };

  const openPost = () => {
    if (content?.video) {
      history.push(`/video/${content._id}`);
    } else {
      history.push(`/contents/${content._id}`);
    }
  };

  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{
        borderRadius: "0px",
        boxShadow: "-2px -2px 4px rgba(0, 0, 0, 0.25), 2px 2px 4px rgba(0, 0, 0, 0.25)",
        marginBottom: "30px",
        position: "relative",
      }}
    >
      {/* { content.type === "video"? (<ModalVideo />) : (<ModalArticle />)} */}
      {withAction && (
        <>
          <IconButton
            style={{
              float: "right",
              position: "absolute",
              right: "5px",
              backgroundColor:"grey",
              borderRadius:"0",
              opacity: "0.5",
              top:"7px",
            }}
            aria-label="more"
            id="long-button"
            aria-controls="long-menu"
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon sx={{ color: "white" }} />
          </IconButton>
          <StyledMenu
            id="demo-customized-menu"
            anchorEl={anchorEl}
            id="fade-menu"
            keepMounted
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            {/* <MenuItem onClick={handleClose}>Delete</MenuItem> */}
            <MenuItem>
              <button className="menubutton" onClick={openModalDel}>
                <DeleteIcon />
                Delete
                <div style={{ width: "70px" }}></div>
              </button>

              <Modal isOpen={modalIsOpenDel} onAfterOpen={afterOpenModalDel} onRequestClose={closeModalDel} style={customStylesdelete} overlayClassName="Overlay">
                <Container>
                  <div
                    style={{
                      marginTop: "0px",
                      fontFamily: "Quicksand",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    Delete
                  </div>
                  <p className="deleteket">
                    <p className="alertdelete">Are you sure you want to delete this content?</p>
                  </p>
                  <div className="buttondeletepop">
                    <button onClick={closeModalDel} className="nobuttondelete">
                      NO
                    </button>

                    <button onClick={handleSubmit} className="yesbuttondelete">
                      YES
                    </button>
                  </div>
                </Container>
              </Modal>
            </MenuItem>
            <Divider />

            {/* <MenuItem onClick={handleClose}>Edit</MenuItem> */}
            <MenuItem>
              {/* <button className="menubutton" onClick={handleUpdate}> */}
              <button className="menubutton" onClick={openModalUpdate}>
                <EditIcon />
                Edit
              </button>
              <Modal isOpen={modalIsOpenUpdate} onAfterOpen={afterOpenModalUpdate} onRequestClose={closeModalUpdate} style={customStylesUpdate} overlayClassName="Overlay">
                <button onClick={closeModalUpdate} className="buttonclosexup">
                  <Icon icon="ci:close-big" height="25" />
                </button>
                <div style={{ height: "20px" }}></div>
                <Container>
                  <div class="tabsxx">
                    <div className="tabby-tabxx">
                      <Input type="radio" id="tab-1" name="tabby-tabsxx" checked />
                      <label for="tab-1" style={{ fontFamily: "Quicksand", color:"white" }}>
                        {content?.video ? "Video" : "Article"}
                      </label>
                      <div class="tabby-contentxx">
                        <div class="scrollxx">
                          <div style={{ height: "20px" }}></div>
                          {/* <Form /> */}
                          <UpdateContent content={content} />
                        </div>
                        {/* <div
                          style={{
                            display: "inline-block",
                            height: "30px",
                            width: "40px",
                            backgroundColor: "red",
                          }}
                        ></div> */}
                      </div>
                    </div>
                  </div>
                  
                </Container>
              </Modal>
            </MenuItem>
          </StyledMenu>
        </>
      )}
      <CardMedia style={{ position: "flex" }} component="img" height="194" image={content.thumbnail || "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"} alt="Thumbnail" />
      <div></div>

      {/* //previwkonten */}
      <button
        onClick={openPost}
        style={{
          fontStyle: "none",
          width: "100%",
          background: "white",
          borderStyle: "none",
          height:"140px",
          position:"relative",
        }}
      >
        <CardContent style={{ padding: "5px", marginTop: "4%", height:"10px"}} sx={{height:"50px"}}>
          <Row>
            <Col md={3}>
              <Image
                src={content?.creator?.avatar}
                style={{
                  width: "100%",
                  resizeMode: "contain",
                  display: "flex",
                }}
              />
            </Col>
            <Col md={9} style={{ paddingLeft: "0px", textAlign: "left" }}>
              <p className="judulincard">{content.title}</p>
              {/* <Truncate lines={2} style={{fontFamily:"Quicksand", fontSize:"15px"}}>{content.title}</Truncate> */}

              <p className="namaincard">{content?.creator?.name}</p>
            </Col>
          </Row>
          <div className={content?.video ? "tagcardvid" : "tagcard"}>{content?.video ? "Video" : "Article"}</div>
        </CardContent>
      </button>
      <Divider />
      <CardActions disableSpacing style={{ padding: "0px" }}>
        <IconButton onClick={handleLike} aria-label="add to favorites" size="small">
          <Likes />
        </IconButton>
        <IconButton aria-label="share" size="small" onClick={openPost}>
          <Icon icon="fa-regular:comment-alt" size="small" width="20px" />
        </IconButton>
        <div
          style={{
            marginLeft: "auto",
            paddingRight: "15px",
            fontFamily: "Quicksand",
            fontSize: "12px",
            color: "#393B45",
          }}
        >
          <Liketext />
          {/* <button size="small" color="primary" onClick={handleSubmit}>
          Comment
        </button> */}
        </div>
      </CardActions>
    </Card>
  );
};

export default Post;

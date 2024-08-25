import { Icon } from "@iconify/react";
import { CircularProgress } from "@material-ui/core/";
import { IconButton } from "@mui/material";
import Input from "@mui/material/Input";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Text } from "react-native";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import ShowMore from "react-show-more";
import { commentPost, getPost, likePost } from "../actions/posts";
import ava from "../component/icons/avaa.png";
import Navbar from "../component/navbar/navbar";
import "./previewvideo.css";
import Footer from "../component/footer/footer";
import { profile } from "../api";
const ariaLabel = { "aria-label": "description" };

const PreVideo = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const [comments, setComments] = useState("");
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [showMore, setShowMore] = useState(false);
  // console.log("post detail data", post);
  // console.log("user detail data", user);
  // const [profile, setProfile] = useState(user);

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === user?._id) ? ( //sementara id -> cek server controller login (untuk localStorage sebisa mungkin jgn nampilin id)
        <>
          <Icon
            icon="ant-design:like-filled"
            size="small"
            width="25px"
            color="#4653C2"          />
        </>
      ) : (
        <>
          <Icon
            icon="ant-design:like-outlined"
            size="small"
            width="25px"
            color="black"
          />
        </>
      );
    }

    return (
      <>
        <Icon icon="ant-design:like-outlined" width="25px" color="black" />
      </>
    );
  };

  const Liketext = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === user?.id) ? ( //sementara id -> cek server controller login (untuk localStorage sebisa mungkin jgn nampilin id)
        <>
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} Like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          {post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return <></>;
  };

  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
    // }, [id, count, dispatch]);
  }, []); /** ini yang menyebabkan rerender */

  if (!post) return null;

  if (isLoading) {
    return <CircularProgress size="2em" />;
  }

  const handleLike = (e) => {
    try {
      e.preventDefault();
      dispatch(likePost(post._id));
      window.location.reload(true);
    } catch (error) {}
  };

  const handleKeyDown = (e) => {
    const data = {
      commentBy: user.name,
      text: comments,
    };
    if (e.key === "Enter") {
      dispatch(commentPost(data, post._id));
      setComments("");
      setCount(count + 1);
      dispatch(getPost(id));
    }
  };

  console.log(post.comments[0]?.commentBy);

  return (
    <>
      <Navbar />
      <div
        style={{
          marginTop: "8%",
          marginLeft: "7%",
          position: "absolute",
          zIndex: 8,
        }}
      >
        <a onClick={() => history.goBack()} className="backpostdetails">
          {" "}
          <Icon icon="eva:arrow-back-outline" width="40px" />
        </a>
      </div>
      <div style={{ width: "78%", paddingTop: "8%", margin: "auto" }}>
        <div className="carddetails">
          <Container>
            <Row>
              <Col lg={1} style={{ marginTop: "1%" }}>
                <Image
                  src={post?.creator?.avatar}
                  style={{
                    width: "100%",
                    height: "100%",
                    paddingBottom: "2%",
                    marginLeft: "5%",
                    display: "flex",
                  }}
                />
              </Col>
              <Col lg={11} style={{ marginTop: "1%" }}>
                <div style={{ fontFamily: "Quicksand", fontWeight: "800" }}>
                  {" "}
                  {post?.creator?.name}{" "}
                </div>
                <div style={{ fontFamily: "Quicksand" }}>
                  {" "}
                  Published Date:{" "}
                  <Text style={{ fontWeight: "bold" }}>
                    {moment(post.createdAt).format("LL")}
                  </Text>
                </div>
              </Col>
            </Row>
            <div style={{ height: "20px" }}></div>
            <Row>
              <Col px={0} style={{ paddingLeft: 0 }}>
                <Container>
                  <div className="boxdetailsvid">
                    <Row>
                      {" "}
                      <p className="judulvid"> {post.title} </p>{" "}
                    </Row>
                    <Row>
                      <ReactPlayer
                        className="videostyle"
                        url={post.video}
                        width="737.8px"
                        height="100%"
                        controls={true}
                      />
                      <Container className="descvid">
                        <ShowMore
                          lines={6}
                          more="Show more"
                          less="Show less"
                          anchorClass="my-anchor-class"
                        >
                          {post.description}
                        </ShowMore>
                      </Container>
                      <Col md={5}>
                        <div
                          style={{
                            width: "auto",
                            marginBottom: "5%",
                            marginTop: "5%",
                            fontFamily: "Quicksand",
                            background: "#EBEAEA",
                            borderRadius: "5px",
                            textAlign: "center",
                            padding: "3px 10px 3px 10px",
                            float: "left",
                          }}
                        >
                          {" "}
                          {post.categories}
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Container>
              </Col>
            </Row>
          </Container>
          <div className="minilinedetails"></div>
          <Container>
            <Row>
              <Col lg={1} style={{ marginTop: "0.5%", color: "black" }}>
                <IconButton
                  onClick={handleLike}
                  aria-label="add to favorites"
                  size="small"
                >
                  <Likes />
                  <Text style={{ marginLeft: "5px", fontFamily: "Quicksand" }}>
                    Like
                  </Text>
                </IconButton>
              </Col>
              <Col
                lg={5}
                style={{
                  marginTop: "1%",
                  marginBottom: "0%",
                  color: "black",
                }}
              >
                <Icon icon="fa-regular:comment-alt" width="20px" />
                <Text style={{ marginLeft: "5px", fontFamily: "Quicksand" }}>
                  Comment
                </Text>
              </Col>
              <Col lg={6} style={{ marginTop: "1%", marginBottom: "0%" }}>
                <Text
                  style={{
                    marginTop: "4px",
                    float: "right",
                    fontFamily: "Quicksand",
                    color: "#393B45",
                  }}
                >
                  <Liketext />
                </Text>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <div className="minilinedetails"></div>
              <Col lg={1} style={{ marginTop: "2%" }}>
                <Image
                  src={user?.avatar}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                    display: "flex",
                  }}
                />
              </Col>
              <Col lg={11} style={{ marginTop: "2%" }}>
                <Input
                  placeholder="Write comment here..."
                  onKeyDown={handleKeyDown}
                  onChange={(val) => setComments(val.target.value)}
                  inputProps={ariaLabel}
                  style={{
                    fontFamily: "Quicksand",
                    width: "100%",
                    padding: "5px",
                  }}
                />
              </Col>
            </Row>
          </Container>
          <Container>
            <div style={{ height: "8px" }}></div>
            {post.comments.map((item, index) => (
              <>
                <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                  <Col lg={1} style={{ marginTop: "1%" }}>
                    <Image
                      src={item?.commentBy.avatar}
                      style={{
                        width: "100%",
                        resizeMode: "contain",
                        display: "flex",
                      }}
                    />
                  </Col>

                  <Col
                    key={index}
                    lg={11}
                    style={{ marginTop: "15px", fontFamily: "Quicksand" }}
                  >
                    <>
                      <p style={{ fontWeight: "bold", marginBottom: "0" }}>
                        {item?.commentBy.name ?? "no name"}
                      </p>
                      <p style={{ paddingTop: "0" }}>
                        {" "}
                        {item?.text ?? "no comments"}{" "}
                      </p>
                    </>
                  </Col>
                </Row>
              </>
            ))}
          </Container>
          <div style={{ height: "15px" }}></div>
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
      <Footer />
    </>
  );
};

export default PreVideo;

import React, { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
} from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useHistory } from "react-router-dom";
import Navbar from "../navbar/navbar";
import { Icon } from "@iconify/react";
import { Col, Row, Container, Card, Image } from "react-bootstrap";
import { Text } from "react-native";
import Input from "@mui/material/Input";
import ava from "../icons/avaa.png";
import { getPost, likePost, commentPost } from "../../actions/posts";
import { IconButton } from "@mui/material";
import Footer from "../footer/footer";
import "../PostDetails/PostDetails.css";

const ariaLabel = { "aria-label": "description" };

const PostDetails = () => {
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
}, []);  /** ini yang menyebabkan rerender */

  if (!post) return null;

  if (isLoading) {
    return (
      <Paper elevation={6}>
        <CircularProgress size="7em" />
      </Paper>
    );
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
              <Col md={5} style={{ paddingRight: 0 }}>
                <div style={{ width: "100%", height: "340px" }}>
                  <Image
                    src={
                      post.thumbnail ||
                      "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                    }
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "flex",
                      flexShrink: 0,
                    }}
                  />
                </div>
              </Col>
              <Col md={7} px={0} style={{ paddingLeft: 0 }}>
                <div className="boxdetails">
                  <Container>
                    <p className="isidetails">{post.title}</p>
                    <div class="isiscrolldetails">
                      <p className="fromlinkdetails">
                        <text>{post.description}</text>
                      </p>
                    </div>

                    <div
                      style={{
                        marginTop: "2%",
                        float: "right",
                        position: "relative",
                        zIndex: 8,
                      }}
                    >
                      <a
                        href={post.url}
                        className="seealllinkdetails"
                        target="_blank"
                      >
                        {" "}
                        VIEW MORE{" "}
                        <Icon icon="akar-icons:arrow-up-right" width="30px" />
                      </a>
                    </div>
                  </Container>
                </div>
              </Col>
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
          <div style={{height:"15px"}}></div>
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
      <Footer />
    </>
  );
};

export default PostDetails;

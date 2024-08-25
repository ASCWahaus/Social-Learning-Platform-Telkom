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

const ariaLabel = { "aria-label": "description" };

const PreVideo = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const [comments, setComments] = useState("");
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [showMore, setShowMore] = useState(false);

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === user?.id) ? ( //sementara id -> cek server controller login (untuk localStorage sebisa mungkin jgn nampilin id)
        <>
          <Icon
            icon="ant-design:like-filled"
            size="small"
            width="25px"
            color="black"
          />
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

  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
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
  }, [id, count]);

  if (!post) return null;

  if (isLoading) {
    return (
        <CircularProgress size="3em" />
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
    if (e.key === "Enter") {
      dispatch(commentPost(comments, post._id));
      setComments("");
      setCount(count + 1);
    }
  };

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
        <a href="/contents" className="backlink">
          {" "}
          <Icon icon="eva:arrow-back-outline" width="40px" />
        </a>
      </div>
      <Container style={{ width: "1192px", height: "689px", paddingTop: "8%" }}>
        <div className="card">
          <div className="card-body">
            <Container>
              <Row>
                <Col xs={1} lg={1} style={{ marginTop: "1%" }}>
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
                </Col>
                <Col lg={11} style={{ marginTop: "1%" }}>
                  <div style={{ fontFamily: "Quicksand", fontWeight: "800" }}>
                    {" "}
                    Tester{" "}
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
              <Container>
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
                    {/* <p className="descvid">
  {showMore ? text : `${text.substring(0, 250)}`}
  <button className="btn" onClick={() => setShowMore(!showMore)}>
    {showMore ? "Show Less" : "Show More"}
  </button>
</p> */}
                    <ShowMore
                      lines={6}
                      more="Show more"
                      less="Show less"
                      anchorClass="my-anchor-class"
                    >
                      {post.description}
                    </ShowMore>

                    {/* <p className="descvid">Streaming service Netflix estimates its viral movie series Squid Game will be worth up to $900 million. The streaming service made this estimation based on recent figures from Bloomberg. Squid Game is undoubtedly Netflix’s biggest movie series, generating as much as 111 million views in less than a month of being released. Squid Game beat the record previously held by “Bridgerton”, which has about 82 million views within that same time span.
As of now, the movie series has garnered over 130 million views and the company believes that the number will still increase before the numbers take a break. The South Korean movie series cost $21.4 million to produce (about $2.4 million for an episode) and has generated $891.1 million in impact value. These figures are for the first season and are based on a document that entails Netflix’s performance metrics for the movie series.</p>    */}
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
              </Container>
            </Container>
            <div className="miniline"></div>
            <Container>
              <Row>
                <Col lg={1} style={{ marginTop: "0.5%", color: "black" }}>
                  <IconButton
                    onClick={handleLike}
                    aria-label="add to favorites"
                    size="small"
                  >
                    <Likes />
                    <Text
                      style={{ marginLeft: "5px", fontFamily: "Quicksand" }}
                    >
                      Like
                    </Text>
                  </IconButton>
                </Col>
                <Col lg={5} style={{ marginTop: "1%", marginBottom: "0%" }}>
                  <Icon icon="fa-regular:comment-alt" width="20px" />
                  <Text style={{ marginLeft: "5px" }}>Comment</Text>
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
                <div className="miniline"></div>
                <Col lg={1} style={{ marginTop: "2%" }}>
                  <Image
                    src={ava}
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
              <Row>
                {post.comments.map((item) => (
                  <>
                    <Col lg={1} style={{ marginTop: "1%" }}>
                      <Image
                        src={ava}
                        style={{
                          width: "100%",
                          height: "100%",
                          resizeMode: "contain",
                          display: "flex",
                        }}
                      />
                    </Col>
                    <Col
                      lg={11}
                      style={{ marginTop: "2%", fontFamily: "Quicksand" }}
                    >
                      <p className="namakomentar">Dini</p> {item}{" "}
                    </Col>
                  </>
                ))}
              </Row>
            </Container>
          </div>
        </div>
      </Container>
      <div style={{ height: "560px" }}></div>
      {/* <Footer /> */}
    </>
  );
};
export default PreVideo;

import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import Post from "./Content/Post";
import useStyles from "./style";
import notfound from "../../component/icons/nomycontent.png";
import Modal from "react-modal";
import { Input } from "reactstrap";
import { Icon } from "@iconify/react";
import { Container } from "react-bootstrap";

const Posts = ({ setCurrentId, withAction }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();
  // console.log("hhh >>>", posts);

  // if (!posts.length && !isLoading) return "No posts";
  if (!posts.length && !isLoading)
    return withAction ? (
      <div style={{ marginBottom: "10%", marginTop: "5%" }}>
        <img src={notfound} width="25%" style={{ display: "flex", alignItems: "center", margin: "auto" }}></img>
        <div style={{ textAlign: "center", fontFamily: "Quicksand", fontSize: "16px", fontWeight: "bold", color: "#686A71" }}>Oppss, you currently have no content</div>
        <div style={{ textAlign: "center", fontFamily: "Quicksand", fontSize: "16px", color: "#686A71" }}>You can add content by pressing the create button</div>
      </div>
    ) : (
      <div style={{ marginBottom: "10%", marginTop: "17%" }}>
        <div style={{ textAlign: "center", fontFamily: "Quicksand", fontSize: "30px", fontWeight: "bold" }}>No Result Found</div>
        <div style={{ textAlign: "center", fontFamily: "Quicksand", fontSize: "15px" }}>Try Another Keywords</div>
      </div>
    );

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {posts.map((content) => (
        <Grid key={content._id} item xs={12} sm={3}>
          <Post content={content} setCurrentId={setCurrentId} withAction={withAction} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;

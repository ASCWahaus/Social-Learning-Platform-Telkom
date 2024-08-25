import { Button } from "@material-ui/core";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useState } from "react";
import FileBase from "react-file-base64";
import { Text } from "react-native";
import { AvField, AvForm } from "availity-reactstrap-validation";
// import { updatePost } from "../api";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import joi from "joi";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormGroup, Input } from "reactstrap";
import { updatePost } from "../actions/posts";
import useStyles from "../component/form/formstyle";
import "../component/form/formstyle.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateContent = ({ content }) => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const aquaticCreatures = [
    {
      label: "Digital Technology, Data & Platform",
      value: "Digital Technology, Data & Platform",
    },
    {
      label: "Digital Network & Connectivity",
      value: "Digital Network & Connectivity",
    },
    { label: "Digital Transformation", value: "Digital Transformation" },
    { label: "Design & Digital Content", value: "Design & Digital Content" },
    {
      label: "Governance, Risk, & Compliance",
      value: "Governance, Risk, & Compliance",
    },
    { label: "Financial and Investment", value: "Financial and Investment" },
    { label: "Business and Management", value: "Business and Management" },
    { label: "Personal Development", value: "Personal Development" },
    { label: "Digital Marketing", value: "Digital Marketing" },
    { label: "Sales & Customer Service", value: "Sales & Customer Service" },
    { label: "Human Capital Development", value: "Human Capital Development" },
    { label: "Software Development", value: "Software Development" },
    {
      label: "Digital Product Management",
      value: "Digital Product Management",
    },
    { label: "Artificial Intelligence", value: "Artificial Intelligence" },
    { label: "Cloud Computing", value: "Cloud Computing" },
    { label: "Leadership", value: "Leadership" },
    {
      label: "Corporate Entrepreneurship",
      value: "Corporate Entrepreneurship",
    },
    { label: "Office Productivity", value: "Office Productivity" },
    { label: "Data Science", value: "Data Science" },
    { label: "Internet of Things", value: "Internet of Things" },
  ];
  const [postData, setPostData] = useState({
    title: content?.title ?? "",
    description: content?.description ?? "",
    categories: content?.categories ?? "",
    url: content?.url ?? "",
    user_id: content?.creator ?? "",
    thumbnail: content?.thumbnail ?? "",
    video: content?.video ?? "",
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "START_LOADING" });
    dispatch(updatePost(content._id, postData));
    dispatch({ type: "END_LOADING" });
    toast.success("Data Successfully Updated", {
      position: "bottom-right",
      autoClose: 8000,
      theme: "colored",
    });
    setTimeout(() => {
      window.location.reload();
    }, 8000)

  };

  if(content) console.log("This is content variable", content)
  const ChangePostData = (name, e) => {
    console.log("alohhh", e);
    let postDataClone = postData;
    postDataClone[name] = e;
    setPostData({...postData, [name]: e});
    console.log(postData);
  };

  const handleOnVideoChange = (e) => {
    let video = e.target.files[0];
    setPostData({ ...postData, video: video });
  };

  const handleOnFileChange = (e) => {
    let file = e.target.files[0];
    setPostData({
      ...postData,
      'thumbnail' : file
    })
  }

  return (
    <>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
         <FormGroup style={{ width:"95%" }}>
        <FormGroup>
          <Text style={{ color: "#D74040", fontSize: "10px" }}>
            *
            <Text style={{ fontFamily: "Quicksand", color: "black" }}>
              required field
            </Text>
          </Text>
          <p>
            {" "}
            <Text
              style={{
                fontFamily: "Quicksand",
                color: "Black",
                fontSize: "14.7px",
              }}
            >
              Title
              <Text style={{ color: "#D74040" }}>*</Text>
            </Text>
          </p>
          {/* <Input
          style={{
            width: "100%",
            height: "100%",
          }}
            name="title"
            variant="outlined"
            style={{ fontSize: "15px", padding: "10px" }}
            label="Title"
            fullWidth
            value={postData.title}
            onChange={(e) => ChangePostData("title", e.target.value)}
          /> */}

<AvForm>
            <AvField
              name="nameCustomMessage"
              // label="Title"
              // type="text"
              // name="title"
              variant="outlined"
              style={{ fontSize: "15px", padding: "10px", width: "100%",
              height: "100%", }}
              // label="Title"
              fullWidth
              value={postData.title}
              onChange={(e) => ChangePostData("title", e.target.value)}
              validate={{
                required: { value: true, errorMessage: "Please enter a title" },
                minLength: {
                  value: 8,
                  errorMessage:
                    "Your title must be between 8 and 60 characters",
                },
                maxLength: {
                  value: 60,
                  errorMessage:
                    "Your title must be between 8 and 60 characters",
                },
              }}
            />
          </AvForm>
        </FormGroup>

        <FormGroup>
          <p>
            {" "}
            <Text
              style={{
                fontFamily: "Quicksand",
                color: "Black",
                fontSize: "14.7px",
              }}
            >
              Description
              <Text style={{ color: "#D74040" }}>*</Text>
            </Text>
          </p>
          {/* <Input
            type="textarea"
            style={{
              width: "100%",
              height: "100px",
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
            value={postData.description}
            onChange={(e) => ChangePostData("description", e.target.value)}
          /> */}

<AvForm>
            <AvField
              type="textarea"
              style={{
                width: "100%",
                height: "100px",
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
              fullWidth
              value={postData.description}
              onChange={(e) => ChangePostData("description", e.target.value)}
              validate={{
                required: { value: true, errorMessage: "Please enter a description" },
                minLength: {
                  value: 8,
                  errorMessage:
                    "Your description must be between 8 and 400 characters",
                },
                maxLength: {
                  value: 400,
                  errorMessage:
                    "Your description must be between 8 and 400 characters",
                },
              }}
            />
          </AvForm>
        </FormGroup>
        {content?.video ? (
          <FormGroup style={{width:"95%"}}>
            <p>
              {" "}
              <Text
                style={{
                  fontFamily: "Quicksand",
                  color: "Black",
                  fontSize: "14.7px",
                }}
              >
                Add Video
                <Text style={{ color: "#D74040" }}>*</Text>
              </Text>{" "}
            </p>
            <input
              type="file"
              multiple={false}
              style={{ fontFamily: "Quicksand", color: "#D74040" }}
              onChange={handleOnVideoChange}
            />
          </FormGroup>
        ) : (
          <FormGroup>
            <p>
              {" "}
              <Text
                style={{
                  fontFamily: "Quicksand",
                  color: "Black",
                  fontSize: "14.7px",
                }}
              >
                Link
                <Text style={{ color: "#D74040" }}>*</Text>
              </Text>{" "}
            </p>
            <Input
              name="url"
              variant="outlined"
              style={{ fontSize: "15px", padding: "10px" }}
              label="Url"
              fullWidth
              value={postData.url}
              onChange={(e) => ChangePostData("url", e.target.value)}
            />
          </FormGroup>
        )}

        {/* <div>
          <p
            style={{
              display: "inline-block",
              marginLeft: "10px",
              textAlign: "left",
              left: "0",
            }}
          >
            Set content to:{" "}
          </p>
          <Input
            type="checkbox"
            style={{
              fontFamily: "Quicksand",
              marginLeft: "25px",
              marginTop: "5px",
              display: "inline-block",
              border: "1px solid rgba(215, 64, 64, 1)",
              width: "14px",
              height: "14px",
            }}
          />
          <p style={{ marginLeft: "45px", display: "inline-block" }}>Private</p>
          <div style={{ width: "700px" }}></div>
        </div> */}

       
          <FormGroup>
            <p>
              {" "}
              <Text
                style={{
                  color: "Black",
                  fontSize: "14.7px",
                  fontFamily: "Quicksand",
                }}
              >
                Category
                <Text style={{ color: "#D74040" }}>*</Text>
              </Text>
            </p>

            <Select
            
              defaultValue={postData.categories}
              onChange={(opt) => ChangePostData("categories", opt.target.value)}
              labelId="demo-simple-select-label"
              // id="demo-simple-select"
              label={postData.categories}
              fullWidth
              classNamePrefix="my-className-prefix"
              style={{fontFamily:"Quicksand"}}
            >
              {aquaticCreatures.map((item) => {
                return <MenuItem style={{fontFamily:"Quicksand"}} value={item.value}>{item.label}</MenuItem>;
              })}
            </Select>
          </FormGroup>
          <FormGroup style={{ float: "left", marginLeft: "-20" }}>
            <Text
              style={{
                color: "Black",
                fontSize: "14.7px",
                fontFamily: "Quicksand",
              }}
            >
              Thumbnail
            </Text>
            <div className={classes.fileInput}>
              <input
                type="file"
                multiple={false}
                onChange={handleOnFileChange}
                style={{ fontFamily: "Quicksand", color: "#D74040" }}
              />
            </div>
          </FormGroup>
          </FormGroup>

          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="black"
            size="large"
            type="submit"
            
          >
            PUBLISH
          </Button>
          <ToastContainer />
      </form>
    </>
  );
};

export default UpdateContent;

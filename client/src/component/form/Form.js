import { Button } from "@material-ui/core";
import { AvField, AvForm } from "availity-reactstrap-validation";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Select from "react-select";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormGroup, Input } from "reactstrap";
import { createPost, updatePost } from "../../actions/posts";
import useStyles from "./formstyle";
import "./formstyle.css";

const Form = ({ currentId, setCurrentId, data }) => {
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

  console.log("dataForm", data);

  const [postData, setPostData] = useState({
    title: data?.title ?? "",
    description: data?.description ?? "",
    categories: data?.categories ?? "",
    url: data?.url ?? "",
    user_id: data?.creator ?? "",
    thumbnail: data?.thumbnail ?? "",
  });

  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const classes = useStyles();
  const handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  const clear = () => {
    setCurrentId(0);
    setPostData({
      title: "",
      description: "",
      type: "",
      categories: "",
      url: "",
      user_id: "",
      thumbnail: "",
      isPrivate: "",
    });
  };

  const handleOnFileChange = (e) => {
    let file = e.target.files[0];
    setPostData({
      ...postData,
      thumbnail: file,
    });
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault(); //menghindari refresh dari browser
      if (currentId) {
        dispatch(updatePost(currentId, { ...postData, name: user?.name }));
        // dispatch(updatePost(currentId, { ...postData, name: user?.name }));

        // toast.success("Data succesfully updated", {
        //   position: "bottom-right",
        //   autoClose: 3000,
        //   theme: "colored",
        // });
      } else {
        dispatch(createPost({ ...postData, name: user?.name }));
        toast.success("Data Successfully Created", {
          position: "bottom-right",
          autoClose: 8000,
          theme: "colored",
        });
        setTimeout(() => {
          history.push("/mycontent");
        }, 8000);
        setTimeout(() => {
          window.location.reload();
        }, 8000)

      }
      clear();
    } catch (error) {
    }
  };

  return (
    <>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
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
            name="title"
            variant="outlined"
            style={{ fontSize: "15px", padding: "10px" }}
            label="Title"
            fullWidth
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          /> */}
          <AvForm>
            <AvField
              name="nameCustomMessage"
              // label="Title"
              // type="text"
              // name="title"
              variant="outlined"
              style={{ fontSize: "15px", padding: "10px" }}
              // label="Title"
              fullWidth
              value={postData.title}
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
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
              width: "726px",
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
            onChange={(e) =>
              setPostData({ ...postData, description: e.target.value })
            }
          /> */}

          <AvForm>
            <AvField
              type="textarea"
              style={{
                width: "726px",
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
              onChange={(e) =>
                setPostData({ ...postData, description: e.target.value })
              }
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
          {/* <Input
            name="url"
            variant="outlined"
            style={{ fontSize: "15px", padding: "10px" }}
            label="Url"
            fullWidth
            value={postData.url}
            onChange={(e) => setPostData({ ...postData, url: e.target.value })}
          /> */}
            <AvForm>
            <AvField
              name="url"
              variant="outlined"
              style={{ fontSize: "15px", padding: "10px" }}
              fullWidth
              value={postData.url}
              onChange={(e) => setPostData({ ...postData, url: e.target.value })}
              validate={{
                required: { value: true, errorMessage: "Please enter a url" },
                pattern: {value: '(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,})', errorMessage: 'Your url must be composed with https://'},
              }}
            />
          </AvForm>
        </FormGroup>
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
            onChange={(e) =>
              setPostData({ ...postData, isPrivate: e.target.value })
            }
          />
          <p style={{ marginLeft: "45px", display: "inline-block" }}>Private</p>
          <div style={{ width: "700px" }}></div>
        </div> */}
        <FormGroup>
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
              options={aquaticCreatures}
              onChange={(opt) =>
                setPostData({ ...postData, categories: opt.value })
              }
              classNamePrefix="my-className-prefix"
              required={require}
            />
          </FormGroup>
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

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="black"
          size="large"
          type="submit"
          // href="#"
          // class="modal-close2"
        >
          PUBLISH
        </Button>

        <ToastContainer />
      </form>
    </>
  );
};

export default Form;

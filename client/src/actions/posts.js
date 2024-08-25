import { LIKE, FETCH_ALL, FETCH_POST, FETCH_BY_SEARCH, START_LOADING, END_LOADING, CREATE, DELETE, COMMENT, UPDATE_PROFILE, GET_PROFILE } from "../constants/actionTypes";
import swal from "sweetalert";

import * as api from "../api/index.js";

// action creator -> fungsi mengembalikan action
export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPost(id);

    // console.log(data);

    dispatch({
      type: FETCH_POST,
      payload: data,
    });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data, currentPage, numberOfPages },
    } = await api.fetchPosts(page);

    console.log("data=>>>>", data);

    dispatch({
      type: FETCH_ALL,
      payload: { data, currentPage, numberOfPages },
    });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getByCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getByCategory(category);
    console.log(`data ===`, data);
    dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(`error`, error);
  }
};

export const getByName = (name) => async (dispatch) => {
  try {
    // dispatch({ type: START_LOADING });
    const { data } = await api.myContent(name);
    console.log(`data by name`, data);
    dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(`error`, error);
  }
};

export const getContentsBySearch = (searchQuery, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchContentssBySearch(searchQuery);

    dispatch({ type: FETCH_BY_SEARCH, payload: { data: data.data } });
    dispatch({ type: END_LOADING });
    history.push({ pathname: "/contents/category/isSearch", searchQuery });
    console.log(data.data);
  } catch (error) {
    console.log(error);
  }
};

export const convertBase64toFile = (dataUrl, fileName) => {
  let arr = dataUrl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], fileName, { type: mime });
};

export const createPost = (post) => async (dispatch) => {
  const getUrlFile = async (name, apiFunc, dataFile) => {
    if (dataFile) {
      const formData = new FormData();
      formData.append(name, dataFile);
      const { data } = await apiFunc(formData);
      if (data) {
        return data.url;
      }
    }
  };

  const createContent = async (body) => {
    const { data } = await api.addContent(body);

    dispatch({
      type: CREATE,
      payload: data,
    });
  };

  try {
    const files = {};
    files.thumbnail = await getUrlFile("thumbnail", api.uploadThumbnail, post.thumbnail).then((url) => url);
    files.video = await getUrlFile("video", api.uploadVideo, post.video).then((url) => url);

    let body;

    body = {
      title: post.title,
      description: post.description,
      url: post.url,
      isPrivate: post.isPrivate === "on",
      categories: post.categories,
      ...files,
    };
    if (body.video === "" || !body.video) delete body.video;
    if (body.thumbnail === "" || !body.thumbnail) delete body.thumbnail;
    if (body.url === "" || !body.url) delete body.url;
    if (Object.keys(files).length > 0) {
      console.log(body);
      await createContent(body);
    }
  } catch (error) {
    // swal({
    //   title: "Required form must be complete",
    //   // text: "Please input your",
    //   icon: "error",
    //   button: "OK",
    // });
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  console.log("Updating post", id, post)
  const getUrlFile = async (name, apiFunc, dataFile) => {
    const uploadFile = async (nameUpload, file) => {
      const formData = new FormData();
      formData.append(nameUpload, file);
      const { data } = await apiFunc(formData);
      if (data) {
        return data.url;
      }
    };
    if (dataFile) {
      if (dataFile.type) {
        const url = uploadFile(name, dataFile);
        return url;
      } else {
        // const getTypeFile = dataFile.split("/")[1];
        // const realTypeFile = getTypeFile.split(";")[0];
        // const fileConvertion = convertBase64toFile(dataFile, name + "." + realTypeFile);
        // const url = uploadFile(name, fileConvertion);
        // return url;
        return dataFile
      }
    }
  };
  try {
    const files = {};
    files.thumbnail = await getUrlFile("thumbnail", api.uploadThumbnail, post.thumbnail).then((url) => url);
    files.video = await getUrlFile("video", api.uploadVideo, post.video).then((url) => url);

    let body;

    body = {
      title: post.title,
      description: post.description,
      url: post.url,
      isPrivate: post.isPrivate === "on",
      categories: post.categories,
      ...files,
    };
    if (body.video === "" || !body.video) delete body.video;
    if (body.thumbnail === "" || !body.thumbnail) delete body.thumbnail;
    if (body.url === "" || !body.url) delete body.url;
    if (Object.keys(files).length > 0) {
      console.log("", body);
      await api.updatePost(id, body);
    }
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({
      type: DELETE,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("profile"));

  try {
    const { data } = await api.likePost(id, user?.token);

    dispatch({
      type: LIKE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const commentPost = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.comment(value, id);

    dispatch({ type: COMMENT, payload: data });
    console.log("data comment post", data);

    return data.comments;
  } catch (error) {
    console.log(error);
  }
};

// export const updateProfile = (id, data) => async (dispatch) => {
//   try {
//     const { data } = await api.updateProfile(id, data);

//     dispatch({
//       type: UPDATE_PROFILE,
//       payload: data,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const updateMyprofile = (id, dataprofile, imageChanged) => async (dispatch) => {
  const DataURIToBlob = (dataURI) => {
    const splitDataURI = dataURI.split(",");
    const byteString = splitDataURI[0].indexOf("base64") >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(":")[1].split(";")[0];

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);

    return new Blob([ia], { type: mimeString });
  };

  try {
    // dispatch({type: START_LOADING});
    let avatarUrl;

    let body;
    console.log(id, dataprofile);
    if (imageChanged) {
      const avatar = DataURIToBlob(dataprofile.avatarCrop);
      const formData = new FormData();
      formData.append("avatar", avatar, id + ".jpg");
      const { data } = await api.uploadAvatar(formData);
      avatarUrl = data.url;
    }

    console.log(avatarUrl);
    delete dataprofile.avatar;

    body = {
      name: dataprofile.name,
      position: dataprofile.position,
      company: dataprofile.company,
      biography: dataprofile.biography,
      avatar: avatarUrl,
    };

    const { data } = await api.updateProfile(dataprofile._id, body);
    localStorage.setItem("profile", JSON.stringify(data));

    dispatch({
      type: UPDATE_PROFILE,
      payload: { profile: data },
    });
  } catch (error) {
    console.log(error);
  }
};

export const addskill = (id, skills) => async (dispatch) => {
  try {
    const body = {
      skills,
    };
    const { data } = await api.updateProfile(id, body);

    dispatch({
      type: UPDATE_PROFILE,
      payload: { profile: data },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProfile = (id) => async (dispatch) => {
  try {
    const { data } = await api.profile(id);
    dispatch({
      type: GET_PROFILE,
      payload: { profile: data },
    });
  } catch (error) {}
};

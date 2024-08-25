import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";
import swal from "sweetalert";
import './actions.css';

// import { ToastContainer, toast } from 'material-react-toastify';
// import 'material-react-toastify/dist/ReactToastify.css';
// import 'antd/dist/antd.css';
// import { Alert } from 'antd';

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({
      type: AUTH,
      data,
    });

    // history.push('/contents')
  } catch (error) {
    console.log(error);
  }
};

export const isLogin = (dispatch) => {
  return dispatch(() => {
    const data = JSON.parse(localStorage.getItem("profile"));
    dispatch({
      type: AUTH,
      data,
    });
  });
};

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    // const user = localStorage.getItem('profile')
    // const obj = JSON.parse(user);

    console.log("isVerified", data);

    dispatch({
      type: AUTH,
      data,
      error:
        !data?.isVerified &&
        "Your account is not verified, please check your email",
    });
    localStorage.setItem("profile", JSON.stringify(data));
    localStorage.setItem("token", JSON.stringify(data.token));
    if (!data.isVerified) {
      return history.push("/login");
    }
    return history.push("/discover");
  } catch (error) {
  //   <Alert
  //   message="Error Text"
  //   description="Error Description Error Description Error Description Error Description Error Description Error Description"
  //   type="error"
  //   closable
  // />
    swal({
      title: "Email or Password not Valid",
      // text: "Please input your",
      icon: "error",
      button: "OK",
    });
    // toast.error("gagal");
    console.log(error);
  }
};

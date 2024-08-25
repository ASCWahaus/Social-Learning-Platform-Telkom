import { Grid, Grow } from "@material-ui/core";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ExitToAppSharpIcon from "@mui/icons-material/ExitToAppSharp";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Navbar from "../component/navbar/navbar";
import Posts from "../component/Posts/Posts";
import { useDispatch, useSelector } from "react-redux";
import { getByName } from "../actions/posts";
import "./MyProfile.css";
import "./mycontent.css";
import * as actionType from "../constants/actionTypes";
import { useHistory } from "react-router";
import Footer from "../component/footer/footer";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

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

function MyContent() {
  const dispatch = useDispatch();

  const { posts, isLoading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getByName());
  // }, [dispatch, posts]);
}, []);

  const [modalIsOpening, setIsOpening] = React.useState(false);
  const [modalIsOpenProf, setIsOpenProf] = React.useState(false);
  const [modalIsOpenAva, setIsOpenAva] = React.useState(false);
  const [isOpenImg, setIsOpenImg] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const history = useHistory();

  const getData = (isOpened, imageSrc) => {
    setIsOpenImg(isOpened);
    setImageSrc(imageSrc);
  };

  function openModal() {
    setIsOpening(true);
  }

  function openModalProf() {
    setIsOpenProf(true);
  }

  function openModalAva() {
    setIsOpenAva(true);
  }

  function afterOpenModal() {}
  function afterOpenModalProf() {}
  function afterOpenModalAva() {}

  function closeModal() {
    setIsOpening(false);
  }
  function closeModalProf() {
    setIsOpenProf(false);
  }

  function closeModalAva() {
    setIsOpenAva(false);
  }

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/login");

    setUser(null);
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="container-wrapper">
        <div className="sidebar-wrapper"> 
             <ul class="sidebar sidebar-new">
             <li>
               <a href="/myprofile"  >
                 {" "}
                 <AccountCircleIcon
                   fontSize="34px"
                   style={{ marginRight: "10px" }}
                 />
                 Profile
               </a>
             </li>
             <li style={{ backgroundColor: "#393B45" }}>
               <a href="/mycontent" style={{ color: "white" }}>
                 {" "}
                 <LibraryBooksIcon
                   fontSize="34px"
                   style={{ marginRight: "10px" }}
                 />{" "}
                 My Content
               </a>
             </li>
             <li onClick={logout}>
               <a href="">
                 {" "}
                 <ExitToAppSharpIcon
                   fontSize="34px"
                   style={{ marginRight: "10px" , color:"red"}}
                 />{" "}
                 <span style={{ color: "red" }}>Sign Out</span>
               </a>
             </li>
           </ul>
        </div>
        <div className="content-wrapper">
          <Container  >
            <p className="textmy"> My Content</p>
            <div style={{ height: "20px" }}></div>
            <div className="containercontent">
              <div style={{ height: "30px" }}></div>

              <Container maxWidth="xl">
                <Grow in>
                  <Container>
                    <Grid
                      container
                      justifyContent="space-between"
                      alignItems="stretch"
                      spacing={3}
                    >
                      <Grid item xs={12} sm={12}>
                        <Posts withAction />
                      </Grid>
                    </Grid>
                  </Container>
                </Grow>
                <div style={{ height: "20px" }}></div>
              </Container>
            </div>
          </Container>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MyContent;



// import { Grid, Grow } from "@material-ui/core";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import CheckBoxIcon from "@mui/icons-material/CheckBox";
// import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
// import ExitToAppSharpIcon from "@mui/icons-material/ExitToAppSharp";
// import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
// import React, { useState, useEffect } from "react";
// import { Container } from "react-bootstrap";
// import Navbar from "../component/navbar/navbar";
// import Posts from "../component/Posts/Posts";
// import { useDispatch, useSelector } from "react-redux";
// import { getByName } from "../actions/posts";
// import "./MyProfile.css";
// import "./mycontent.css";
// import * as actionType from "../constants/actionTypes";
// import { useHistory } from "react-router";
// import Footer from "../component/footer/footer";

// const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
// const checkedIcon = <CheckBoxIcon fontSize="small" />;

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     backgroundColor: "white",
//     width: "650px",
//     height: "auto",
//     borderRadius: "12.4014px",
//   },
// };

// function MyContent() {
//   const dispatch = useDispatch();

//   const { posts, isLoading } = useSelector((state) => state.posts);

//   useEffect(() => {
//     dispatch(getByName());
//   // }, [dispatch, posts]);
// }, []);

//   const [modalIsOpening, setIsOpening] = React.useState(false);
//   const [modalIsOpenProf, setIsOpenProf] = React.useState(false);
//   const [modalIsOpenAva, setIsOpenAva] = React.useState(false);
//   const [isOpenImg, setIsOpenImg] = useState(false);
//   const [imageSrc, setImageSrc] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
//   const history = useHistory();

//   const getData = (isOpened, imageSrc) => {
//     setIsOpenImg(isOpened);
//     setImageSrc(imageSrc);
//   };

//   function openModal() {
//     setIsOpening(true);
//   }

//   function openModalProf() {
//     setIsOpenProf(true);
//   }

//   function openModalAva() {
//     setIsOpenAva(true);
//   }

//   function afterOpenModal() {}
//   function afterOpenModalProf() {}
//   function afterOpenModalAva() {}

//   function closeModal() {
//     setIsOpening(false);
//   }
//   function closeModalProf() {
//     setIsOpenProf(false);
//   }

//   function closeModalAva() {
//     setIsOpenAva(false);
//   }

//   const logout = () => {
//     dispatch({ type: actionType.LOGOUT });

//     history.push("/login");

//     setUser(null);
//   };

//   return (
//     <>
//       <header>
//         <Navbar />
//       </header>
//       <div class="content">
//         <div class="sidebar1">

//           <ul class="sidebar">
//             <li>
//               <a href="/myprofile">
//                 {" "}
//                 <AccountCircleIcon
//                   fontSize="34px"
//                   style={{ marginRight: "10px" }}
//                 />
//                 Profile
//               </a>
//             </li>
//             <li style={{ backgroundColor: "#393B45" }}>
//               <a href="/mycontent" style={{ color: "white" }}>
//                 {" "}
//                 <LibraryBooksIcon
//                   fontSize="34px"
//                   style={{ marginRight: "10px" }}
//                 />{" "}
//                 My Content
//               </a>
//             </li>
//             <li onClick={logout}>
//               <a href="">
//                 {" "}
//                 <ExitToAppSharpIcon
//                   fontSize="34px"
//                   style={{ marginRight: "10px" }}
//                 />{" "}
//                 Sign Out
//               </a>
//             </li>
//           </ul>
//         </div>
        // <Container>
        //   <p className="textmy"> My Content</p>
        //   <div style={{ height: "20px" }}></div>
        //   <div className="containercontent">
        //     <div style={{ height: "30px" }}></div>

        //     <Container maxWidth="xl">
        //       <Grow in>
        //         <Container>
        //           <Grid
        //             container
        //             justifyContent="space-between"
        //             alignItems="stretch"
        //             spacing={3}
        //           >
        //             <Grid item xs={12} sm={12}>
        //               <Posts withAction />
        //             </Grid>
        //           </Grid>
        //         </Container>
        //       </Grow>
        //       <div style={{ height: "20px" }}></div>
        //     </Container>
        //   </div>
        // </Container>
//         <div style={{ height: "20px" }}></div>
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default MyContent;

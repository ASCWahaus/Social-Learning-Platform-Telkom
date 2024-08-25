import MuiListItem from "@material-ui/core/ListItem";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { default as AccountCircle, default as AccountCircleIcon } from "@mui/icons-material/AccountCircle";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CloseIcon from "@mui/icons-material/Close";
import ExitToAppSharpIcon from "@mui/icons-material/ExitToAppSharp";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MoreIcon from "@mui/icons-material/MoreVert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";
//search
import { getContentsBySearch, getProfile } from "../../actions/posts";
import * as actionType from "../../constants/actionTypes";
import Form from "../form/Form";
import Formvid from "../form/Formvid";
import logonav from "../icons/logo.png";
import "./navbar.css";
import noneava from"../icons/noneava.png"
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const ListItem = withStyles({
  root: {
    "&$selected": {
      fontFamily: "Quicksand",
      backgroundColor: "red",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
    "&$selected:hover": {
      backgroundColor: "purple",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
    "&:hover": {
      fontFamily: "Quicksand",
      backgroundColor: "#D74040",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
  },
  selected: {},
})(MuiListItem);

const Navbar = ({ data, setValue, searchValue, enterPress }) => {
  const dispatch = useDispatch();
  const [isOpenImg, setIsOpenImg] = useState(false);
  const stateProfile = useSelector((state) => state);
  const [imageSrc, setImageSrc] = useState("");
  const fetchProfileData = async (id) => {
    console.log(stateProfile);
    await dispatch(getProfile(id));
    setImageSrc(stateProfile.profile.profile?.avatar);
  };
  useEffect(() => {
    setImageSrc(stateProfile.profile.profile?.avatar);
  }, [stateProfile.profile.profile]);

  const getData = (isOpened, imagesSrc) => {
    setIsOpenImg(isOpened);
    setImageSrc(imagesSrc);
  };
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };


  const [search, setSearch] = useState("");
  const history = useHistory();

  const searchContent = () => {
    if (search.trim()) {
      dispatch(getContentsBySearch({ search }, history));
    } else {
      history.push("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      searchContent();
      if (typeof enterPress === "function") {
        enterPress();
      }
    }
  };

  const tabLinks = document.querySelectorAll(".tabs a");
  const tabPanels = document.querySelectorAll(".tabs-panel");

  for (let el of tabLinks) {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      document.querySelector(".tabs li.active").classList.remove("active");
      document.querySelector(".tabs-panel.active").classList.remove("active");

      const parentListItem = el.parentElement;
      parentListItem.classList.add("active");
      const index = [...parentListItem.parentElement.children].indexOf(
        parentListItem
      );

      const panel = [...tabPanels].filter(
        (el) => el.getAttribute("data-index") == index
      );
      panel[0].classList.add("active");
    });
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  //LOGOUT
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/login");

    setUser(null);
  };

  // jwt
  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
  });

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      style={{
        marginTop: "44px",
      }}
    >
      <div className="dropdown1">
        <ul
          style={{
            listStyleType: "none",
            listStylePosition: "inside",
            margin: 0,
            padding: 0,
          }}
        >
          <List
            component="nav"
            aria-label="mailbox folders"
            className="listdrop"
          >
            <ListItem
              button
              style={{ height: "80px" }}
              selected={selectedIndex === 0}
            >
              <ListItemAvatar>
                {/* <Avatar>
                  <Avatar alt="Remy Sharp" src={user?.avatar} />
                </Avatar> */}
                <Avatar>
                <Image
                  src={imageSrc || noneava}
                  style={{
                    // padding: "40px 0px 70px 40px",
                    width: "40px",
                  }}
                />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={user?.name} secondary={user?.email} />
            </ListItem>
            <Divider />
            <Link
              to="/myprofile"
              style={{ color: "#676767", textDecoration: "none" }}
            >
              <ListItem button style={{ height: "60px" }}>
                <ListItemIcon>
                  <AccountCircleIcon fontSize="large" />
                </ListItemIcon>
                <p className="dropdowntext">Profile</p>
              </ListItem>
            </Link>
            <Link
              to="/mycontent"
              style={{ color: "#676767", textDecoration: "none" }}
            >
              <ListItem button style={{ height: "60px" }}>
                <ListItemIcon>
                  <LibraryBooksIcon fontSize="large" />
                </ListItemIcon>
                <p className="dropdowntext">My Content</p>
              </ListItem>
            </Link>
            <Divider />
            <div className="keluar">
              <ListItem
                onClick={logout}
                button
                style={{
                  height: "60px",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <ListItemIcon>
                  <ExitToAppSharpIcon fontSize="large" />
                </ListItemIcon>
                <p className="dropdowntext">Sign Out</p>
              </ListItem>
            </div>
          </List>
        </ul>
      </div>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* mobile version  */}

      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <AddBoxIcon />
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <NotificationsIcon />
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  // web version
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: "white", color: "black" }}>
        <Toolbar>
          <a href="/discover">
            <img src={logonav} alt="" height="40px"></img>
          </a>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ display: { xs: "none", md: "center" }, marginLeft: "0px" }}
          >
            <form className="form-inline my-lg-0">
              <div className="form-group  input-group h  as-search">
                <input
                  name="search"
                  label="Search Memories"
                  type="text"
                  className="form-control "
                  placeholder="Search..."
                  value={search}
                  onKeyDown={handleKeyPress}
                  onChange={(e) => {
                    if (typeof setValue === "function") {
                      setValue(e.target.value);
                    }
                    setSearch(e.target.value);
                  }}
                  style={{
                    borderRadius: "20px",
                    fontSize: "12px",
                    paddingLeft: "15px",
                    borderColor: "#D74040",
                    height: "34px",
                    width: "680px",
                  }}
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                />
                <div></div>
              </div>
            </form>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              href="#open-modal"
            >
              <AddBoxIcon />
            </IconButton>

            <div id="open-modal" class="modal-window2">
              <div>
                <a href="#" title="Close" class="modal-close2">
                  <CloseIcon />
                </a>

                <div class="tabs">
                  <div className="tabby-tab">
                    <Input type="radio" id="tab-1" name="tabby-tabs" checked />
                    <label for="tab-1" style={{ fontFamily: "Quicksand" }}>
                      Article
                    </label>
                    <div class="tabby-content">
                      <div class="scroll">
                        <div style={{ height: "20px" }}></div>
                        <Form />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "inline-block",
                        height: "30px",
                        width: "40px",
                        backgroundColor: "red",
                      }}
                    ></div>
                  </div>
                  <div className="tabby-tab">
                    <Input type="radio" id="tab-2" name="tabby-tabs" />
                    <label for="tab-2" style={{ fontFamily: "Quicksand" }}>
                      Video
                    </label>

                    <div class="tabby-content">
                      <div class="scroll">
                        <div style={{ height: "20px" }}></div>
                        <Formvid />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: "30px" }}></div>
            <IconButton size="large" color="inherit">
              <NotificationsIcon />
            </IconButton>

            <div style={{ width: "30px" }}></div>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderRightWidth: 1, background: "#D74040" }}
            />
            <div style={{ width: "20px" }}></div>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {/* <AccountCircle /> */}
              {/* <Avatar> */}
                <Image src={imageSrc || noneava} width="40px"/>
              {/* </Avatar> */}
            </IconButton>
          </Box>
          <div style={{ width: "10px" }}></div>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default Navbar;

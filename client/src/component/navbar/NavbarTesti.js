import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddBoxIcon from "@mui/icons-material/AddBox";
import logolp from "../icons/logolp.png";
import "./navbar.css";
import React, { useState, useEffect } from "react";
import { Container, Typography, Grow, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
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
  const [search, setSearch] = useState(null);
  const inputHandler = (e) => {
    setSearch(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    window.location.href = "/discover?query=" + search;
  };
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
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
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
      <AppBar
        style={{ background: "white", color: "black", boxShadow: "none" }}
      >
        <Toolbar>
          <img
            src={logolp}
            alt=""
            style={{ width: "25%", padding: "20px" }}
          ></img>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <NavLink to="/login">
              <button
                style={{
                  width: "130.11px",
                  height: "46px",
                  background: "#D74040",
                  borderRadius: "5px",
                  color: "white",
                  borderStyle: "none",
                  marginRight: "20px",
                }}
              >
                Log In
              </button>
            </NavLink>
            <NavLink to="/register">
              <button
                style={{
                  width: "130.11px",
                  height: "46px",
                  background: "white",
                  borderRadius: "5px",
                  border: "1px solid black",
                  color: "#D74040",
                  borderStyle: "none",
                }}
              >
                Sign Up
              </button>
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

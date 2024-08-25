import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #89559F;
  z-index: 100;
  width: 100%;
  display: flex;
  height: auto;
  z-index: 10;
  /* Third Nav */
  justify-content: space-between;
  line-height: 100px;
`;

export const NavLink = styled(Link)`
  color: black;
`;


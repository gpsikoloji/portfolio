import React from "react";
import styled from "styled-components";
import { AiFillInstagram } from "react-icons/ai";

import { NavLink } from "./HeaderStyles";
import { SocialIcons } from "../Header/HeaderStyles";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    display: flex;
    align-items: center;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    flex-flow: column nowrap;
    background-color: ${(props) => props.theme.colors.headerText};
    position: fixed;
    width: ${({ open }) => (open ? "100%" : "0px")};
    overflow: hidden;
    top: 0;
    right: 0;
    height: 100vh;
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
    transition: width 0.3s ease-in-out;
    li {
      a {
        color: ${(props) => props.theme.colors.background1};
      }
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <NavLink href="/">Hakkımızda</NavLink>
      </li>
      <li>
        <NavLink href="/uzmanlarimiz">Uzmanlarımız</NavLink>
      </li>
      <li>
        <NavLink href="/hizmetlerimiz">Hizmetlerimiz</NavLink>
      </li>
      <li>
        <NavLink href="/iletisim">İletişim</NavLink>
      </li>
      <li>
        <SocialIcons
          alwaysVisible
          href="https://www.instagram.com/gpsikoloji06"
          target="_blank"
        >
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </li>
    </Ul>
  );
};

export default RightNav;

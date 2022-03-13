import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import Burger from "./Burger";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <a href="/" style={{ display: "flex", alignItems: "center" }}>
        <img src="/gp.png" style={{ width: "auto", height: "90px" }} />
      </a>
    </Div1>
    <Div3>
      <Burger />
    </Div3>
    <Div2></Div2>
  </Container>
);

export default Header;

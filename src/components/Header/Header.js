import React from "react";
import { AiFillInstagram } from "react-icons/ai";
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
    <Div2>
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
    </Div2>
    <Div3>
      <SocialIcons
        href="https://www.instagram.com/gpsikoloji06"
        target="_blank"
      >
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

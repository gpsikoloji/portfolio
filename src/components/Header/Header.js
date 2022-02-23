import Link from "next/link";
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
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center" }}>
          <img src="/gp.png" style={{ width: "auto", height: "90px" }} />
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="/">
          <NavLink>Hakkımızda</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/uzmanlarimiz">
          <NavLink>Uzmanlarımız</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/hizmetlerimiz">
          <NavLink>Hizmetlerimiz</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/iletisim">
          <NavLink>İletişim</NavLink>
        </Link>
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

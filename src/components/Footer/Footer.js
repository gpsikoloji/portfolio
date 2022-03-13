import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "../../styles/GlobalComponents";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>E-Posta</LinkTitle>
          <LinkItem href="mailto:gpsikoloji06@gmail.com">
            gpsikoloji06@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            &copy; 2022{" "}
            <Link href="https://www.gpsikoloji.com">gpsikoloji</Link> Tüm
            hakları saklıdır.
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons
            alwaysVisible
            href="https://www.instagram.com/gpsikoloji06"
            target="_blank"
          >
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

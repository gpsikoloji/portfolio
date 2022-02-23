import React from "react";
import { AiFillPhone, AiFillInstagram, AiFillMail } from "react-icons/ai";
import { MdMap } from "react-icons/md";
import { Link } from "../../styles/GlobalComponents";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  LinkColumn,
  LinkItem,
  LinkTitle,
  LinkText,
  SocialContainer,
  SocialIconsContainer,
} from "./ContactInfoStyles";

const ContactInfo = () => {
    return (
        <LinkColumn>
          <LinkItem href="mailto:gpsikoloji06@gmail.com">
            <AiFillMail size="3rem" />
            <LinkText> 
            gpsikoloji06@gmail.com
            </LinkText>
            
          </LinkItem>
          <LinkItem href="tel:+90545454554">
            <AiFillPhone size="3rem" />
            <LinkText> 
            0 545 454 5554
            </LinkText>
            
          </LinkItem>
          <LinkItem href="https://www.google.com/maps/place/Ankara/@39.9032923,32.6226801,11z/data=!3m1!4b1!4m5!3m4!1s0x14d347d520732db1:0xbdc57b0c0842b8d!8m2!3d39.9334334!4d32.8597641">
            <MdMap size="3rem" />
            <LinkText> 
            Ankara
            </LinkText>
            
          </LinkItem>
        </LinkColumn>
    );
};

export default ContactInfo;
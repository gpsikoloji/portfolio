import React from "react";

// import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import {
  CardContainer,
  BlogCard,
  HeaderThree,
  Img,
  TitleBox,
} from "./ServiceCardStyles";

const ServiceCard = (props) => {
  return (
    <CardContainer>
      <a href={`/hizmetlerimiz/${props.url}`}>
        <BlogCard>
          <Img src={props.image} />
          <TitleBox>
            <HeaderThree title={props.title}>{props.title}</HeaderThree>
          </TitleBox>
        </BlogCard>
      </a>
    </CardContainer>
  );
};

export default ServiceCard;

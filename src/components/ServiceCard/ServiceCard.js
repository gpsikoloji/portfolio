import React from "react";
import Link from "next/link";

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
    <Link href={`/hizmetlerimiz/${props.url}`}>
      <CardContainer>
        <BlogCard>
          <Img src={props.image} />
          <TitleBox>
            <HeaderThree title={props.title}>{props.title}</HeaderThree>
          </TitleBox>
        </BlogCard>
      </CardContainer>
    </Link>
  );
};

export default ServiceCard;

import React from "react";

// import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import {
  CardContainer,
  BlogCard,
  HeaderThree,
  Img,
  TitleBox,
} from "./PeopleCardStyles";

const PeopleCard = (props) => {
  return (
    <CardContainer>
      <BlogCard>
        <a href={`/uzmanlarimiz/${props.url}`}>
          <Img src={props.image} />
        </a>
        <TitleBox>
          <HeaderThree title={props.title}>{props.title}</HeaderThree>
        </TitleBox>
      </BlogCard>
    </CardContainer>
  );
};

export default PeopleCard;

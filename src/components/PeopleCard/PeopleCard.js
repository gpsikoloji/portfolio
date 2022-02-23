import React from "react";
import Link from "next/link";

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
    <Link href={`/uzmanlarimiz/${props.url}`}>
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

export default PeopleCard;

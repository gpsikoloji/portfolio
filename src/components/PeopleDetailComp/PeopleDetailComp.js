import React from "react";

import { peoplesData } from "../../../public/constants/constants";
import Header from "../Header/Header";

import {
  CardContainer,
  BlogCard,
  HeaderThree,
  Img,
  TitleBox,
  Description,
  DescBox,
} from "./PeopleDetailCompStyles";

export const PeopleDetailComp = (props) => {
  return (
    <CardContainer>
      <BlogCard>
        <Img src={props.image} />
        <TitleBox>
          <HeaderThree title={props.title}>{props.title}</HeaderThree>
        </TitleBox>
        <DescBox>
          <Description desc={props.desc}>{props.desc}</Description>
        </DescBox>
      </BlogCard>
    </CardContainer>
  );
};

export default PeopleDetailComp;

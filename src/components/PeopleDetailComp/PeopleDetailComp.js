import React from "react";

import { peoplesData } from "../../constants/constants";
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
          <TitleBox>
            <HeaderThree title={props.title}>{props.title}</HeaderThree>
          </TitleBox>
        <BlogCard>
          <Img src={props.image} />
          <DescBox>
            <Description desc={props.desc}>{props.desc}</Description>
          </DescBox>
        </BlogCard>
      </CardContainer>
    );
};

export default PeopleDetailComp;
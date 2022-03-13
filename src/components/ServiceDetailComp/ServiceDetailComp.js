import React from "react";

import {
  CardContainer,
  BlogCard,
  HeaderThree,
  Img,
  TitleBox,
  Description,
  DescBox,
} from "./ServiceDetailCompStyles";

export const ServiceDetailComp = (props) => {
  return (
    <CardContainer>
      <BlogCard>
        <Img src={props.image} />
        <TitleBox>
          <HeaderThree title={props.title}>{props.title}</HeaderThree>
        </TitleBox>
        <DescBox>
          <Description
            desc={props.desc}
            dangerouslySetInnerHTML={{ __html: props.desc }}
          ></Description>
        </DescBox>
      </BlogCard>
    </CardContainer>
  );
};

export default ServiceDetailComp;

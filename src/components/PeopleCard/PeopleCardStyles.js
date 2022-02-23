import styled from "styled-components";

export const CardContainer = styled.div`
  width: 50%;
  padding: 1rem;
  display: block;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const BlogCard = styled.div`
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  width: 100%;
  height: 100%;
  display: block;
  background-color: ${(props) => props.theme.colors.cardBackground};
`;

export const TitleBox = styled.div`
  padding: 1rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.cardText};
  padding: 0.5rem 0;
  font-size: 2.5rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 2rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2.5rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.5rem;
  }
`;

export const Img = styled.img` 
  border-radius: 50%;
  width: 50%;
  cursor: pointer;
  object-fit: cover;
  overflow: hidden;
`;

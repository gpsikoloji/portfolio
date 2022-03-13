import styled from "styled-components";

export const CardContainer = styled.div`
  width: 25%;
  padding: 1rem;
  display: block;
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 33.3%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 50%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const BlogCard = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 100%;
  height: 100%;
  display: block;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.cardBackground};
`;

export const TitleBox = styled.div`
  padding: 1rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
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
  width: 100%;
  height: 15rem;
  object-fit: cover;
  overflow: hidden;
`;

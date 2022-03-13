import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: block;
`;

export const BlogCard = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  display: block;
  background-color: transparent;
`;

export const TitleBox = styled.div`
  text-align: center;
  padding: 1rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  color: ${(props) => props.theme.colors.cardText};
  padding: 1rem 0;
  font-size: 2.5rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 2.5rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2rem;
  }
`;

export const DescBox = styled.div`
  text-align: left;
  padding: 1rem;
`;

export const Description = styled.h3`
  font-weight: 500;
  color: ${(props) => props.theme.colors.cardText};
  padding: 0.5rem 0;
  font-size: 2rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 2rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.5rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`;

export const Img = styled.img`
  border-radius: 50%;
  width: 35%;
  object-fit: cover;
  overflow: hidden;
`;

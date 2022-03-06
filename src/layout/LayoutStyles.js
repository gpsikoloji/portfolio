import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  min-height: calc(100vh - 245px);
  margin: auto;
  padding-top: 110px;
  @media ${(props) => props.theme.breakpoints.md} {
    padding-top: 160px;
  }
`;

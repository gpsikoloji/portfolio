import styled from "styled-components";

export const LinkItem = styled.a`
font-size: 18px;
line-height: 30px;
color: rgba(255, 255, 255, 0.75);
margin-bottom: 16px;
transition: 0.3s ease;
position: relative;
left: 0;
display: flex;
align-items: center;

&:hover {
  color: #fff;
  left: 6px;
}

@media ${(props) => props.theme.breakpoints.md} {
  font-size: 17px;
  line-height: 28px;
  display: flex;
}

@media ${(props) => props.theme.breakpoints.sm} {
  font-size: 15px;
  line-height: 14px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
`;
export const LinkTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 16px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 8px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
    padding-right: 16px;
    flex-wrap: wrap;
  }
`;

export const LinkText = styled.span`
  padding-left: 1rem;
`;
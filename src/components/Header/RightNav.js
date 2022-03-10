import React from 'react';
import styled from 'styled-components';

import {
    NavLink,
  } from "./HeaderStyles";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${(props) => props.theme.colors.headerText};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 65vh;
    width: 300px;
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
        a{
            color: ${(props) => props.theme.colors.background1};
          }
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
       <li>
        <NavLink href="/">Hakkımızda</NavLink>
      </li>
      <li>
        <NavLink href="/uzmanlarimiz">Uzmanlarımız</NavLink>
      </li>
      <li>
        <NavLink href="/hizmetlerimiz">Hizmetlerimiz</NavLink>
      </li>
      <li>
        <NavLink href="/iletisim">İletişim</NavLink>
      </li>
    </Ul>
  )
}

export default RightNav

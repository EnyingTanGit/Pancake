import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header: React.FC<any> = () => {
  const navigate = useNavigate();

  return (
    <HeaderBar id="sticky-header">
      <Container>
        <Menu onClick={() => navigate("/")}>Home</Menu>
        <Menu onClick={() => navigate("/Pancake")}>Pancake</Menu>
        <Menu onClick={() => navigate("/Jam")}>Jam</Menu>
        <Menu onClick={() => navigate("/Contact")}>Contact</Menu>
      </Container>
    </HeaderBar>
  )
}

const HeaderBar = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex !important;
  flex-direction: row;
  align-items: center;
  text-align: center;
  padding: 20px 0;
  color: var(--header-text);
  background-color: var(--header);
  
  &.sticky {
    border-bottom: solid 1px #dddddd;
    transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out
  }
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Menu = styled.a`
  cursor: pointer;
  font-size: 13px;
  padding: 0px 25px;
  text-transform: uppercase;
  transition: all .3s ease;
  font-weight: 700;
  transition: color .25s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
  :hover {
    color: var(--header-text-hover);
  }
`;


export default Header;


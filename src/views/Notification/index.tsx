import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header: React.FC<any> = () => {
  const navigate = useNavigate();

  return (
    <NotificationBar id="sticky-notification">
      <Container>
        <Span>Pork prices have risen these days </Span>
        <Button onClick={() => navigate("/")}>OK</Button>
        <Button onClick={() => navigate("/")}>Learn more</Button>
      </Container>
    </NotificationBar>
  )
}

const NotificationBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20px;
  text-align: center;
  box-sizing: border-box;
  color: white;
  background-color: var(--notification-bg-color);
  opacity: 0.8;
`;

const Container = styled.div`
  padding: 5px 10px;
  margin: 0 auto;
`;

const Span = styled.span`
  font-size:15px;
  font-weight: 400;
  margin-right: 20px;
`;

const Button = styled.a`
  font-size: 14px;
  padding: 10px 30px;
  margin: 0 10px;
  transition: all .3s ease;
  font-weight: 500;
  border: 1px solid;
  border-radius: 2px;
  transition: color .25s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
  :hover {
    color: gray;
  }
`;


export default Header;


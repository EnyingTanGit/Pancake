import React from 'react';
import styled from 'styled-components';

const Home: React.FC = () => {
  return (
    <HomeBar>
        <h1>Hello, I am a Bot.</h1>
    </HomeBar>
  );
};

const HomeBar = styled.div`
  text-align: center;
`;

export default Home;
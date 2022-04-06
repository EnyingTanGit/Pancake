import { RouteObject, useRoutes } from 'react-router-dom';
import styled from 'styled-components';

import Home from '../views/Home';
import Pancake from '../views/Pancake';
import Jam from '../views/Jam';
import Contact from "../views/Contact";

function getRoutes() {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Home />,
      children: []
    },
    {
      path: '/Home',
      element: <Home />,
      children: []
    },
    {
      path: '/Pancake',
      element: <Pancake />,
      children: []
    },
    {
      path: '/Jam',
      element: <Jam />,
      children: []
    },
    {
      path: '/Contact',
      element: <Contact />,
      children: []
    },
  ];

  return routes
}

const Router: React.FC = () => {

  const routes: RouteObject[] = getRoutes();
  const routing = useRoutes(routes);

  return (
    <Content>
      {routing}
    </Content>
  )
}

const Content = styled("div")`
  box-sizing: border-box;  
  margin-top: 60px;
  background-color: white;
  padding: 20px;
`;

export default Router;
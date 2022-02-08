/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from 'containers/MainPage/Loadable';
import AddUsernamePage from 'containers/AddUsernamePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import styled from 'styled-components';

import GlobalStyle from '../../global-styles';
import Navbar from '../../components/Navbar';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 20px;
  flex-direction: column;
  text-align: center;
`;

export default function App() {
  return (
    <AppWrapper>
      <Navbar />

      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/add" component={AddUsernamePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}

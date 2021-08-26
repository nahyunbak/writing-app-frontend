import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/Landing/index';
import Loading from './components/Loading/index';

import MainContainer from './containers/landing/MainContainer'
import AuthPage from './pages/LoginPage';




const App = () => {
  return (
    <>
    <Route component={Landing} path={['/@:username', '/']} exact />
    <Route component={MainContainer} path={['/main']} exact />
    <Route component={Loading} path={['/loading']} exact />
    <Route component={AuthPage} path={['/authask']} exact />
    </>
  );
};

export default App;
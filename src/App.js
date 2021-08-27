import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/Landing/index';
import Loading from './components/Loading/index';
import Main from './components/Main/index';


import AuthPage from './pages/AuthPage';
import SurveyPage from './pages/SurveyPage';




const App = () => {
  return (
    <>
    <Route component={Landing} path={['/@:username', '/']} exact />
    <Route component={Main} path={['/Main']} exact />
    <Route component={Loading} path={['/loading']} exact />
    <Route component={AuthPage} path={['/auth/login']} exact />
    <Route component={SurveyPage} path={['/survey/:step']} exact />

    </>
  );
};

export default App;
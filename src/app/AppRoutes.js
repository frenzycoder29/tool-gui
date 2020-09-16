import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Typography = lazy(() => import('./basic-ui/Typography'));

const BasicElements = lazy(() => import('./form-elements/BasicElements'));

const BasicTable = lazy(() => import('./tables/BasicTable'));

const FontAwesome = lazy(() => import('./icons/FontAwesome'));


const ChartJs = lazy(() => import('./charts/ChartJs'));
// my AImate new Routes
const Project = lazy(() => import('./components/Project/project'));
const CopyProject = lazy(() => import('./components/CopyProject/copyproject'));
const CreateProject = lazy(() => import('./components/CreateProject/createproject'));
const ModelPage = lazy(() => import('./components/ModelPage/modelpage'));
const Train = lazy(() => import('./components/Train/train'));
const Test = lazy(() => import('./components/Test/test'));
const Deploy = lazy(() => import('./components/Deploy/deploy'));
const Dataset = lazy(() => import('./components/Dataset/dataset'));
const Text = lazy(() => import('./components/Text/text'));
const Video = lazy(() => import('./components/Video/video'));
const Assignment = lazy(() => import('./components/Assignment/assignment'));

//
const Error404 = lazy(() => import('./user-pages/Error404'));
const Error500 = lazy(() => import('./user-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));

const BlankPage = lazy(() => import('./user-pages/BlankPage'));


class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
        <Route exact path="/" component={ Dashboard } />

          <Route exact path="/dashboard" component={ Dashboard } />

          <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route path="/basic-ui/typography" component={ Typography } />

          <Route path="/form-Elements/basic-elements" component={ BasicElements } />

          <Route path="/tables/basic-table" component={ BasicTable } />

          <Route path="/icons/font-awesome" component={ FontAwesome } />

          <Route path="/charts/chart-js" component={ ChartJs } />


          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register1 } />

          <Route path="/error-404" component={ Error404 } />
          <Route path="/error-500" component={ Error500 } />

          <Route path="/user-pages/blank-page" component={ BlankPage } />
          <Route path="/form-elements/project" component={Project} />
          <Route path="/form-elements/copyproject" component={CopyProject} />
          <Route path="/form-elements/createproject" component={CreateProject} />

          <Route path="/form-elements/modelpage" component={ModelPage} />

          <Route path="/form-elements/train" component={Train} />

          <Route path="/form-elements/test" component={Test} />

          <Route path="/form-elements/deploy" component={Deploy} />

          <Route path="/form-elements/dataset" component={Dataset} />

          <Route path="/basic-ui/assignment" component={ Assignment } />

          <Route path="/basic-ui/video" component={ Video } />

          <Route path="/basic-ui/text" component={ Text } />


          <Redirect to="/user-pages/error-404" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
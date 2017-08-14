import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from './Layout';
import { NotFoundPage } from './NotFoundPage';
import { HomePage } from './HomePage';
import { TeamPage } from './TeamPage';
import { StudentPage } from './StudentPage';
import { AdminPage } from './AdminPage';

export const App = () => (
  <Layout>
    <Switch>
      <Redirect exact from="/" to="home"/>
      <Route exact path="/home" render={() => <HomePage />} />
      <Route path="/team/:number" render={(props) => <TeamPage teamNum={props.match.params.number} user="Steven Gresh" />} />
      <Route path="/student/:number" render={(props) => <StudentPage studentNum={props.match.params.number} user="Steven Gresh" />} />
      <Route exact path="/admin" render={() => <AdminPage />} />
      <Route component={NotFoundPage} />
    </Switch>
  </Layout>
);

export default App;

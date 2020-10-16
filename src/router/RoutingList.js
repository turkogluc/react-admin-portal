import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../page/dashboard/Dashboard';

const routes = [
  {
    path: '/',
    component: Dashboard,
    key: '/',
  },
];

function RoutingList() {
  return routes.map(item => {
    if (item.path.split('/').length === 2) {
      return (
        <Route
          exact
          path={item.path}
          component={item.component}
          key={item.key}
        />
      );
    }
    return <Route path={item.path} component={item.component} key={item.key} />;
  });
}

export default RoutingList;

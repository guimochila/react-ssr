import * as React from 'react';
import { Router, RouteComponentProps } from '@reach/router';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

type Props = { component: React.FunctionComponent } & RouteComponentProps;

const Route: React.FunctionComponent<Props> = ({
  component: Component,
  ...props
}) => <Component {...props} />;

const Routes: React.FC = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <NotFound default />
    </Router>
  );
};

export default Routes;

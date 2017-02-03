import * as React from 'react';
import {
  IndexRoute,
  Route
} from 'react-router';

import {
  App,
  GuestOnly,
  Login,
  BetaEntry,
  RegisterMember,
} from './containers';

export default function AppRouter() {
  return (
    <Route path="/" component={App} >
      <Route component={GuestOnly}>
        <Route path="/login" component={Login} />
        <Route path="/beta_entry" component={BetaEntry} />
        <Route path="/register_member" component={RegisterMember} />
      </Route>
    </Route>
  );
}

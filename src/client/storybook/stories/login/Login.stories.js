import React from 'react';
import {storiesOf, action} from '@kadira/storybook';

import '!style!css!stylus!../../../app/styles/index.styl';

import {Provider} from 'react-redux';
import configureStore from '../../../app/stores/configureStore';
import {Login} from '../../../app/components/login';

const defaultProps = {
  // empty
};

storiesOf('container.Login', module)
.add('general', () => (
  <Provider store={configureStore()}>
    <Login {...{...defaultProps}} />
  </Provider>
));

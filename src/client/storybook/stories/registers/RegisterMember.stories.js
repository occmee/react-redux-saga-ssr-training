import React from 'react';
import {storiesOf, action} from '@kadira/storybook';

import '!style!css!stylus!../../../app/styles/index.styl';

import {Provider} from 'react-redux';
import configureStore from '../../../app/stores/configureStore';
import {RegisterMember} from '../../../app/components/registers';

const defaultProps = {
  // empty
};

storiesOf('container.RegisterMember', module)
.add('general', () => (
  <Provider store={configureStore()}>
    <RegisterMember {...{...defaultProps}} />
  </Provider>
));

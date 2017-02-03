import React from 'react';
import {storiesOf, action} from '@kadira/storybook';

import '!style!css!stylus!../../../app/styles/index.styl';

import {Provider} from 'react-redux';
import configureStore from '../../../app/stores/configureStore';
import {BetaEntry} from '../../../app/components/betaEntry';

const defaultProps = {
  // empty
};

storiesOf('container.BetaEntry', module)
.add('general', () => (
  <Provider store={configureStore()}>
    <BetaEntry {...{...defaultProps}} />
  </Provider>
));

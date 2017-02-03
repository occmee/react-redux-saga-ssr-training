import React from 'react';
import {storiesOf, action} from '@kadira/storybook';

storiesOf('sample.Button', module)
.add('with text', () => (
  <button onClick={action('clicked')}>Hello, 世界</button>
))
.add('with kao-moji', () => (
  <button onClick={action('clicked')}>(・o・)</button>
));

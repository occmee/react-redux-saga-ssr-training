import React from 'react';
import {storiesOf, action} from '@kadira/storybook';

import {Input} from '../../../app/components/forms';
import '!style!css!stylus!../../../app/styles/index.styl';

const defaultProps = {
  input: {
    value: 'テスト'
  },
  meta: {
    error: null,
    touched: false,
  },
  type: 'text',
  label: 'ユーザ名',
  placeholder: 'masahiko_kubara',
  required: true,
};

storiesOf('forms.Input', module)
.add('general', () => (
  <Input {...{...defaultProps, required: false}}/>
))
.add('required', () => (
  <Input {...defaultProps}/>
))
.add('without label', () => (
  <Input {...{...defaultProps, label: undefined, required: false}}/>
))
.add('required with empty value', () => (
  <Input
    {...{
      ...defaultProps,
      input: {value: ''},
      meta: {error: '必須項目です', touched: true},
    }}
  />
))
;

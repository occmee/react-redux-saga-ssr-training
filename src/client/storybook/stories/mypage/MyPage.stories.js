import React from 'react';
import {storiesOf, action} from '@kadira/storybook';

import '!style!css!stylus!../../../app/styles/index.styl';

import {Provider} from 'react-redux';
import configureStore from '../../../app/stores/configureStore';
import {MyPage} from '../../../app/components/mypage';

const defaultProps = {
  badge: {waiting: 2, executing: 64},
  user: {icon: null, name: 'Shotaro Kato', email: 'shotaro_kato@relationsgroup.co.jp'},
  notifications: [],
  score: {score: 324, finish: 14, post: 54, reaction: 12, assist: 86},
  projects: [
    {
      id: 1, title: 'CRMの運用を改善する', status: 'EXECUTING',
      members: [
        {icon: null, name: 'Shotaro Kato', email: 'shotaro_kato@relationsgroup.co.jp'},
      ],
      description: '顧客情報を分析して、科学的な営業をできる状態にします。顧客情報の分析には、CRMツールを利用します。',
      lastUpdate: {
        user: {icon: null, name: 'Shotaro Kato', email: 'shotaro_kato@relationsgroup.co.jp'},
        updatedAt: '2017-01-30 12:34:56',
      },
      stat: {post: 4, like: 16, comment: 4},
    },
  ],
};

storiesOf('container.MyPage', module)
.add('general', () => (
  <Provider store={configureStore()}>
    <MyPage {...{...defaultProps}} />
  </Provider>
));

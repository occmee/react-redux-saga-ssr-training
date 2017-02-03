import React, {PropTypes, Component} from 'react';
import Alert from 'react-s-alert';
import {ErrorStatus} from '../api/errors.js';

import '!style!css!react-s-alert/dist/s-alert-default.css';
import '!style!css!react-s-alert/dist/s-alert-css-effects/jelly.css';

const alertConfig = {
  position: 'top-right',
  effect: 'jelly',
  timeout: 5000
};

export default class Error extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.error.isError && newProps.error.isError) {
      console.log('[component/Error]', newProps);
      this._showError(newProps.error.error || {});
    }
  }

  _showError(e) {
    const errorMsg = `[${e.title}] ${(e.messages || []).join('\n')}`;

    if (e.status === ErrorStatus.unauthorized) {
      // cookie.remove('accessToken');
      // this.context.router.push('/login');
      Alert.info('認証が切れ、ログアウトしました。');

    } else if (e.status === ErrorStatus.badRequest) {
      Alert.info(errorMsg, alertConfig);
      Alert.error('入力されたデータの一部に問題があり、処理できませんでした。入力内容を再度ご確認ください。', alertConfig);

    } else if (e.status === ErrorStatus.forbidden) {
      Alert.info(errorMsg, alertConfig);
      Alert.error('この操作に必要な権限がありません。管理者にお問い合わせください。', alertConfig);

    } else if (e.status === ErrorStatus.notFound || e.status === ErrorStatus.gone) {
      Alert.info(errorMsg, alertConfig);
      Alert.error('対象が見つかりません。入力内容が間違っているか、すでに消去されています。', alertConfig);

    } else if (e.status === ErrorStatus.conflict) {
      Alert.info(errorMsg, alertConfig);
      Alert.error('別の担当者が、操作を先に行ったため、内容を上書きできません。閲覧画面で更新ボタンを押して、内容をご確認ください。', alertConfig);

    } else if (e.status === ErrorStatus.badGateway
      || e.status === ErrorStatus.serviceUnavailable
      || e.status === ErrorStatus.gatewayTimeout
    ) {
      Alert.info(errorMsg, alertConfig);
      Alert.error('サーバが一時的に利用できない状態です。申し訳ございません。時間を置いて、再度処理を行ってください。', alertConfig);

    } else if (e.status >= ErrorStatus.badRequest && e.status < ErrorStatus.internalServerError) {
      Alert.info(errorMsg, alertConfig);
      Alert.error('この操作にサーバが対応できませんでした。申し訳ございません。再度処理を行うか、管理者にお問い合わせください。', alertConfig);

    } else if (e.status >= ErrorStatus.internalServerError
      && e.status < ErrorStatus.internalServerError + 100
    ) {
      Alert.info(errorMsg, alertConfig);
      Alert.error('サーバ側でエラーが発生しました。申し訳ございません。再度処理を行うか、管理者にお問い合わせください。', alertConfig);

    } else if (e.status === undefined) {
      // errorオブジェクトがおかしい。メッセージが作れないので、汎用的な文章を提示
      Alert.error('不明なエラーが発生しました。申し訳ございません。再度処理を行うか、管理者にお問い合わせください。', alertConfig);

    } else {
      // 不明なエラー？
      Alert.error(errorMsg, alertConfig);
    }

    this.props.viewActions.resetError();
  }

  render() {
    return (
      <Alert stack={true} timeout={3000} />
    );
  }
}

Error.propTypes = {
  isError: PropTypes.bool,
  error: PropTypes.object,
  viewActions: PropTypes.object,
};

Error.contextTypes = {
  router: PropTypes.object,
};

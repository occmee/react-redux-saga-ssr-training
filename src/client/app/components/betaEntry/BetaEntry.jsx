import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {BetaEntryForm} from './';

export default class BetaEntry extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.betaEntryActions.submit(values, () => {
      console.log('entry succeeded');
    });
  }

  render() {
    return (
      <div className="p-betaEntry">
        <div className="p-betaEntry__keyVisual">
          <div className="p-betaEntry__keyVisualInner">
            <h2 className="p-betaEntry__keyVisual__head">
              未来のために、さぁはじめよう。
            </h2>
            <p className="p-betaEntry__keyVisual__detail">
              トップダウンのアプローチではなく、ボトムアップで一人ひとりが生産性を改善していく時代。
              チームの緊急ではないが重要な「第2領域」をボトムアップで実行するサポートをします。
              これからの生産性はボトムアップが主流に。
              個人、チーム、組織の未来のために今日からSECONDを！
            </p>
          </div>
        </div>
        <div className="p-betaEntry__contents">
          <div className="p-betaEntry__contentsInner">
            <div className="p-betaEntry__notice">
              <h2 className="p-betaEntry__notice__head">
                必ずお読みください
              </h2>
              <p className="p-betaEntry__notice__detail">
                現在、招待制で限定されたユーザー様対象にクローズドβ版を提供しております。
              </p>
              <ul className="p-betaEntry__notice__list">
                <li className="p-betaEntry__notice__listItem">
                  クローズドβへの参加には審査がございます。
                </li>
                <li className="p-betaEntry__notice__listItem">
                  参加時には利用規約に承諾いただきますようお願い致します。
                </li>
                <li className="p-betaEntry__notice__listItem">
                  クローズドβ期間中においても、無料トライアル期間は1ヶ月となります。
                </li>
              </ul>
            </div>
            <BetaEntryForm onSubmit={ values => {this.handleSubmit(values);} } />
          </div>
        </div>
      </div>
    );
  }
}

BetaEntry.propTypes = {
  betaEntryActions: PropTypes.object,
  viewActions: PropTypes.object,
};

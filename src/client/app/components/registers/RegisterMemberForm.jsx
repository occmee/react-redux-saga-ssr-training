import React, {Component, PropTypes} from 'react';
import {Field, Fields, reduxForm} from 'redux-form';
import {Input, Select, FullName} from '../../components/forms';
import * as validator from 'validator';

const TEST_ALPHA_NUM = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,}$/i;

function validate(values) {
  const errors = {};
  const requiredFields = ['accountName', 'password'];

  requiredFields.forEach(fieldName => {
    if (!values[fieldName]) {
      errors[fieldName] = '必須項目です';
    }
  });

  if (values.password) {
    if (!TEST_ALPHA_NUM.test(values.password)) {
      errors.password = '英字と数字を両方含むように指定してください';
    }
    if (!validator.isAscii(values.password)) {
      errors.password = '半角英数字のみ有効です';
    }
    if (!validator.isLength(values.password, {min: 8})) {
      errors.password = 'パスワードは8文字以上必要です';
    }
  }
  if (!Array.isArray(values.jobCategory) || values.jobCategory.length < 1) {
    errors.jobCategory = '1つ以上選択してください';
  }

  return errors;
}

const mockEmployeeNumber = [
  {order: 1, key: 'SALES', label: '営業'},
  {order: 2, key: 'DESIGNER', label: 'デザイナー'},
  {order: 3, key: 'ENGINEER', label: 'エンジニア'},
  {order: 4, key: 'CUSTOMER_SUPPORT', label: 'カスタマーサポート'},
  {order: 5, key: 'CUSTOMER_SUCCESS', label: 'カスタマーサクセス'},
  {order: 6, key: 'MARKETING', label: 'マーケティング'},
  {order: 7, key: 'HUMAN_RESOURCE', label: '人事'},
  {order: 8, key: 'GENERAL_AFFAIRS', label: '総務'},
  {order: 9, key: 'OTHER', label: 'その他'},
];

class RegisterMemberForm extends Component {
  render() {
    const {handleSubmit, invalid} = this.props;

    return (
      <form className="p-registerMember__form" onSubmit={ handleSubmit }>
        <div className="p-registerMember__formItem">
          <Field component={ Input }
            name="accountName" type="text"
            label="アカウント名"
            placeholder="masahiko_kubara"
            required={true}
          />
        </div>
        <div className="p-registerMember__formItem">
          <Field component={ Input }
            name="password" type="password"
            label="パスワード"
            placeholder="8文字以上、半角の英字と数字を1つ以上含む"
            required={true}
          />
        </div>
        <div className="p-registerMember__formItem">
          <button type="submit"
            className="p-registerMember__formItem__submit"
            disabled={ invalid }
          >登録</button>
        </div>
      </form>
    );
  }
}

RegisterMemberForm.propTypes = {
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
};

export default reduxForm({
  form: 'registerMember',
  validate,
})(RegisterMemberForm);

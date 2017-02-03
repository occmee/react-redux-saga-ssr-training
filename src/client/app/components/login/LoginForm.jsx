import React, {Component, PropTypes} from 'react';
import {Field, Fields, reduxForm} from 'redux-form';
import {Input, Select, FullName} from '../../components/forms';

function validate(values) {
  const errors = {};
  const requiredFields = ['mailAddress', 'password'];

  requiredFields.forEach(fieldName => {
    if (!values[fieldName]) {
      errors[fieldName] = '必須項目です';
    }
  });

  return errors;
}

class LoginForm extends Component {
  render() {
    const {handleSubmit, invalid} = this.props;

    return (
      <form className="p-login__form" onSubmit={ handleSubmit }>
        <div className="p-login__formItem">
          <Field component={ Input }
            name="mailAddress" type="text"
            label="メールアドレス"
            placeholder="メールアドレス"
          />
        </div>
        <div className="p-login__formItem">
          <Field component={ Input }
            name="password" type="password"
            label="パスワード"
            placeholder="パスワード"
          />
        </div>
        <div className="p-login__formItem">
          <button type="submit"
            className="p-login__formItem__submit"
            disabled={ invalid }
          >ログイン</button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
};

export default reduxForm({
  form: 'login',
  validate,
})(LoginForm);

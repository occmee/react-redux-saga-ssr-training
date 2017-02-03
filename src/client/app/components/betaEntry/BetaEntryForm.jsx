import React, {Component, PropTypes} from 'react';
import {Field, Fields, reduxForm} from 'redux-form';
import {Input, Select, FullName} from '../../components/forms';
import {BusinessTypes, RangeOfEmployees} from '../../../../common/enum';
import {validateBetaEntry} from '../../../../common/validator';

const BLANK_OPTION = {order: 0, value: 0, label: '▼選択してください'};

class BetaEntryForm extends Component {
  constructor(props) {
    super(props);

    this.businessTypeList = [BLANK_OPTION, ...BusinessTypes.list()];
    this.rangeOfEmployees = [BLANK_OPTION, ...RangeOfEmployees.list()];
  }

  render() {
    const {handleSubmit, invalid} = this.props;

    return (
      <form className="p-betaEntry__form" onSubmit={handleSubmit}>
        <div className="p-betaEntry__formItem">
          <Fields component={FullName}
            names={['applicantLastName', 'applicantFirstName']}
            label="姓名"
            placeholders={{last: '姓', first: '名'}}
            required={true}
          />
        </div>
        <div className="p-betaEntry__formItem">
          <Field component={Input}
            name="email" type="text"
            label="メールアドレス"
            placeholder="your_mail_address@domain.com"
            required={true}
          />
        </div>
        <div className="p-betaEntry__formItem">
          <Field component={Input}
            name="phoneNumber" type="text"
            label="電話番号"
            placeholder="03-1234-5678"
            required={true}
          />
        </div>
        <div className="p-betaEntry__formItem">
          <Field component={Input}
            name="companyName" type="text"
            label="会社名"
            placeholder="株式会社SECOND"
            required={true}
          />
        </div>
        <div className="p-betaEntry__formItem">
          <Field component={Input}
            name="applicantDepartment" type="text"
            label="部署"
            placeholder="営業部"
            required={true}
          />
        </div>
        <div className="p-betaEntry__formItem">
          <Field component={Select}
            name="businessType"
            label="業種"
            items={this.businessTypeList}
            required={true}
          />
        </div>
        <div className="p-betaEntry__formItem">
          <Field component={Select}
            name="rangeOfNumbers"
            label="従業員数"
            items={this.rangeOfEmployees}
            required={true}
          />
        </div>
        <div className="p-betaEntry__formItem">
          <button type="submit"
            className="p-betaEntry__formItem__submit"
            disabled={invalid}
          >クローズドβ版に申し込む</button>
        </div>
      </form>
    );
  }
}

BetaEntryForm.propTypes = {
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
};

export default reduxForm({
  form: 'betaEntry',
  validate: validateBetaEntry,
})(BetaEntryForm);

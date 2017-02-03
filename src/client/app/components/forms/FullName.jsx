import React, {PropTypes} from 'react';

const FullName = ({
  label, placeholders, required, names, ...fields
}) => {
  const lastName = fields[names[0]];
  const firstName = fields[names[1]];
  const jsxErrorLastName = lastName.meta.touched && lastName.meta.error && (
    <p className="c-formFullName__field__error__line">{ lastName.meta.error }</p>
  );
  const jsxErrorFirstName = firstName.meta.touched && firstName.meta.error && (
    <p className="c-formFullName__field__error__line">{ firstName.meta.error }</p>
  );
  const jsxError = (jsxErrorLastName || jsxErrorFirstName) && (
    <div className="c-formFullName__field__error">
      {jsxErrorLastName}
      {jsxErrorFirstName}
    </div>
  );

  return (
    <div className="c-formFullName">
      <label className={`c-formFullName__label ${required ? 'required' : ''}`}>{ label }</label>
      <div className="c-formFullName__field">
        <div className="c-formFullName__inputFullName">
          <input type="text"
            className="c-formFullName__inputFullName__last"
            placeholder={ placeholders && placeholders.last }
            { ...lastName.input }
          />
          <input type="text"
            className="c-formFullName__inputFullName__first"
            placeholder={ placeholders && placeholders.first }
            { ...firstName.input }
          />
        </div>
        { jsxError }
      </div>
    </div>
  );
};
export default FullName;

FullName.propTypes = {
  label: PropTypes.string,
  placeholders: PropTypes.object,
  required: PropTypes.bool,
  names: PropTypes.array,
  fields: PropTypes.object,
};

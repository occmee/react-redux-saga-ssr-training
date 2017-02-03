import React, {PropTypes} from 'react';

const Input = ({
  input, meta: {error, touched}, type, label, placeholder, required,
}) => {
  const jsxError = touched && error && (
    <p className="c-formInput__field__error">
      { error }
    </p>
  );

  return (
    <div className="c-formInput">
      <label className={`c-formInput__label ${required ? 'required' : ''}`}>{ label }</label>
      <div className="c-formInput__field">
        <input type={ type || "text" }
          className="c-formInput__field__input"
          placeholder={ placeholder }
          { ...input }
        />
        { jsxError }
      </div>
    </div>
  );
};
export default Input;

Input.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

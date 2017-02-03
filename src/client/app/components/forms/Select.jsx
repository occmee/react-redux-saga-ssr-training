import React, {PropTypes} from 'react';

const Select = ({
  input, meta: {error, touched}, items, label, required,
}) => {
  const itemsSorted = !Array.isArray(items) ? [] :
    items.sort((a, b) => { return a.order - b.order; });

  const jsxOptions = itemsSorted.map(item => {
    return (
      <option className="c-formSelect__option"
        key={ item.value }
        value={ item.value }
      >
        { item.label }
      </option>
    );
  });
  const jsxError = touched && error && (
    <p className="c-formSelect__field__error">
      { error }
    </p>
  );

  return (
    <div className="c-formSelect">
      <label className={`c-formSelect__label ${required ? 'required' : ''}`}>{ label }</label>
      <div className="c-formSelect__field">
        <select className="c-formSelect__field__select"
          { ...input }
        >
          { jsxOptions }
        </select>
        { jsxError }
      </div>
    </div>
  );
};
export default Select;

Select.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  items: PropTypes.array,
  label: PropTypes.string,
  required: PropTypes.bool,
};

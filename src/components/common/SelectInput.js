import React from 'react';

const SelectInput = ({ name, label, value, defaultOption, options, onChange, error }) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + "has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor="{name}">{label}</label>
      <div className="field">
        <select
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}>
          <option value="">{defaultOption}</option>
          {options.map(
            option => <option key={option.value} value={option.value}>{option.text}</option>
          )}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default SelectInput;

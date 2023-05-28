import React from 'react';

const Input = ({
  type,
  name,
  id,
  onChange,
  value,
  onBlur,
  maxLength,
  cols,
  rows,
  accept,
  placeholder,
  classes,
}) => {
  return (
    <>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        id={id}
        maxLength={maxLength}
        className={classes}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        cols={cols}
        rows={rows}
        accept={accept}
      />
    </>
  );
};

export default Input;

import React from 'react';

const Button = ({ variant = 'brand', className = '', children, ...props }) => {
  const baseClass = variant === 'outline' ? 'btn btn-outline-brand' : 'btn btn-brand';
  const classes = `${baseClass} ${className}`.trim();
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;

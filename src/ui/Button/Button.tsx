import React from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

export const Button = ({ className, onClick, ...buttonProps }) => {
  return (
    <button
      onClick={onClick}
      className={cn(styles.button, className)}
      {...buttonProps}
    />
  );
};

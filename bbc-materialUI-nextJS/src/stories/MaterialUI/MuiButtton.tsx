import { Button } from '@material-ui/core';
import React from 'react';
import './MuiButton.css';

export interface MuiButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Material UI button variant
   */
  variant?: 'contained' | 'outlined' | 'text'
  /**
   * Material UI color definition
   */
  color: 'default' | 'inherit' | 'primary' | 'secondary'
  /**
   * Material UI fullwidth
   */
  fullWidth?: boolean;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const MuiButton: React.FC<MuiButtonProps> = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <Button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
    </Button>
  );
};

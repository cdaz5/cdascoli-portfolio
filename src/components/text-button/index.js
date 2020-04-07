import React from 'react';

import { StyledButton } from './styles';

const TextButton = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default TextButton;

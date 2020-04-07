import React from 'react';

import Spinner from 'components/spinner';

import { StyledButton } from './styles';

const Button = ({ loading, children, ...props }) => (
  <StyledButton {...props}>
    {children}
    {loading && <Spinner size="15px" margin="0 0 0 6px" />}
  </StyledButton>
);

export default Button;

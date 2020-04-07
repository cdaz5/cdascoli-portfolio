import styled, { css } from 'styled-components';

import { colorLookup } from 'styles';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 12px 35px;
  border: none;
  font-size: 1rem;
  color: ${colorLookup('accent')};
  cursor: pointer;
  outline: 0;

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${colorLookup('ltGray')};
      cursor: not-allowed;
    `}
`;

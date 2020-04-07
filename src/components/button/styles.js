import styled, { css } from 'styled-components';

import { colorLookup } from 'styles';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 12px 35px;
  border-radius: 4px;
  font-size: 1rem;
  border: 1px solid ${colorLookup('secondaryAccent')};
  color: ${colorLookup('secondaryAccent')};
  cursor: pointer;

  &:hover {
    border: 1px solid ${colorLookup('secondaryAccent')};
    background: ${colorLookup('secondaryAccent')};
    color: ${colorLookup('white')};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      border: 1px solid ${colorLookup('ltGray')};
      background: ${colorLookup('ltGray')};
      color: ${colorLookup('white')};
      cursor: not-allowed;

      &:hover {
        border: 1px solid ${colorLookup('ltGray')};
        background: ${colorLookup('ltGray')};
      }
    `}
`;

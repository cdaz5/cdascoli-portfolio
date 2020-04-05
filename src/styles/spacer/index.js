import React from 'react';
import styled, { css } from 'styled-components';

const StyledSpacer = styled.div`
  ${({ sideMargin }) =>
    sideMargin &&
    css`
      margin: 0 ${sideMargin};
    `}
  ${({ topMargin }) =>
    topMargin &&
    css`
      margin: ${topMargin} 0;
    `}
`;

const Spacer = ({ sideMargin, topMargin }) => (
  <StyledSpacer sideMargin={sideMargin} topMargin={topMargin} />
);

export default Spacer;

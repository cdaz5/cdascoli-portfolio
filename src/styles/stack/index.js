import React, { Children } from 'react';

import { StyledStack, Child } from './styles';

const Stack = ({
  children,
  padding = '0px',
  rowGap = '0px',
  direction = 'column',
  colGap = '0px',
  rowCompensation = rowGap,
  colCompensation = colGap,
  flexWrap = 'inherit',
  alignItems = 'inherit',
  childAs = 'div',
  as = 'div',
  ...props
}) => (
  <StyledStack
    as={as}
    direction={direction}
    rowGap={rowGap}
    padding={padding}
    colGap={colGap}
    flexWrap={flexWrap}
    alignItems={alignItems}
    rowCompensation={rowCompensation}
    colCompensation={colCompensation}
    {...props}
  >
    {Children.map(children, (child) => (
      <Child as={childAs}>{child}</Child>
    ))}
  </StyledStack>
);

export default Stack;

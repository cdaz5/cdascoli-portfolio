import styled, { css } from 'styled-components';

const AlIGN_TO_TEXT = {
  center: 'center',
  flexStart: 'left',
  flexEnd: 'right',
};

export const Child = styled.div``;

export const StyledStack = styled.div`
  list-style-type: none;
  display: flex;
  padding: 0;
  margin: 0;
  flex-direction: ${({ direction }) => direction};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  padding: ${({ padding }) => padding};

  ${({ rowGap, colGap, rowCompensation, colCompensation }) =>
    css`
      margin-bottom: -${rowCompensation || rowGap};
      margin-left: -${colCompensation || colGap};
    `}}

  margin-top: ${({ topMargin }) => topMargin ?? '0'};
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `};
  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `}
  ${Child} {
    padding: 0;
    margin: 0;
    ${({ width }) =>
      width &&
      css`
        width: ${width};
      `};
    margin-bottom: ${({ rowGap }) => rowGap};
    margin-left: ${({ colGap }) => colGap};
    text-align: ${({ alignItems }) => AlIGN_TO_TEXT[alignItems]}
  }
`;

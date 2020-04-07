import styled from 'styled-components';

import { colorLookup, MEDIA_QUERIES } from 'styles';

export const Card = styled.article`
  margin: 30px 30px 0 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-basis: 25%;
  min-width: 297px;
  min-height: 321px;
  background: #fff;
  box-shadow: 0em 0em 1.5em rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border-left: 4px solid ${colorLookup('accent')};
  justify-content: space-between;
  transition: all 1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  ${MEDIA_QUERIES.maxIPhone} {
    margin: 30px 0 0 0;
  }
`;

export const Header = styled.h1`
  font-size: 1.75rem;
  word-wrap: break-word;
  text-align: center;
  font-weight: 400;
  line-height: 1.2;
  color: ${colorLookup('medGray')};
`;

export const Copy = styled.p`
  line-height: 1.2;
  color: ${colorLookup('medGray')};
  font-size: 1.125rem;
`;

export const Date = styled.p`
  margin-top: 5px;
  color: ${colorLookup('ltGray')};
`;

export const Claps = styled(Copy)`
  margin: 0;
  color: ${colorLookup('codeBlue')};
`;
